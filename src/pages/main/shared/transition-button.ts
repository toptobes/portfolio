import { Router } from '../../../routerlib';
import { distFromScreenCenter } from '../../../utils.ts';

export function setupTransitionButton($btn: HTMLButtonElement, routeTo: Router, onClick?: () => void) {
  let zIdxTimeoutID: number;
  let naviTimeoutID: number;

  $btn.type = 'button';

  $btn.addEventListener('click', _ => {
    const activated = $btn.classList.toggle('activated-fill-button')

    if (activated) {
      const { dx, dy } = distFromScreenCenter($btn);
      $btn.style.transform = `translate(${dx}px, ${dy}px)`
      $btn.style.zIndex = '100';

      document.documentElement.style.overflowY = 'hidden';

      naviTimeoutID = setTimeout(() => {
        routeTo($btn.getAttribute('data-route')!)();
        document.documentElement.style.overflowY = 'visible';
      }, 1000);

      clearTimeout(zIdxTimeoutID);
    } else {
      $btn.style.transform = '';

      document.documentElement.style.overflowY = 'visible';

      zIdxTimeoutID = setTimeout(() => {
        $btn.style.zIndex = '';
      }, 500);

      clearTimeout(naviTimeoutID);
    }
    onClick?.();
  });
}
