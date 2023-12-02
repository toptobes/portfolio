import {
  NormalizedProperties,
  Obj2Tween,
  ObjectSetFunction,
  ObjectStates, TimerTweenOptions, TweenOptions,
  TweenProperties,
  TweenType
} from "./types.ts";

export function normalizeObjs(objs: Obj2Tween | Obj2Tween[]): [Obj2Tween[], ObjectSetFunction[]] {
  const normalizedObjs =
    (Array.isArray(objs))
      ? objs :
    (Object.keys(objs).length === 0 && !isElement(objs))
      ? [{ $$dummy: 0 }]
      : [objs];

  const setterFns = normalizedObjs.map(obj => (
    (isElement(obj))
      ? setterFnForDomList(obj)
      : setterFnForObjList(obj)
  ));
  return [normalizedObjs, setterFns];
}

function setterFnForDomList(obj: HTMLElement) {
  return (property: string, state: number) => {
    // @ts-ignore
    obj.style[property] = `${state}${findUnitsFor(obj, property)}`
  }
}

function setterFnForObjList(obj: Record<string, number>) {
  return (property: string, state: number) => {
    // @ts-ignore
    obj[property] = state;
  }
}

const units = {} as Record<string, string>;

function findUnitsFor(obj: HTMLElement, property: string): string {
  if (units[property] !== undefined) {
    return units[property];
  }

  const styles = getComputedStyle(obj);
  const unit = /[a-z]+|%/.exec(styles[property as any])?.[0] || '';

  units[property] = unit;
  return unit;
}

export function normalizeProperties(type: TweenType, _objs: Obj2Tween[], properties: TweenProperties<any, any>): NormalizedProperties[] {
  if ('$$dummy' in _objs[0]) {
    return [{ $$dummy: { fromTo: [0, 1] } }]
  }

  const objs = (areElements(_objs))
    ? _objs.map(obj => {
      const styles = getComputedStyle(obj);

      return Object.fromEntries(Object.entries(properties).map(([propName], i) => {
        const startVal = styles[propName as any].split(findUnitsFor(obj, propName))[0];
        return [propName, parseFloat(startVal)];
      }));
    })
    : _objs as { [key: string]: number }[];

  return objs.map((obj) => (
    Object.fromEntries(Object.entries(properties).map(([targetName, currentValue]) => (
      (type === "to")
        ? makeTarget(targetName, obj[targetName], currentValue) :
      (type === "from")
        ? makeTarget(targetName, currentValue, obj[targetName])
        : makeTarget(targetName, ...(currentValue as [number, number]))
    )))
  )) as NormalizedProperties[];
}

function makeTarget(targetName: string, from: any, to: any) {
  return [targetName, { fromTo: [from, to] }]
}

export function createObjStates(set: ObjectSetFunction[], targets: NormalizedProperties[]): ObjectStates[] {
  return set.map((k, i) => ({ set: k, properties: targets[i] }))
}

function areElements(objs: Obj2Tween[]): objs is HTMLElement[] {
  return (objs[0] instanceof HTMLElement);
}

function isElement(obj: Obj2Tween): obj is HTMLElement {
  return (obj instanceof HTMLElement);
}

export function isTimerTween(options: TweenOptions): options is TweenOptions & TimerTweenOptions {
  return "duration" in options;
}
