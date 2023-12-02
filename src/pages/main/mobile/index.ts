import './styles.css';
import { RouteProvider } from '../../../routerlib';
import { setupTransitionButton } from '../shared/transition-button.ts';
import { BasicPage } from '../../../routerlib/mixins/basicpage';

const html = `
  <div id="mobile-main__disclaimer-container">
    (Use this site on desktop for the full main page experience)
  </div>
  <div id="mobile-main__buttons-container">
    <button class="start-diamond-button" data-route="/github">github</button>
    <button class="start-diamond-button" data-route="/about-me" id="about-me-btn">about me</button>
    <button class="start-diamond-button" data-route="/projects">projects</button>
    <button class="start-diamond-button" data-route="/linkedin">linkedin</button>
  </div>
`;

export const MainRoute4Mobile: RouteProvider = (routeTo) => BasicPage(true)({
  path: '/',
  html: html,
  construct() {
    document.querySelectorAll<HTMLButtonElement>('.start-diamond-button').forEach($btn => (
      setupTransitionButton($btn, routeTo)
    ));
  },
});
