import './assets/styles/root.css'

import { assertedValidRoute, initRouter } from './routerlib';
import { Route404 } from './pages/404';
import { Github } from './pages/github';
import { Projects } from './pages/projects';
import { AboutMe } from './pages/about-me';
import { MainRoute } from './pages/main';
import { Linkedin } from './pages/linkedin';
import { API_URL, SITE_BASE_PATH, USE_HASH_ROUTER } from './constants.ts';

(async () => {
  const { projects } = await fetch(`${API_URL}/projects.json`).then(d => d.json());

  initRouter({
    baseURL: assertedValidRoute(SITE_BASE_PATH),
    hashRouter: USE_HASH_ROUTER,
    providers: [
      MainRoute,
      Route404,
      Projects(projects),
      Linkedin,
      AboutMe,
      Github,
    ],
  });
})();
