const proxies = {} as Record<string, TransitionProxy[]>;
const reset = Symbol('reset-proxy');

export function createTransitionProxy(group: string): TransitionProxy {
  const transitionsHandlers = [] as ((value: boolean) => void)[];

  const _target = {
    transitioned: false,
    observe(handler: (value: boolean) => void) {
      transitionsHandlers.push(handler);
    },
    [reset]() {
      transitionsHandlers.length = 0;
      proxy.transitioned = false;
    },
    toggleIfNewState(state: boolean) {
      if (proxy.transitioned !== state) {
        proxy.transitioned = state;
      }
    }
  } as TransitionProxy;

  const proxy = new Proxy(_target, {
    set(target: { transitioned: boolean }, p: string | symbol, newValue: any): boolean {
      target.transitioned = newValue;
      transitionsHandlers.forEach(fn => fn(newValue));
      return true;
    }
  }) as TransitionProxy;

  (proxies[group] ??= []).push(proxy);
  return proxy;
}

export function resetProxies(group: string) {
  proxies[group]?.forEach(proxy => proxy[reset]());
}

export type TransitionProxy = {
  transitioned: boolean,
  observe: (handler: (value: boolean) => void) => void,
  toggleIfNewState: (state: boolean) => void,
  [reset]: () => void,
}
