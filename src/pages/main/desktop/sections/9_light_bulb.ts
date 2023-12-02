import { addToggleableEventListener, CanvasRenderingContext2DEx, createImages, maxDiff } from '../../../../utils.ts';
import { tween } from '../../../../tweenlib';
import { EaseInOutCubic } from '../../../../tweenlib/ease-fns.ts';
import * as lightBulbs from '../../../../assets/images/lightbulbs'
import { interests2lightBulb } from './transitions.ts';

const chain = Array.from({ length: 30 }, (_, i) => ({
  x: 0,
  y: .0175 * i,
  a: Math.PI / 2,
  l: .0175,
}));

const ROOT_SEGMENT = { x: 1, y: 0, a: 0, l: 0 };
const distances = [] as number[];

let mx = 1, my = 1, omx = 1, omy = 1, myOffset = 0, lMulti = 0;

let images = createImages(Object.values(lightBulbs));
const [LB_OFF, LB_ON] = Object.keys(images);

const bulbState = {
  isOn: true,
  img() {
    return images[this.isOn ? LB_ON : LB_OFF];
  },
}

export function LightBulb() {
  const $canvas = document.querySelector<HTMLCanvasElement>('#interests-canvas')!;
  const $turnOffText = document.querySelector<HTMLDivElement>('#turn-off-text-line')!;
  const $knowMeButton = document.querySelector<HTMLButtonElement>('#know-you-button')!;
  const $knowYouContainer = document.querySelector<HTMLDivElement>('#know-you-container')!;
  const $container = $canvas.parentElement as HTMLDivElement;
  const context = $canvas.getContext('2d')! as CanvasRenderingContext2DEx;

  interests2lightBulb.observe(transitioned => {
    if (transitioned) {
      $canvas.style.transform = `translateY(${-$canvas.clientHeight * .66}px)`;
    } else {
      $canvas.style.transform = 'translateY(0px)';
    }
    $turnOffText.classList.toggle('invisible', !transitioned);
  });

  const buttonRect = $knowMeButton.getBoundingClientRect();
  const cy = buttonRect.top - buttonRect.height / 2;
  const cx = buttonRect.left + buttonRect.width / 2;

  const toggleButtonMagnet = addToggleableEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    $knowMeButton.style.transform = `translate(${(x - cx) / 5}px, ${(y - cy) / 5}px)`
  });
  
  const toggleChainMouse = addToggleableEventListener("mousemove", (e: MouseEvent) => {
    omx = e.clientX;
    omy = e.clientY;
    updateMouseCoords($canvas, context);
    window.requestAnimationFrame(() => animateBulb(context, toggleBulb));
  });

  const toggleChainTouch = addToggleableEventListener("touchmove", (e: TouchEvent) => {
    omx = e.touches[0].clientX;
    omy = e.touches[0].clientY;
    updateMouseCoords($canvas, context);
    window.requestAnimationFrame(() => animateBulb(context, toggleBulb));
  });

  const toggleChain = (on: boolean) => {
    toggleChainMouse(on);
    toggleChainTouch(on);
  };

  const toggleBulb = (force?: boolean) => {
    bulbState.isOn = force ?? !bulbState.isOn;
    distances.length = 0;

    if (bulbState.isOn) {
      $container.style.backgroundColor = '#f5f5f5';
    } else {
      $container.style.backgroundColor = '#242424';
    }
    $turnOffText.classList.toggle('invisible', !bulbState.isOn);
    $knowYouContainer.classList.toggle('invisible', bulbState.isOn);
    toggleButtonMagnet(!bulbState.isOn);
  };

  $knowMeButton.onclick = () => {
    const $aboutMeButton = document.querySelector<HTMLButtonElement>('#about-me-btn')!

    $aboutMeButton.scrollIntoView({ behavior: 'smooth', block: 'center' });

    window.addEventListener('scrollend', () => {
      $aboutMeButton.click();
    }, { once: true });
  };

  initTransitionTween($canvas, $turnOffText, toggleChain, toggleBulb);

  return () => {
    toggleButtonMagnet(false);
    toggleChain(false);
    toggleChain(false);
    mx = 1, my = 1, omx = 1, omy = 1, myOffset = 0, lMulti = 0;
    bulbState.isOn = true;
  };
}

