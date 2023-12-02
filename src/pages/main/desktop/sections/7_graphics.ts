import { CanvasRenderingContext2DEx, normalizedCanvasContext2DEx, rem2pixels } from '../../../../utils.ts';
import { tween } from '../../../../tweenlib';
import { EaseInCubic, EaseInQuad, EaseInQuint, EaseOutQuad } from '../../../../tweenlib/ease-fns.ts';
import vertexShaderSource from '../../../../assets/shaders/demo_vertex.glsl?raw'
import fragmentShaderSource from '../../../../assets/shaders/demo_frag.glsl?raw'
import { graphics2interests, otherTypes2graphics } from './transitions.ts';
import { shaders, ShaderTools } from '../../../../shaderlib';

let readyForHigherDims = false;

type Star = {
  r: number,
  x: number,
  y: number,
};

export function Graphics() {
  const $iLikeProgramming = document.querySelector<HTMLSpanElement>('#i-like-programming')!;
  const $dimensions = document.querySelector<HTMLSpanElement>('#dimensions-line')!;
  const $whiteout = document.querySelector<HTMLDivElement>('#white-out-container')!;
  const $jsCanvas = document.querySelector<HTMLCanvasElement>('#starry-canvas')!;
  const $glCanvas = document.querySelector<HTMLCanvasElement>('#graphics-canvas')!;

  let shaderTools = initShaders($glCanvas);
  let toggleShaders = initShadersTween(shaderTools);

  initGraphicsTween($dimensions, $jsCanvas, $glCanvas, $iLikeProgramming, toggleShaders);
  initOutroTween($jsCanvas, $iLikeProgramming, $whiteout);

  otherTypes2graphics.observe((transitioned) => {
    $dimensions.classList.toggle('invisible');
    $glCanvas.parentElement!.classList.toggle('invisible');
    $whiteout.classList.toggle('invisible');
    $iLikeProgramming.classList.toggle('drop-shadow')
    toggleShaders(transitioned);

    if (transitioned) {
      const { top, right } = $iLikeProgramming.getBoundingClientRect();
      $dimensions.style.top = (top + rem2pixels(5)) + 'px';
      $dimensions.style.left = (right + rem2pixels(.475)) + 'px';
    }
  });

  return () => {
    readyForHigherDims = false;

    toggleShaders(false);
    toggleShaders = undefined as any;

    shaderTools.dispose();
    shaderTools = undefined as any;
  };
}

function initGraphicsTween(
  $dimensions: HTMLSpanElement,
  $jsCanvas: HTMLCanvasElement,
  $glCanvas: HTMLCanvasElement,
  $iLikeProgramming: HTMLSpanElement,
  toggleShaders: (on: boolean) => void,
) {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;

  const $cover1 = document.querySelector<HTMLDivElement>('#gc-cover-1')!;
  const $cover2 = document.querySelector<HTMLDivElement>('#gc-cover-2')!;

  const $span = ($dimensions.getElementsByTagName('span')[1]! as HTMLElement);

  const state1 = {
    dimension: 1,
    uncovered: +false,
  }

  tween("to", state1, { dimension: 2, uncovered: +true }, {
    scroll: $container,
    easeFn: EaseOutQuad,
    pixels: $container.clientHeight * 2.5,
    update() {
      $span.textContent = `in ${state1.dimension.toFixed(1)}D`;
      const newHeight = 50 * (1 - (state1.dimension - 1)) + 'vh';
      $cover1.style.height = newHeight;
      $cover2.style.height = newHeight;

      if (state1.dimension === 2) {
        $jsCanvas.classList.remove('invisible')
      } else {
        $jsCanvas.classList.add('invisible')
      }
    },
  });

  tween("checkpoint", $container, { add2wrapper: true });

  const state2 = {
    dimension: 2,
  }

  tween("to", state2, { dimension: 3 }, {
    scroll: $container,
    easeFn: EaseInQuad,
    pixels: $container.clientHeight * 2.5,
    update(p) {
      if (state2.dimension > 2) {
        $iLikeProgramming.textContent = `I like programming in ${state2.dimension.toFixed(1)}D`;
        $span.classList.add('invisible');
      } else {
        $iLikeProgramming.textContent = `I like programming`;
        $span.classList.remove('invisible');
      }

      readyForHigherDims = (p === 1);

      const newScale = (1 - (state2.dimension - 2));
      const newRotation = (90 * (state2.dimension - 2));
      $glCanvas.parentElement!.style.transform = `scale(${newScale}) rotate3d(1, 1, 1, ${newRotation}deg)`;

      toggleShaders(state1.uncovered !== +false && state2.dimension < 3);
    },
  });

  tween("checkpoint", $container, { add2wrapper: true });
}

