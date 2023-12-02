import type { CheckpointOptions, Obj2Tween, TweenOptions, TweenProperties, TweenType } from "./types.ts";
import { ObjectStates } from "./types.ts";
import { createObjStates, isTimerTween, normalizeObjs, normalizeProperties } from "./util.ts";
import { arrRemove, clamp } from "../utils.ts";

export function tween(
  options: TweenOptions,
): void;

export function tween(
  type: "checkpoint",
  element: HTMLElement,
  options?: CheckpointOptions,
): void;

export function tween(
  type: "constantly",
  callback: (timestamp: DOMHighResTimeStamp) => void,
): (on: boolean) => void;

export function tween<Type extends TweenType, Obj extends Obj2Tween>(
  type: Type,
  objs: Obj | Obj[],
  properties: TweenProperties<Type, Obj>,
  options: TweenOptions,
): void;

export function tween(
  typeOrOptions: TweenType | "checkpoint" | "constantly" | TweenOptions,
  objsOrCallback?: any,
  propertiesOrCPOptions?: any,
  tweenOptions?: any,
) {
  if (typeof typeOrOptions !== 'string') {
    makeTween("to", {}, {}, typeOrOptions);
  } else if (typeOrOptions === "checkpoint") {
    addCheckpoint(objsOrCallback, propertiesOrCPOptions)
  } else if (typeOrOptions === "constantly") {
    return makeConstant(objsOrCallback);
  } else {
    makeTween(typeOrOptions, objsOrCallback, propertiesOrCPOptions, tweenOptions);
  }
}

function makeConstant(callback: () => void) {
  let isRunning = false;

  return (on: boolean) => {
    if (on) {
      if (!isRunning) {
        constants.push(callback);
        isRunning = true;
      }
    } else {
      arrRemove(constants, callback);
      isRunning = false;
    }
  }
}

function makeTween<Type extends TweenType, Obj extends Obj2Tween>(
  type: Type,
  objs: Obj | Obj[],
  properties: TweenProperties<Type, Obj>,
  options: TweenOptions
) {
  const [normalizedObjs, setterFns] = normalizeObjs(objs);
  const normalizedProperties = normalizeProperties(type, normalizedObjs, properties);
  const objectStates = createObjStates(setterFns, normalizedProperties)
  createAnimation(options, objectStates);
}

function createAnimation(options: TweenOptions, objectStates: ObjectStates[]) {
  const stateEntries = objectStates.map((state) => Object.entries(state.properties));

  const animationFn = (t: number, d: number) => {
    stateEntries.forEach((entries, i) => {
      const state = objectStates[i];

      for (const [propertyName, property] of entries) {
        const { fromTo: [from, to] } = property;
        const tweened = options.easeFn(t, from, to - from, d);
        state.set(propertyName, tweened);
        options.update?.(t / d);
      }
    });
  }

  if (isTimerTween(options)) {
    let startTime = 0;

    registerAnimation(options, animationFn, () => {
      startTime = startTime || performance.now();
      return [performance.now() - startTime, options.duration!] as const;
    });
  } else {
    const element = options.scroll;
    const wrapper = element.parentElement!;

    options.offset ||= 0;

    if (!checkpoints.has(element)) {
      checkpoints.set(element, { lastPixels: 0, originalHeight: parseFloat(getComputedStyle(wrapper).height), checkpoint: 0 });
    }
    checkpoints.get(element)!.lastPixels = options.pixels + options.offset;
    lastPixels = options.pixels + options.offset;

    options.offset += checkpoints.get(element)!.checkpoint;

    const idx = animationIdx++;
    observeElement(element, idx);

    registerAnimation(options, animationFn, (scrollTop) => {
      const scrollPosition = scrollTop - wrapper.offsetTop;
      const adjustedScrollPosition = scrollPosition - options.offset!;
      const normalizedScrollPosition = clamp(0, adjustedScrollPosition / (options.pixels), 1);
      return [normalizedScrollPosition, 1];
    });
  }
}

function registerAnimation(options: TweenOptions, fn: AnimationFn, supplier: ProgressSupplier) {
  animations.push({ fn, supplier, options, lastT: NaN });
}

const checkpoints = new Map<HTMLElement, { lastPixels: number, originalHeight: number, checkpoint: number }>();
let lastCheckpoint = 0;
let lastPixels = 0;

function addCheckpoint(element: HTMLElement, options?: CheckpointOptions) {
  options = options || {};

  const wrapper = element.parentElement!;

  if (!checkpoints.has(element)) {
    checkpoints.set(element, { lastPixels: 0, originalHeight: parseFloat(getComputedStyle(wrapper).height), checkpoint: 0 });
  }

  lastCheckpoint += (options.pixels)
    ? options.pixels
    : lastPixels;

  checkpoints.get(element)!.checkpoint += (options.pixels)
    ? options.pixels
    : checkpoints.get(element)!.lastPixels;

  if (options.add2wrapper) {
    wrapper.style.height = (checkpoints.get(element)!.originalHeight + checkpoints.get(element)!.checkpoint) + 'px';
  }

  if (options.toggle) {
    const lastAnimationFn = animations.at(-1)!.fn;

    const proxies = Array.isArray(options.toggle)
      ?  options.toggle
      : [options.toggle];

    animations.at(-1)!.fn = (t, d) => {
      for (const proxy of proxies) {
        proxy.toggleIfNewState((t / d) === 1);
      }
      lastAnimationFn(t, d);
    };
  }
}

type AnimationFn = (t: number, d: number) => void;
type ProgressSupplier = (scrollTop: number) => readonly [t: number, d: number];

type AnimationState = {
  fn: AnimationFn,
  supplier: ProgressSupplier,
  options: TweenOptions,
  lastT: number,
};

const activeAnimations = new Set<number>();
const animations = [] as AnimationState[];

const constants = [] as ((timestamp: DOMHighResTimeStamp) => void)[];

let animationIdx = 0;
let lastScrollTop = NaN;
let isConstTween = false;

let animating = false;
let numFrames = 0;

function update(timestamp: DOMHighResTimeStamp) {
  if (!animating) return;

  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop != lastScrollTop || isConstTween || numFrames++ < 10) {
    lastScrollTop = scrollTop;
    isConstTween = false;

    for (const animationIndex of activeAnimations) {
      const animation = animations[animationIndex];

      const { fn, supplier, options, lastT } = animation;

      const [t, d] = supplier(scrollTop);
      const finished = (t / d) > .99;

      const effectiveT = (finished) ? 1 : t;
      animation.lastT = effectiveT;

      isConstTween = options.constant || isConstTween;

      if (lastT === effectiveT && !options.constant) {
        continue;
      }

      if (!finished) {
        fn(t, d);
      } else {
        fn(d, d);
      }
    }
  }

  constants.forEach(constant => constant(timestamp));

  if (animating) {
    window.requestAnimationFrame(update);
  }
}

function observeElement(element: HTMLElement, animationIndex: number) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeAnimations.add(animationIndex);
      } else {
        activeAnimations.delete(animationIndex)
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
}

export function startTweening() {
  animating = true;
  window.requestAnimationFrame(update);
}

export function killTweens() {
  animating = false;
  isConstTween = false;
  constants.length = 0;
  animations.length = 0;
  lastScrollTop = NaN;
  checkpoints.clear();
  lastCheckpoint = 0;
  animationIdx = 0;
  lastPixels = 0;
  numFrames = 0;
}
