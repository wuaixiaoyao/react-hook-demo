/*
 * @Author: wuaixiaoyao
 * @Date: 2020-07-29 16:19:49
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-07-29 17:04:49
 */
/* child子组件 */
// https://reactjs.org/docs/hooks-reference.html#useimperativehandle
import * as Reaact from 'react';
import { useState, useImperativeHandle } from 'react';
// props子组件中需要接受ref
const ChildComp = ({ cRef: any }) => {
  const [val, setVal] = useState();
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal: Reaact.SetStateAction<undefined>) => {
      setVal(newVal);
    }
  }));
  return <div>{val}</div>;
};
export default ChildComp;
