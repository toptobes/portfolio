import { tween } from '../../../../tweenlib';
import { EaseInOutCubic } from '../../../../tweenlib/ease-fns.ts';
import { rem2pixels } from '../../../../utils.ts';
import { functionally2lowLevel } from './transitions.ts';

type Point = {
  x: number,
  y: number,
};

export function LowLevel() {
  const $iLikeProgramming = document.querySelector<HTMLSpanElement>('#i-like-programming')!;
  const $lowLvlLine = document.querySelector<HTMLDivElement>('#low-lvl-text-line')!;
  const $lispTextLine = document.querySelector<HTMLDivElement>('#lisp-text-line')!;

  const startTranslation = {
    x: -$iLikeProgramming.getBoundingClientRect().left + $lispTextLine.getElementsByTagName('span')[1]!.getBoundingClientRect().left,
    y: -(window.innerHeight - $iLikeProgramming.clientHeight) / 2 + $lispTextLine.offsetTop,
  };

  const start = { x: 0, y: 0 };
  const end = { x: 0, y: 0 };

  functionally2lowLevel.observe((transitioned) => {
    const { x, y } = $iLikeProgramming.getBoundingClientRect();

    $iLikeProgramming.classList.toggle('fixed');

    if (transitioned) {
      $iLikeProgramming.style.top = y + 'px';
      $iLikeProgramming.style.left = x + 'px';
      $iLikeProgramming.style.translate = '0 0';

      start.x = x;
      start.y = y;

      end.x = $lowLvlLine.offsetLeft;
      end.y = window.innerHeight - rem2pixels(5.55);
    } else {
      $iLikeProgramming.style.translate = `${startTranslation.x}px ${startTranslation.y}px`
    }
  });

  tweenWordsMovement($lispTextLine, $iLikeProgramming, $lowLvlLine, start, end);
}

function tweenWordsMovement(
  $lispTextLine: HTMLDivElement,
  $iLikeProgramming: HTMLSpanElement,
  $lowLvlLine: HTMLDivElement,
  start: Point,
  end: Point,
) {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;

  const state = {
    lispOpacity: 1,
    fontSize: 5,
  };

  tween("to", state, { lispOpacity: 0 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.25,
    offset: $container.clientHeight * 0.25,
    update() {
      if (functionally2lowLevel.transitioned) {
        $lispTextLine.style.opacity = state.lispOpacity + ''
      }
    }
  });

  tween("to", state, { fontSize: 2 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.50,
    offset: $container.clientHeight * 0.25,
    update(p) {
      $iLikeProgramming.style.fontSize = state.fontSize + 'rem';
      $iLikeProgramming.style.left = EaseInOutCubic(p, start.x, end.x - start.x, 1) + 'px';
      $iLikeProgramming.style.top  = EaseInOutCubic(p, start.y, end.y - start.y, 1) + 'px';
    }
  });

  tween("checkpoint", $container, { add2wrapper: true });

  tween("to", $lowLvlLine.lastElementChild as HTMLSpanElement, { opacity: 1 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.5,
    offset: -$container.clientHeight * .75,
  });

  tween("checkpoint", $container, { add2wrapper: true });
}
