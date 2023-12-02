import { Route, RouteMixin } from '../../index.ts';

export const Scroll2Top: RouteMixin = (route: Route) => ({
  ...route,
  construct() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo(0, 0);
      route.construct?.();
    }, 0);
  },
});
