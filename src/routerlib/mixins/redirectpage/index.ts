import './styles.css'
import { Route, RouteMixin } from '../../index.ts';

export const RedirectPage = (url: string): RouteMixin => (route: Route) => ({
  ...route,
  html: '<div id="redirect__container">Redirecting...</div>',
  construct() {
    document.location.replace(url);
  },
});
