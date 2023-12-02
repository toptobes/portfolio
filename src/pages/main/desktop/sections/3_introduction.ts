import { introduction2functionally, triangle2introduction } from './transitions.ts';
import { tween } from '../../../../tweenlib';
import { EaseInCubic, EaseLinear, EaseOutCubic } from '../../../../tweenlib/ease-fns.ts';

export function Introduction() {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;
  const $introText = document.querySelectorAll<HTMLDivElement>('#intro-text-line > span');

  initIntroductionTween($container, $introText);
  initBlackBarTween($container, $introText);

  triangle2introduction.observe(_ => {
    $container.parentElement!.classList.toggle('invisible');
  });
}

function initIntroductionTween($container: HTMLDivElement, $introText: NodeListOf<HTMLDivElement>) {
  function initWordTween(index: number, pixels: number) {
    tween({
      scroll: $container,
      pixels,
      offset: $container.clientHeight * .5,
      easeFn: EaseLinear,
      update(p) {
        $introText[index].style.opacity = `${ +(p === 1) }`;
      }
    });
  }

  initWordTween(0, $container.clientHeight * 0.750);
  initWordTween(1, $container.clientHeight * 1.500);
  initWordTween(2, $container.clientHeight * 1.625);

  tween("checkpoint", $container, { add2wrapper: true });
}

function initBlackBarTween($container: HTMLDivElement, $introWords: NodeListOf<HTMLDivElement>) {
  const $programmingLine = document.querySelector<HTMLDivElement>('#programming-text-line')!;
  const $programmingWords = document.querySelectorAll<HTMLSpanElement>('#programming-text-line > span');

  const state = {
    switch: +false,
    right: 100,
    left: 0,
  }

  tween("to", state, { right: 0, switch: +true }, {
    scroll: $container,
    easeFn: EaseOutCubic,
    pixels: $container.clientHeight * .25,
    offset: $container.clientHeight * .5,
    update(p) {
      if (p <= .25) {
        $programmingWords.forEach($word => $word.style.fontSize = '5rem');
      }

      $programmingLine.style.setProperty('--programming-text-line-bar-right', state.right + '%');

      if (state.switch === +true) {
        $introWords.forEach($word => $word.classList.toggle('invisible'));
        $programmingWords.forEach($word => $word.classList.toggle('invisible'));
      }
    }
  });

  tween("checkpoint", $container);

  tween("to", state, { left: 100 }, {
    scroll: $container,
    easeFn: EaseInCubic,
    pixels: $container.clientHeight * .25,
    update() {
      $programmingLine.style.setProperty('--programming-text-line-bar-left', state.left + '%');
    }
  });

  tween("checkpoint", $container, { add2wrapper: true, toggle: introduction2functionally });
}
