import { CanvasRenderingContext2DEx, normalizedCanvasContext2DEx } from '../../../../utils.ts';
import { triangle2introduction } from './transitions.ts';
import { tween } from '../../../../tweenlib';
import { EaseInCubic } from '../../../../tweenlib/ease-fns.ts';

const RECURSE_LIMIT = 4;

type State = {
  cy: number,
  recurseLim: number,
  blackOpacity: number,
  scale: number,
  prevScale: number,
}

export function Triangle() {
  const $container = document.querySelector<HTMLDivElement>('#triangles-container')!;
  const $canvas = document.querySelector<HTMLCanvasElement>('#triangles-canvas')!;

  $container.style.height = ($canvas.clientHeight * 2) + 'px';

  const state = {
    recurseLim: RECURSE_LIMIT,
    blackOpacity: 0,
    prevScale: 1,
    scale: 1,
    cy: 0,
  };

  initTriangleTween($canvas, $container, state);
}

function initTriangleTween($canvas: HTMLCanvasElement, $container: HTMLDivElement, state: State) {
  const context = normalizedCanvasContext2DEx($canvas);

  tween("to", state, { scale: 16, cy: (3 ** .5 * .5 / 5) - .2, recurseLim: 4, blackOpacity: 1 }, {
    scroll: $canvas,
    easeFn: EaseInCubic,
    pixels: $canvas.clientHeight * 1.25,
    offset: $canvas.clientHeight * -.25,
    update() {
      $container.style.backgroundColor = `rgb(0, 0, 0, ${state.blackOpacity})`;
      context.clear();

      const scalingFactor = state.scale / state.prevScale;
      context.scale(scalingFactor, scalingFactor);
      state.prevScale = state.scale;

      fractal(context, 0, state.cy + .15, 1, RECURSE_LIMIT);
    },
  });

  tween("checkpoint", $container, { toggle: triangle2introduction });
}

function fractal(context: CanvasRenderingContext2DEx, x: number, y: number, s: number, limit: number, maxLimit: number = limit) {
  const dx = s / 2;
  const dy = (Math.sqrt(3) * s) / 4;

  if (limit > 0) {
    fractal(context, x - dx / 2, y - dy / 2, s / 2, limit - 0.5, maxLimit);
    fractal(context, x + dx / 2, y - dy / 2, s / 2, limit - 1.3, maxLimit);
    fractal(context, x,          y + dy / 2, s / 2, limit - 1.8, maxLimit);
  }

  context.fillStyle = `rgb(250, 250, 250, ${.07 * (maxLimit - limit)})`;

  context.beginPath();
    context.lineTo(x + dx, y - dy);
    context.lineTo(x - dx, y - dy);
    context.lineTo(x,      y + dy);
  context.fill();
}
