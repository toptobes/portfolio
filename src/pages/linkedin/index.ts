import { RouteProvider } from '../../routerlib';
import { RedirectPage } from '../../routerlib/mixins/redirectpage';

export const Linkedin: RouteProvider = () => ({
  path: '/linkedin',
  mixins: [RedirectPage(import.meta.env.VITE_LINKEDIN_URL ?? '')],
  disabled: import.meta.env.VITE_LINKEDIN_URL === undefined,
});