function initOutroTween($jsCanvas: HTMLCanvasElement, $iLikeProgramming: HTMLSpanElement, $whiteout: HTMLDivElement) {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;

  const context = normalizedCanvasContext2DEx($jsCanvas);

  const stars = Array.from({ length: 3 }, _ => (
    Array.from({ length: 50 }, _ => ({
      x: Math.random() * context.rangeX - context.rangeX / 2,
      y: Math.random() * context.rangeY - context.rangeY / 2,
      r: Math.random() * .004,
    }))
  ));

  const state = {
    dimension: 3,
    opacity: 1,
    scale: 1,
    x: 1,
  }

  tween("to", state, { dimension: 9.9, opacity: 0, scale: 5 }, {
    scroll: $container,
    easeFn: EaseInQuint,
    pixels: $container.clientHeight * 3.5,
    offset: -$container.clientHeight * 1.5,
    update(p) {
      if (readyForHigherDims) {
        $iLikeProgramming.textContent = `I like programming in ${state.dimension.toFixed(1)}D`;
      }
      $iLikeProgramming.style.opacity = `${state.opacity}`;
      $iLikeProgramming.style.transform  = `scale(${state.scale})`;
      drawStars(context, stars, p);
    },
  });

  tween("to", state, { x: 7.9 }, {
    scroll: $container,
    easeFn: EaseInCubic,
    pixels: $container.clientHeight * 2,
    update() {
      const newScale = (1 - state.x ** .75);
      const newRotation = (90 * state.x);
      $whiteout.style.transform = `scale(${newScale}) rotate3d(1, 2, 1, ${newRotation}deg)`;
    },
  });

  tween("checkpoint", $container, { add2wrapper: true, toggle: graphics2interests });
}

function drawStars(context: CanvasRenderingContext2DEx, stars: Star[][], l: number) {
  context.clear();
  context.lineCap = "round";

  l = Math.max(0, l - .15) ** 4;
  const a = 80 * (.8 - l ** .5);

  for (let i = 0; i < stars.length; i++) {
    const colorGroup = stars[i];
    const color = [0, 60, 240][i];

    context.strokeStyle = `hsla(${color}, 65%, 88%, ${a}%)`;

    context.beginPath();
    for (let j = 0; j < colorGroup.length; j++) {
      const star = colorGroup[j];
      const stretchedX = 2 * star.x * l;
      const stretchedY = 2 * star.y * l;

      context.moveTo(star.x - stretchedX, star.y - stretchedY);
      context.lineTo(star.x + stretchedX + star.r, star.y + stretchedY + star.r);
      context.lineWidth = star.r;
    }
    context.stroke();
  }
}

function initShaders($canvas: HTMLCanvasElement): ShaderTools {
  $canvas.height = window.innerHeight;
  $canvas.width  = window.innerWidth;

  const positions = new Float32Array([
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
     1.0,  1.0,
  ]);

  return shaders($canvas, {
    vertexSources: [vertexShaderSource],
    fragmentSources: [fragmentShaderSource],
    attributes: {
      "a_position": {
        data: positions,
        type: 'FLOAT',
        size: 2,
      },
    },
    uniforms: {
      "u_resolution": {
        type: "2f",
        values: [$canvas.width, $canvas.height],
      },
      "u_time": {
        type: "1f",
        values: [0],
      }
    },
    drawMode: 'TRIANGLE_STRIP',
  });
}

const startTime = Date.now();

function initShadersTween(tools: ShaderTools): (on: boolean) => void {
  return tween("constantly", () => {
    const currentTime = (Date.now() - startTime) / 1000;

    tools.updateUniforms({
      "u_time": [currentTime],
    });
    tools.draw(0, 4);
  });
}
