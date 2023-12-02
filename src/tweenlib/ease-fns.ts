import { EaseFn } from "./types.ts";

export const EaseLinear: EaseFn = (t, b, c, d) => {
  return c * (t / d) + b;
}

export const EaseInQuad: EaseFn = (t, b, c, d) => {
  return c * (t /= d) * t + b;
};

export const EaseOutQuad: EaseFn = (t, b, c, d) => {
  return -c * (t /= d) * (t - 2) + b;
};

export const EaseInOutQuad: EaseFn = (t, b, c, d) => {
  return ((t /= d / 2) < 1)
    ? c / 2 * t * t + b
    : -c / 2 * ((--t) * (t - 2) - 1) + b;
};

export const EaseOutInQuad: EaseFn = (t, b, c, d) => {
  return (t < d / 2)
    ? -c / 2 * (t = t * 2 / d) * (t - 2) + b
    : c / 2 * (t = (t * 2 - d) / d) * t + b + c / 2;
};

export const EaseInCubic: EaseFn = (t, b, c, d) => {
  return c * (t /= d) * t * t + b;
};

export const EaseOutCubic: EaseFn = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};

export const EaseInOutCubic: EaseFn = (t, b, c, d) => {
  return ((t /= d / 2) < 1)
    ? c / 2 * t * t * t + b
    : c / 2 * ((t -= 2) * t * t + 2) + b;
};

export const EaseOutInCubic: EaseFn = (t, b, c, d) => {
  return (t < d / 2)
    ? c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b
    : c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
};

export const EaseInQuint: EaseFn = (t, b, c, d) => {
  return c * (t /= d) * t * t * t * t + b;
}
