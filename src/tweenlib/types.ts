import { TransitionProxy } from "./transitions.ts";

export type TweenType =
  | "to"
  | "from"
  | "fromTo"

export type TweenProperties<Type extends TweenType, Obj extends Obj2Tween> = {
  [Key in keyof (Obj extends HTMLElement ? CSSStyleDeclaration : Obj)]?:
    Type extends "fromTo"
      ? [number, number]
      : number;
};

export type Obj2Tween =
  | HTMLElement
  | Record<string, number>

export type TweenOptions =
  | ScrollTweenOptions
  | TimerTweenOptions

type BaseTweenOptions = {
  easeFn: EaseFn,
  update?: (progress: number) => void,
  constant?: boolean,
  delay?: [number, number],
  offset?: number,
}

export type ScrollTweenOptions = BaseTweenOptions & {
  scroll: HTMLElement,
  checkpoint?: boolean,
  pixels: number,
}

export type TimerTweenOptions = BaseTweenOptions & {
  duration: number,
}

export type EaseFn = (t: number, b: number, c: number, d: number) => number;

export type ObjectSetFunction = (property: string, state: number) => void;

export type NormalizedProperties = {
  [key: string]: { fromTo: [number, number] }
}

export type ObjectStates = {
  properties: NormalizedProperties,
  set: ObjectSetFunction,
}

export type TweenFunction = <Type extends TweenType, Obj extends Obj2Tween>(
  type: Type,
  objs: Obj | Obj[],
  properties: TweenProperties<Type, Obj>,
  options: TweenOptions
) => void;

export type TweenCheckpointFunction = (
  type: "checkpoint",
  options?: CheckpointOptions,
) => void;

export type CheckpointOptions = {
  add2wrapper?: boolean,
  pixels?: number,
  toggle?: TransitionProxy | TransitionProxy[],
}
