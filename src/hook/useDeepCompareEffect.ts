import React, { useRef, useEffect } from 'react';
import _ from 'lodash';
import { useCounter } from 'react-use';

declare type FunType = () => void | undefined;

// TODO: 参考 react use [https://github.com/streamich/react-use/blob/a9f615312b0982ed0ec46f1f27375961eec6c91e/src/useCustomCompareEffect.ts#L7]
export function useDeepCompareEffect<T>(fn: Function, deps: T) {
  // 使用一个数字信号控制是否渲染，简化 react 的计算，也便于调试
  let renderRef = useRef<number | any>(0);
  let depsRef = useRef<T>(deps);
  // 不存在或者不相等
  if (!depsRef.current || !_.isEqual(deps, depsRef.current)) {
    depsRef.current = deps;
    renderRef.current++;
  }
  return useEffect(fn, [renderRef.current]);
}

useDeepCompareEffect(
  function () {
    // effect操作
  },
  { name: 'c' }
);

const UseDeepCompareEffectDeomo = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useDeepCompareEffect(() => {
    inc(options.step);
  }, [options]);

  return React.createElement('div', null, `useDeepCompareEffect:${count}`);
};

export { UseDeepCompareEffectDeomo };
