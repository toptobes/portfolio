import './styles.css'
import { RouteProvider } from '../../routerlib';
import { getProjectCards, Project } from './projects.ts';
import { BasicPage } from '../../routerlib/mixins/basicpage';
import { Scroll2Top } from '../../routerlib/mixins/scroll2top';

const html = (projects: Project[]) => `
  <br>
  <blockquote id="projects__fun-fact-container" class="projects__intro-animation">
    <p>
      <span style="font-weight: bolder;">Fun fact:</span>
      this website was made with absolutely no dependencies; it involved the creation of a
      tweening library, a small declarative webgl shader library, and a client-side router.
      (<a id="projects__this-site-source" href="https://github.com/toptobes/portfolio">source code</a>)
    </p>
    <div style="height: .25em;"></div>
    <p style="font-size: .8em;">
      *If you consider TypeScript or a build tool dependencies, I don't wanna be friends with you :(
    </p>
  </blockquote>
  <br>
  <div id="projects__cards-container">
    ${getProjectCards(projects)}
  </div>
`;

export const Projects = (projects: Project[]): RouteProvider => () => ({
  path: '/projects',
  html: html(projects),
  construct() {
    const cards = document.querySelectorAll<HTMLAnchorElement>('.projects__card')!;

    cards.forEach((item, index) => {
      const animationDelay = index * 0.1 + 0.1;
      item.style.animation = `.5s projects__cards-side-fade-in ${animationDelay}s cubic-bezier(.39, 1.09, .61, 1.2) forwards`;
    });
  },
  mixins: [BasicPage(), Scroll2Top]
});
