/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description: home
 */
import * as React from 'react';
import Banner from './banner';
import { useRef, useEffect, forwardRef } from 'react';
import Timer from '../timer';

export default function Index() {
  interface Foo {
    bar: number;
    name: string;
  }
  const foo = {} as Foo;
  foo.bar = 123;
  foo.name = 'test';

  const bannerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      console.log('home index');
      console.log('bannerRef:', bannerRef)
    }, 4000);
  }, []);

  useEffect(() => {
    const win: any = window;
    const EXIF = win.EXIF;
    var img1 = document.getElementById('img1');
    console.log('EXIF:', EXIF);
    // EXIF.getData(img1, function () {
    //   var make = EXIF.getTag(this, 'Make');
    //   var model = EXIF.getTag(this, 'Model');
    //   var makeAndModel = document.getElementById('makeAndModel');
    //   makeAndModel.innerHTML = `${make} ${model}`;
    // });

    // var img2 = document.getElementById('img2');
    // EXIF.getData(img2, function () {
    //   var allMetaData = EXIF.getAllTags(this);
    //   var allMetaDataSpan = document.getElementById('allMetaDataSpan');
    //   allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, '\t');
    // });
  });

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    // inputEl && inputEl.current && inputEl.current.onfocus && inputEl.current.onfocus();
    console.log('inputEl:', inputEl)
  };

  return (
    <div>
      <h2 className={'global-color'}>
        首页
        <div className={'common-width'} onClick={onButtonClick} >首页内容</div>
        <input forwardRef={inputEl} type="text" />
      </h2>
      <div>
        <div>
          <input type="file" accept="image/*" multiple />
        </div>
      </div>
      <Banner ref={bannerRef}/>
      <img src="image1.jpg" id="img1" />
      <pre>
        Make and model: <span id="makeAndModel"></span>
      </pre>
      <br />
      <img src="image2.jpg" id="img2" />
      <pre id="allMetaDataSpan"></pre>
      <Timer/>
    </div>
  );
}
