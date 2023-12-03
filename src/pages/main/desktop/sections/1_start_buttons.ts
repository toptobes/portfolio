import { rem2pixels } from '../../../../utils.ts';
import { Router } from '../../../../routerlib';
import { setupTransitionButton } from '../../shared/transition-button.ts';
import { tween } from '../../../../tweenlib';
import { preloadCards } from '../../../projects/projects.ts';

export function StartButtons(routeTo: Router) {
  const $buttons = [...document.querySelectorAll<HTMLButtonElement>('.start-diamond-button')];

  const [[$autoScrollButton], $otherButtons] = $buttons.partition($b => $b.id === 'auto-scroll-btn');

  let savedRatio = 0;

  const updateScales = () =>
    $buttons.forEach(($button, i) => {
      $button.style.scale = !$button.classList.contains('activated-fill-button')
        ? `${1 + ((savedRatio ** 3) / (1.3 + Math.abs(i - 2) ** 4))}`
        : '1';
    });

  const observer = new IntersectionObserver((entries) => {
    savedRatio = entries[0].intersectionRatio;
    updateScales();
  }, {
    threshold: Array.from({ length: 10 }, (_, i) => i / 10),
    rootMargin: `-${rem2pixels(8)}px`,
  });

  observer.observe($autoScrollButton.parentElement!);
  setupAutoScroller($autoScrollButton);

  $otherButtons.forEach($button => (
    setupTransitionButton($button, routeTo, updateScales)
  ));
  document.querySelector('#projects-btn')!.addEventListener('click', preloadCards)

  return () => {
    document.documentElement.style.overflowY = 'visible';
    observer.disconnect();
  };
}

function setupAutoScroller($autoScrollButton: HTMLButtonElement) {
  let autoScrolling = false;

  $autoScrollButton.addEventListener('click', () => {
    if (autoScrolling) {
      return;
    }

    let currentPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    let expectedPosition = currentPosition;
    let userScrolled = false;
    let lastTimestamp: DOMHighResTimeStamp;

    autoScrolling = true;

    const scrolling = tween('constantly', (timestamp) => {
      lastTimestamp ??= timestamp;

      if (Math.abs(expectedPosition - window.scrollY) > 1) {
        userScrolled = true;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      expectedPosition += delta;

      if (expectedPosition >= totalHeight || userScrolled) {
        autoScrolling = false;
        $autoScrollButton.blur();
        scrolling(false);
      }

      window.scrollTo(0, expectedPosition);
    });

    scrolling(true);
  });
}
