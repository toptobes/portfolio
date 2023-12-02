import { MainRoute4Desktop } from './desktop';
import { RouteProvider } from '../../routerlib';
import { MainRoute4Mobile } from './mobile';
import { addToggleableEventListener, debounce } from '../../utils.ts';

export const MainRoute: RouteProvider = (routeTo) => {
  const mobile = MainRoute4Mobile(routeTo);
  const desktop = MainRoute4Desktop(routeTo);

  const getVersion = () => {
    return (window.innerWidth / window.innerHeight > 4 / 3)
      ? desktop
      : mobile;
  };

  let version = getVersion();

  const resizer = addToggleableEventListener('resize', debounce(() => {
    const lastVersion = version;
    version = getVersion();

    if (version === desktop || lastVersion !== version) {
      routeTo('/')();
    }
  }, 50));

  return {
    path: '/',
    get html() {
      return version.html as string;
    },
    construct() {
      version.construct?.();
      resizer(true);
    },
    destruct() {
      resizer(false);
      version.destruct?.();
    },
  };
}
