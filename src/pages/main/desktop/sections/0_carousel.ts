import { addToggleableEventListener, CanvasRenderingContext2DEx, normalizedCanvasContext2DEx } from '../../../../utils.ts';
import { tween } from '../../../../tweenlib';
import { EaseLinear } from '../../../../tweenlib/ease-fns.ts';

type Circle = {
  y: number,
  a: number,
  r: number,
}

type State = {
  alpha: number,
  angle: number,
  da:    number,
}

export function Carousel() {
  const state = {
    alpha: 1,
    angle: 0,
    da: .001,
  };

  const toggleCarousel = addToggleableEventListener("mousemove", (e: MouseEvent) => {
    state.da = .01 * ((e.clientX / window.innerWidth) - .5);
  });

  const $canvas = document.querySelector<HTMLCanvasElement>('#carousel-canvas')!;
  const context = normalizedCanvasContext2DEx($canvas, 1.5);

  context.lineWidth = 0.003;

  const circles = Array.from({ length: 100 }, _ => ({
    y: Math.random() * -4,
    a: Math.random() * Math.TAU,
    r: Math.random() ** 2 * 3 - 1.5,
  }));

  initCarouselTween($canvas, context, circles, toggleCarousel, state);

  return () => {
    toggleCarousel(false);
  };
}

function initCarouselTween(
  $canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2DEx,
  circles: Circle[],
  toggleCarousel: (on: boolean) => void,
  state: State,
) {
  tween("to", state, { alpha: 0 }, {
    scroll: $canvas,
    easeFn: EaseLinear,
    pixels: $canvas.clientHeight,
    constant: true,
    update(p) {
      toggleCarousel(p <= .9);
      drawCarousel(context, circles, state);
      state.angle += state.da;
    },
  });
}

function drawCarousel(
  context: CanvasRenderingContext2DEx,
  circles: Circle[],
  state: State
) {
  context.clear();

  for (let i = 0; i < circles.length; i++) {
    drawSegment(context, circles[i], state);
  }
}

function drawSegment(
  context: CanvasRenderingContext2DEx,
  { y, a: angleOffset, r }: Circle,
  { alpha, angle }: State
) {
  const x = Math.cos(angleOffset + angle) * r;
  const z = 1 + Math.sin(angleOffset + angle) * r;

  const perspective = 2 / (2 + z);

  const fillOpacity = (1.15 + (y / 3)) * (alpha ** 2);
  context.fillStyle = context.strokeStyle = `rgb(250, 250, 250, ${fillOpacity}`;

  context.save();
    context.scale(perspective, perspective);

    context.beginPath();
      context.arc(x, y + 2, 0.04, 0, Math.TAU);
    context.fill();

    context.beginPath();
      context.moveTo(x, 3);
      context.lineTo(x, y+2);
    context.stroke();
  context.restore();
}
