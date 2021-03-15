/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: home
 */
import React, { useRef, useEffect, useState } from 'react';
import { useInterval } from 'react-use';
import Banner from './banner';
import Timer from '../timer';
import HooksTest from './test';

interface Foo {
  bar: number;
  name: string;
}
const foo = {} as Foo;
foo.bar = 123;
foo.name = 'test';

export default function Index(props: any) {
  const [count, setCount] = useState(0);
  const bannerRef = useRef(null);
  const currentRef = useRef(null);
  console.log('currentRef', currentRef);

  useEffect(() => {
    // 第一次渲染结束执行
    window.addEventListener('scoll', handleScroll);
    return () => {
      // 组件卸载之前执行
      window.removeEventListener('scoll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      // console.log('bannerRef:', bannerRef);
      console.log('count:', count + 1);
    }, 1000);
    return clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log('每次渲染结束都会执行');
  });

  useEffect(() => {
    console.log('只有在 count 变化后才会执行');
  }, [count]);

  const handleScroll = () => {
    console.log('----scoll----');
  };

  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl && inputEl.current && inputEl.current.focus && inputEl.current.focus();
    console.log('inputEl:', inputEl);
  };

  return (
    <div style={{ height: 800 }}>
      <h2 className={'global-color'}>
        首页
        <div className={'common-width'} onClick={onButtonClick}>
          首页内容 - 点击聚焦
        </div>
        <input ref={inputEl} type="text" />
      </h2>
      <div>
        <div>
          <input type="file" accept="image/*" multiple />
        </div>
      </div>
      {/* <Banner ref={bannerRef} /> */}
      <pre>
        Make and model: <span id="makeAndModel"></span>
      </pre>
      <br />
      <pre id="allMetaDataSpan"></pre>
      <Timer />
      <HooksTest />
    </div>
  );
}
