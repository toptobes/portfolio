import { RouteProvider } from '../../routerlib';
import { RedirectPage } from '../../routerlib/mixins/redirectpage';

export const Github: RouteProvider = () => ({
  path: '/github',
  mixins: [RedirectPage('https://github.com/toptobes')],
});
