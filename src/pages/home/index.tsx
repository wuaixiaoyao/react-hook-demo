/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: home
 */
import * as React from 'react';
import Banner from './banner';
const { useEffect } = React;

export default function Index() {
  interface Foo {
    bar: number;
    name: string;
  }
  const foo = {} as Foo;
  foo.bar = 123;
  foo.name = 'test';

  useEffect(() => {
    setTimeout(() => {
      console.log('home index');
    }, 4000);
  }, []);

  return (
    <div>
      <h2 className={'global-color'}>
        首页
        <div className={'common-width'}>首页内容</div>
      </h2>
      <div>
        <div>
          <input type="file" accept="image/*" multiple />
        </div>
      </div>
      <Banner />
    </div>
  );
}
