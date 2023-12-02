import { tween } from '../../../../tweenlib';
import { EaseInCubic, EaseInOutCubic, EaseInQuad, EaseInQuint } from '../../../../tweenlib/ease-fns.ts';
import { rem2pixels } from '../../../../utils.ts';
import { otherTypes2graphics } from './transitions.ts';
import { createTransitionProxy } from '../../../../tweenlib/transitions.ts';

const transitionToTypes = createTransitionProxy('main');

export function OtherTypes() {
  const $iLikeProgramming = document.querySelector<HTMLSpanElement>('#i-like-programming')!;
  const $typesContainer = document.querySelector<HTMLDivElement>('#programming-types-container')!;

  transitionToTypes.observe((transitioned) => {
    $typesContainer.classList.toggle('invisible', !transitioned);

    if (transitioned) {
      const { top, right } = $iLikeProgramming.getBoundingClientRect();
      $typesContainer.style.top = top + 'px';
      $typesContainer.style.left = right + 'px';
    }
  });

  otherTypes2graphics.observe((transitioned) => {
    $typesContainer.classList.toggle('invisible', transitioned);
  })

  initTransitionTween($iLikeProgramming);
  initTypesCarouselTween();
}

function initTransitionTween($iLikeProgramming: HTMLSpanElement) {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;
  const $lowLvlLine = document.querySelector<HTMLDivElement>('#low-lvl-text-line')!;

  const state = {
    llpOpacity: 1,
    fontSize: 2,
    x: 0,
    y: 0,
  }

  tween("to", state, { llpOpacity: 0 }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.25,
    offset: $container.clientHeight * .25,
    update() {
      $lowLvlLine.style.opacity = state.llpOpacity + '';
    }
  });

  const newState = {
    fontSize: 3.25,
    x: -window.innerWidth / 2,
    y: -(window.innerHeight - rem2pixels(3.25)) / 2,
  }

  tween("to", state, newState, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 1.5,
    offset: $container.clientHeight * .25,
    update() {
      $iLikeProgramming.style.fontSize = state.fontSize + 'rem';
      $iLikeProgramming.style.translate = `${state.x}px ${state.y}px`;
    }
  });

  tween("checkpoint", $container, { add2wrapper: true, pixels: $container.clientHeight * 1.75, toggle: transitionToTypes });
}

function initTypesCarouselTween() {
  const $container = document.querySelector<HTMLDivElement>('#intro-text-container')!;
  const $types = document.querySelector<HTMLDivElement>('#programming-types-types')!;

  const state = { y: -$types.parentElement!.getBoundingClientRect().height / 2 };
  const height = $types.getBoundingClientRect().height - state.y - rem2pixels(3.25 * 2.3);

  tween("to", state, { y: height }, {
    scroll: $container,
    easeFn: EaseInOutCubic,
    pixels: $container.clientHeight * 4.5,
    offset: $container.clientHeight * -.8,
    update() {
      $types.style.translate = `0 ${-state.y}px`
    }
  });

  tween('checkpoint', $container, { toggle: otherTypes2graphics });
}
