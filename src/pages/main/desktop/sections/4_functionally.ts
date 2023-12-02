import { tween } from '../../../../tweenlib';
import { EaseInOutCubic } from '../../../../tweenlib/ease-fns.ts';
import { functionally2lowLevel, introduction2functionally } from './transitions.ts';

type End = {
  x: number,
  y: number,
}

export function Functional() {
  const $iLikeProgramming = document.querySelector<HTMLDivElement>('#i-like-programming')!;
  const $lispTextLine = document.querySelector<HTMLDivElement>('#lisp-text-line')!;

  const end = {
    x: 0,
    y: 0,
  };

  let alreadyTransitioned = false;

  introduction2functionally.observe((transitioned) => {
    if (transitioned && !alreadyTransitioned) {
      end.x = $lispTextLine.getElementsByTagName('span')[1]!.getBoundingClientRect().left - $iLikeProgramming.getBoundingClientRect().left;
      end.y = $lispTextLine.offsetTop - (window.innerHeight - $iLikeProgramming.clientHeight) / 2;
      alreadyTransitioned = true;
    }
  });

  initWordsMovementTween($iLikeProgramming, $lispTextLine, end);
}

function initWordsMovementTween($iLikeProgramming: HTMLDivElement, $lispTextLine: HTMLDivElement, end: End) {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;

  const $unrelatedProgrammingWords = [...document.querySelectorAll<HTMLSpanElement>('#programming-text-line > *')]
    .filter($span => $span.id !== "i-like-programming");

  tween("to", $unrelatedProgrammingWords, { opacity: 0 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 2.25,
    offset: $container.clientHeight * .75,
  });

  tween({
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 2.25,
    offset: $container.clientHeight * .75,
    update(p) {
      $iLikeProgramming.style.fontSize = '5rem';

      const x = EaseInOutCubic(p, 0, end.x, 1);
      const y = EaseInOutCubic(p, 0, end.y, 1);

      $iLikeProgramming.style.translate = `${x}px ${y}px`;
    }
  });

  tween("checkpoint", $container, { add2wrapper: true, pixels: $container.clientHeight * 3 });

  tween("to", $lispTextLine, { opacity: 1 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.5,
    offset: -$container.clientHeight,
  });

  tween("checkpoint", $container, { add2wrapper: true, toggle: functionally2lowLevel });
}
