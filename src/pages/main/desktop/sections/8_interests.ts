import { CanvasRenderingContext2DEx, createImages, normalizedCanvasContext2DEx } from '../../../../utils.ts';
import { tween } from '../../../../tweenlib';
import { EaseInCubic, EaseOutInQuad } from '../../../../tweenlib/ease-fns.ts';
import * as bands from '../../../../assets/images/interests'
import { graphics2interests, interests2lightBulb } from './transitions.ts';

type Images = Record<string, HTMLImageElement>;

const uris = Object.values(bands).sort(() => .5 - Math.random());

export function Interests() {
  const $canvas = document.querySelector<HTMLCanvasElement>('#interests-canvas')!;
  const $whiteout = document.querySelector<HTMLDivElement>('#white-out-container')!;
  const $container = $canvas.parentElement as HTMLDivElement;

  graphics2interests.observe(_ => {
    $container.classList.toggle('invisible');
    $whiteout.classList.toggle('invisible');
    $canvas.style.transform = 'translateY(0px)';
  });

  initTextTween($canvas);
  initImagesTween($canvas);
}

function initTextTween($canvas: HTMLCanvasElement) {
  const $text = document.querySelector<HTMLDivElement>('#interests-text-line')!;
  const $spans = [...$text.getElementsByTagName('span')];
  const lastIdx = $spans.length - 1;

  $spans.forEach(($span, i) => {
    tween({
      scroll: $canvas,
      easeFn: EaseOutInQuad,
      pixels: $canvas.clientHeight * 1.5,
      offset: $canvas.clientHeight * (i + 8) * .125,
      update(p) {
        $span.classList.toggle('interests-text-word-stage-1', p > .2);

        if (i === lastIdx) {
          $text.classList.toggle('interests-text-word-stage-2', p === 1);
        }
      }
    });
  });

  tween("checkpoint", $canvas, { add2wrapper: true });
}

type Point = {
  y: number,
  a: number,
  r: number,
};

function initImagesTween($canvas: HTMLCanvasElement) {
  const images = createImages(uris, true);

  const context = normalizedCanvasContext2DEx($canvas);
  context.scale(1, -1);

  const ry = context.rangeY / 2 - .1;

  const points = Array.from({ length: 12 }, (_, i) => ({
    y: 0,
    a: (Math.TAU * i / 24) - (Math.PI * .75),
    r: ry * 4,
  }));

  const rotation = {
    x: 90,
  };

  tween("to", rotation, { x: 0 }, {
    scroll: $canvas,
    easeFn: EaseInCubic,
    pixels: $canvas.clientHeight * 3.25,
    update(p) {
      $canvas.classList.toggle('invisible', p === 0);
      $canvas.style.transform = 'translateY(0)';
      drawImages(context, images, points, p);
    },
  });

  tween("checkpoint", $canvas, { add2wrapper: true, toggle: interests2lightBulb });
}

function drawImages(context: CanvasRenderingContext2DEx, images: Images, points: Point[], p: number) {
  context.clear();

  const rx = context.rangeX / 2 - .1;
  const da = p * Math.TAU * 1.25

  for (let i = 0; i < points.length; i++) {
    drawImage(context, points[i], images[uris[i]], da, rx)
  }
}

function drawImage(context: CanvasRenderingContext2DEx, { y, a, r }: Point, image: HTMLImageElement, da: number, rx: number) {
  const angle = a + da * .85;

  if (angle < 0 || Math.TAU < angle) {
    return;
  }

  const x = Math.cos(angle) * r;
  const z = Math.sin(angle) * r;

  const perspective = 1.8 / (z + 3.6);

  context.save();
    context.scale(perspective, perspective);
    context.moveTo(x + rx, y);

    context.save();
      context.beginPath();
        context.shadowBlur = 5;
        context.shadowColor = '#242424';
        context.fillStyle = '#24242422';

        context.translate(x + rx * 1.5, y + .4);
        context.scale(.2, .025);
        context.arc(0, 0, 1, 0, Math.PI * 2);
      context.fill();
    context.restore();

    context.drawImage(image, x + rx * 1.5 - .2, y - .2, .4, .4);
  context.restore();
}