function initTransitionTween(
  $canvas: HTMLCanvasElement,
  $turnOffText: HTMLDivElement,
  toggleChain: (on: boolean) => void,
  toggleBulb: (force?: boolean) => void
) {
  const $interestsText = document.querySelector<HTMLDivElement>('#interests-text-line')!;
  const context = $canvas.getContext('2d')! as CanvasRenderingContext2DEx;

  const translate = {
    y: 0,
  };

  let lastP = 0;

  tween("to", translate, { y: $canvas.clientHeight * .66 }, {
    scroll: $canvas,
    easeFn: EaseInOutCubic,
    pixels: $canvas.clientHeight * 1.5,
    offset: $canvas.clientHeight * 0.5,
    update(p) {
      toggleChain(p > .1);

      $interestsText.style.transform = `translate(-50%, -50%) translateY(${translate.y}px)`;
      $canvas.style.transform = `translateY(${translate.y - $canvas.clientHeight * .66}px)`;
      $turnOffText.style.transform = `translate(-25%, calc(${translate.y - $canvas.clientHeight * .66}px - 50%))`;

      lMulti = p;
      myOffset = translate.y - $canvas.clientHeight * .66
      updateMouseCoords($canvas, context);
      animateBulb(context, toggleBulb);
      p < .8 && p < lastP && toggleBulb(true);

      lastP = p;
      distances.length = 0;
    },
  });

  tween("checkpoint", $canvas, { add2wrapper: true });
}

function updateMouseCoords($canvas: HTMLCanvasElement, context: CanvasRenderingContext2DEx) {
  mx = (omx - $canvas.clientWidth / 2) * (context.rangeX / $canvas.clientWidth);
  my = (omy - myOffset - $canvas.clientHeight / 2) * (context.rangeY / $canvas.clientHeight);
}

function animateBulb(context: CanvasRenderingContext2DEx, toggleBulb: (force?: boolean) => void) {
  updateChain();

  context.clear();

  context.fillStyle = 'black';
  context.drawImage(bulbState.img(), .5, -.75, 1, 1);

  context.beginPath();
    context.arc(1, 0, .02, 0, Math.TAU);

    const last = chain.at(-1);

    for (const seg of chain) {
      const endX = seg.x + Math.cos(seg.a) * seg.l * lMulti;
      const endY = seg.y + Math.sin(seg.a) * seg.l * lMulti;

      if (seg === last) {
        distances.push(Math.hypot(endX - 1, endY + (1 - lMulti)));

        if (distances.length > 15) {
          distances.shift();

          if (distances.at(-1)! > .5 && maxDiff(distances) > .25) {
            toggleBulb();
          }
        }
      }

      context.moveTo(endX, endY);
      context.arc(endX, endY, .005 * lMulti, 0, Math.TAU);
    }
  context.fill();
}

function updateChain() {
  if (!bulbState.isOn && Math.hypot(mx - 1, my) > .0175 * 35) {
    distances.length = 0;
    mx = 1;
    my = 1;
  }

  for (let i = chain.length - 1; i >= 0; i  --) {
    const seg = chain[i];
    seg.a = Math.atan2(my - seg.y, mx - seg.x);
    seg.x = (mx -= Math.cos(seg.a) * seg.l * lMulti);
    seg.y = (my -= Math.sin(seg.a) * seg.l * lMulti);
  }

  for (let i = 0; i < chain.length; i++) {
    const parent = chain[i - 1] || ROOT_SEGMENT;
    const seg = chain[i];

    seg.x = parent.x + Math.cos(parent.a) * parent.l * lMulti;
    seg.y = parent.y + Math.sin(parent.a) * parent.l * lMulti;
  }
}
