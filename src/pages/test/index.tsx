/*
 * @Author: wuaixiaoyao
 * @Date: 2020-07-30 19:43:30
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-09-07 10:33:47
 */
import * as React from 'react';
import { useToggle } from 'ahooks';
import { Button } from 'antd-mobile';
import classNames from 'classnames';
// scss
import './common.scss';
import './override.scss';
// css module
import cssStyle from './index.module.css';
import styles1 from './title1.module.scss';

// css in js e.g. styles-components
import styled, { keyframes } from 'styled-components';
console.log('title1:', styles1);

interface MyButtonProps {
  primary?: any;
}

interface DivWrapperProps {
  color?: string;
}

const CssModule = () => {
  const [visible, { toggle }] = useToggle({ defaultValue: true });
  // 和外部样式混用
  const wrapperClassNames = classNames({
    'common-show': visible,
    'common-hide': !visible,
    [styles1['view-wrapper']]: true
  });

  return (
    <React.Fragment>
      {/* 覆盖第三方UI库 样式*/}
      <div className={styles1['am-button-custom-wrapper']}>
        <Button type={'primary'} onClick={() => toggle()}>
          {visible ? '隐藏' : '显示'}
        </Button>
      </div>
      <div className={wrapperClassNames}>
        <h1 className={cssStyle.title}>css module 测试标题</h1>
        <h3 className={styles1.title}> 测试红色标题</h3>
        {/* 使用模板字符传 多个class 组合 */}
        <div className={`${styles1.content} ${styles1.color} common-show`}>
          我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容
        </div>
        <div className={styles1['composes-class']}>我是继承的视图</div>
        <Button type={'primary'}>我是am 按钮 我字体color没被覆盖</Button>
      </div>
    </React.Fragment>
  );
};

// css in js 方案

const CssInJs = () => {
  // style 对象为行内样式
  const style = {
    width: 200,
    color: '#fff',
    backgroundColor: 'red'
  };

  const DivWrapper = styled.div`
    width: '100%';
    height: 300;
    background-color: ${(props: DivWrapperProps) => props.color};
    .header-wrapper {
      font-size: 18px;
    }
  `;

  // 覆盖第三方组件库样式
  const AntdButtonWrapper = styled(Button)`
    width: ${(props: any) => (props.type === 'primary' ? '100px' : '100%')};
    span {
      color: red;
    }
  `;

  // 通过属性动态定义样式
  const MyButton = styled.button`
    background: ${(props: MyButtonProps) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props: MyButtonProps) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  // 样式复用 MyButton
  const TomatoButton = styled(MyButton)`
    color: tomato;
    border-color: tomato;
  `;

  // 创建关键帧
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
    `;

  // 创建动画组件
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;
  return (
    <React.Fragment>
      <DivWrapper color={'#999'}>
        <div className="header-wrapper">我是header</div>
        <h1 className={cssStyle.title}>css in Js 测试标题</h1>
        <h3 className={styles1.title}> 测试红色标题</h3>
        <div className={styles1.content}>
          我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容
        </div>
        <AntdButtonWrapper type={'primary'}>我是antd mobile按钮</AntdButtonWrapper>
        <MyButton primary>我是自定义按钮</MyButton>
        <TomatoButton>我是继承的自定义按钮</TomatoButton>
        <button>我是普通按钮</button>
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </DivWrapper>
    </React.Fragment>
  );
};

const Test = () => {
  const win = window as any;
  const Cb: () => void;
  // const rIC = () => {
  //   const requestId = win.requestIdleCallback(cb: Cb, {
  //     timeout: 100
  //   });
  // };
  return (
    <React.Fragment>
      <div className="override-wrapper">
        <div className="override-content">我将被被覆盖</div>
      </div>
      <CssModule />
      <hr />
      <CssInJs />
    </React.Fragment>
  );
};

export default Test;
