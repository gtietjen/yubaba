// @flow

import type { Styles } from './lib/dom';

import { createElement } from './lib/dom';

function getTargetElement (element, { newElement, cloneElement, fromStyles }) {
  let target;

  if (newElement) {
    target = createElement(fromStyles, {
      parentElement: document.body,
    });
  } else if (cloneElement) {
    target = createElement(fromStyles, {
      cloneFrom: element,
      parentElement: document.body,
    });
  } else {
    target = element;
  }

  return target;
}

export type AnimationKeyframes = Array<Styles>;

function prepareAnimation (element, { easing, delay, duration, resolvePromise, animationName, onStart }) {
  let cleanedUp = false;

  return (keyframes: AnimationKeyframes) => {
    // $FlowFixMe - animate isn't on HTMLElement atm. We should fix this.
    const animation = element.animate(keyframes, {
      delay,
      duration,
      easing,
      fill: 'forwards',
    });

    if (onStart) {
      onStart({
        animation,
        animationName,
        target: element,
      });
    }

    animation.onfinish = () => {
      return resolvePromise({
        animationName,
        target: element,
        cleanup: () => {
          if (cleanedUp) {
            return;
          }

          cleanedUp = true;
          element.parentElement && element.parentElement.removeChild(element);
        },
      });
    };
  };
}

type Animation = {

};

type AnimationOptions = {
  animation: {
    name: string,
    options: Object,
    styles: Styles,
  },
  options: {
    duration: number,
    delay?: number,
    easing?: string,
    onStart?: ({
      animationName: string,
      animation: Animation,
      target: HTMLElement,
    }) => {},
  },
  resolve: ({
    animationName: string,
    target: HTMLElement,
    cleanup: Function,
  }) => {};
};

export default function animator (element: HTMLElement, { animation, resolve, options }: AnimationOptions) {
  const target = getTargetElement(element, {
    ...animation.options,
    fromStyles: animation.styles,
  });

  return prepareAnimation(target, {
    delay: options.delay,
    onStart: options.onStart,
    resolvePromise: resolve,
    animationName: animation.name,
    duration: options.duration || 500,
    easing: options.easing || animation.options.easing || 'ease-in-out',
  });
}
