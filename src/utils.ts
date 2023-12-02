Math.TAU = Math.PI * 2;

declare global {
  interface Math {
    TAU: number;
  }
}

export type CanvasRenderingContext2DEx = CanvasRenderingContext2D & {
  height: number,
  width:  number,
  rangeX: number,
  rangeY: number,
  clear(): void,
}

export function normalizedCanvasContext2DEx($canvas: HTMLCanvasElement, heightScale = 1): CanvasRenderingContext2DEx {
  const context = $canvas.getContext('2d')! as CanvasRenderingContext2DEx;

  const height = $canvas.height = window.innerHeight;
  const width  = $canvas.width  = window.innerWidth;

  $canvas.height *= heightScale;

  const aspectRatio = width / height;
  const scale = (aspectRatio > 1) ? height / 2 : width / 2;

  context.height = height;
  context.width = width;

  context.clear = () => context.clearRect(-scale, -scale, 2 * scale, 2 * scale);

  context.translate(width / 2, height / 2);
  context.scale(scale, -scale);

  context.rangeX = aspectRatio > 1 ? 2 * aspectRatio : 2;
  context.rangeY = aspectRatio > 1 ? 2 : 2 / aspectRatio;

  return context;
}

export function clamp(min: number, n: number, max: number): number {
  return Math.min(Math.max(min, n), max)
}

export function invClamp(x: number, min: number, max: number): number {
  return (x >= min && x <= max)
    ? (Math.abs(x - min) < Math.abs(x - max)) ? max : min
    : x
}

let rem2px: number
export function rem2pixels(rem: number): number {
  return rem * (rem2px || (rem2px = parseFloat(getComputedStyle(document.documentElement).fontSize)));
}

export function randRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createImages(uris: string[], decode?: boolean) {
  const images = {} as Record<string, HTMLImageElement>;

  uris.forEach((uri) => {
    const img = new Image();

    img.src = uri;
    images[uri] = img;

    if (decode) {
      img.decode().then();
    }
  });

  return images;
}

export function maxDiff(arr: any[]): number {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}

export function addToggleableEventListener<K extends keyof WindowEventMap>(type: K, listener: (e: WindowEventMap[K]) => void) {
  let isRunning = false;

  return (on: boolean) => {
    if (on) {
      if (!isRunning) {
        window.addEventListener(type, listener, { passive: true });
        isRunning = true;
      }
    } else if (isRunning) {
      window.removeEventListener(type, listener);
      isRunning = false;
    }
  }
}

export function arrRemove<T>(arr: T[], value: T): T[] {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function distFromScreenCenter($elem: HTMLElement): { dx: number, dy: number } {
  const height = Math.min(window.innerHeight, window.screen?.height || Infinity);
  const rect = $elem.getBoundingClientRect();

  const ex = rect.left + rect.width / 2;
  const ey = rect.top + rect.height / 2;

  const sx = window.innerWidth / 2;
  const sy = height / 2;

  return {
    dx: sx - ex,
    dy: sy - ey,
  };
}

declare global {
  interface Array<T> {
    partition(predicate: (item: T) => boolean): [T[], T[]];
  }
}

Array.prototype.partition = function<T>(predicate: (item: T) => boolean): [T[], T[]] {
  const truePartition: T[] = [];
  const falsePartition: T[] = [];

  for (const item of this) {
    if (predicate(item)) {
      truePartition.push(item);
    } else {
      falsePartition.push(item);
    }
  }

  return [truePartition, falsePartition];
};

type ElementInit<T extends HTMLElement> = Partial<Exclude<T, 'children'>> & {
  childElems?: HTMLElement[];
  textContent?: string;
  applyStyles?: Partial<CSSStyleDeclaration>;
};

export function newElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  initState: ElementInit<HTMLElementTagNameMap[K]>
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);

  Object.keys(initState).forEach(key => {
    const value = initState[key as keyof typeof initState];

    if (key === 'children' && Array.isArray(value)) {
      value.forEach(child => element.appendChild(child));
    } else if (key === 'textContent') {
      element.textContent = value as string;
    } else if (key === 'applyStyles') {
      Object.assign(element.style, value);
    } else {
      (element as any)[key] = value;
    }
  });

  return element;
}

export function debounce<const T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false,
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const later = () => {
      timeout = undefined;

      if (!immediate) {
        func.apply(this, args)
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(this, args);
    }
  };
}

export const tap = <T>(fn: (t: T) => void) => (t: T): T => (fn(t), t)

export const memo = <T>(fn: () => T) => {
  let cache = null as T;
  return () => cache ?? (cache = fn());
}
