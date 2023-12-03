export interface Route {
  path: ValidRoute;
  html?: string | (() => Promise<string>);
  mixins?: RouteMixin[];
  forceReload?: boolean;
  construct?(): void;
  destruct?(): void;
  disabled?: boolean;
}

interface Route404 extends Route {
  path: '*';
}

export type RouteMixin = (route: Route) => Route;

export type Router = (path: string) => () => void;
export type RouteProvider    = (routeTo: Router) => Route;
export type Route404Provider = (routeTo: Router) => Route404;

type Providers = readonly (RouteProvider | Route404Provider)[];

type OnlyOne<Ts extends readonly any[], T, Acc extends any[] = [], Found extends boolean = false> =
  Acc['length'] extends 50
    ? false :
  Ts['length'] extends Acc['length']
    ? Found :
  ReturnType<Ts[Acc['length']]> extends T
    ? Found extends true
      ? false
      : OnlyOne<Ts, T, [any, ...Acc], true>
    : OnlyOne<Ts, T, [any, ...Acc], Found>

type OnlyOne404<Ps extends Providers> =
  OnlyOne<Ps, Route404> extends true
    ? Ps
    : never

interface RouterOptions<Ps extends Providers> {
  providers: OnlyOne404<Ps>,
  hashRouter?: boolean,
  baseURL?: ValidRoute,
}

type ValidRoute = '*' | `/${string}` | '';

export function assertValidRoute(route: string): asserts route is ValidRoute {
  if (route !== '*' && route !== '' && !route.startsWith('/')) {
    throw new Error(`route '${route}' does not start with a '/' nor is it an empty string`);
  }
}

export function assertedValidRoute(route: string): ValidRoute {
  assertValidRoute(route);
  return route;
}

export function initRouter<const Ps extends Providers>(options: RouterOptions<Ps>) {
  const baseURL = normalizeRoute(options.baseURL || '');
  const hashURL = options.hashRouter ? '/#' : '';
  const urlPrefix = baseURL + hashURL;

  const $app = document.querySelector('#app')!;
  let currentRoute: Route | undefined;

  const routeTo = (path: string) => () => {
    window.history.pushState(null, '', urlPrefix + path);
    router().then();
  };

  const [routes, [route404]] = options.providers
    .map(p => p(routeTo))
    .map(r => r.mixins?.reduce((r, m) => m(r), r) ?? r)
    .filter(r => !r.disabled)
    .map(route => {
      route.path = normalizeRoute(urlPrefix + route.path);
      return route; // Can't clone since getters aren't preserved...
    })
    .partition(r => r.path !== urlPrefix + '*')

  const router = async () => {
    const _path = normalizeRoute(location.pathname + location.hash);

    const path = (options.hashRouter && _path === baseURL)
      ? urlPrefix
      : _path;

    const route = routes.find(route => route.path === path) ?? route404;

    currentRoute?.destruct?.();
    currentRoute = route;

    if (route.forceReload) {
      reloadPage(route.path);
    }

    $app.innerHTML = await resolveHTML(route);
    route.construct?.();
  };

  window.addEventListener('popstate', router);
  window.addEventListener('load', router);

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLAnchorElement;

    if (target.tagName === 'A' && target.getAttribute('data-client') !== null) {
      e.preventDefault();
      routeTo(target.getAttribute('href')!)();
    }
  });
}

function reloadPage(path: string) {
  const routeKey = `${path}:reloaded`

  if (!sessionStorage.getItem(routeKey)) {
    sessionStorage.setItem(routeKey, 'true');
    window.location.reload();
  } else {
    sessionStorage.removeItem(routeKey);
  }
}

const normalizeRoute = (str: string) => assertedValidRoute(
  (str.endsWith('/'))
    ? str.slice(0, -1)
    : str
);

export const resolveHTML = async (route: Route) =>
  (typeof route.html === 'string')
    ? route.html :
  (typeof route.html === 'function')
    ? await route.html()
    : '';
