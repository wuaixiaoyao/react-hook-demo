# css 模块化 & 样式隔离

日常的开发模式 存在以下痛点。

- 全局污染：CSS 选择器的作用域是全局的，所以很容易引起选择器冲突；而为了避免全局冲突，又会导致类命名的复杂度上升
- 复用性低：CSS 缺少抽象的机制，选择器很容易出现重复，不利于维护和复用

对于这个问题，也有一些方案。
vue 框架已经帮我们实现了 css 模块化, 通过
style 标签的 scoped 指令定义作用域，通过编译为该作用域所有标签生成唯一的属性。如图：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b86cc72b94e4df49adb0fba1ffee3eb~tplv-k3u1fbpfcp-zoom-1.image)
但是 react 并未给我们实现，我们可能会能通过其它方案来实现，如：约定 css class 命名规范(命名空间) 加上业务前缀，或者封装组件, 或者[BEM 命名规范(block-element-modife)](https://bemcss.com/)/[BEM 简介](https://segmentfault.com/a/1190000012705634)、 但并不能解决根源问题，反而使代码更难维护。

# 目前主流的 css 模块化分为 css modules 和 css in js 两种方案

### css modules

CSS Modules 指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性, 编译时会将 css 类名 加上唯一 hash。
css module 需要 webpack 配置 css-loader 或者 scss-loader , module 为 true

```js
{
    loader: 'css-loader',
    options: {
        modules: true, // 开启模块化
        localIdentName: '[path][name]-[local]-[hash:base64:5]'
    }
}
```

效果如图所示：
![效果图](https://img2018.cnblogs.com/blog/1329093/201811/1329093-20181122101848574-1914382189.png)

讲解一下 localIdentName 自定义生成的类名格式，可选参数有：

- [path]表示样式表相对于项目根目录所在的路径(默认不拼接)
- [name] 表示样式表文件名称
- [local] 表示样式表的类名定义名称
- [hash:length] 表示 32 位的 hash 值
  注意：只有类名选择器和 ID 选择器才会被模块化控制，类似 body h2 span 这些标签选择器是不会被模块化控制

**css module 作用域**

- 作用域默认为 local 局部作用域，只在当前模块生效

- 被 :global 包裹起来的类名，不会被模块化，作用域为全局的(非特殊情况尽量避免)

```js
/* 加上 :global 会全局样式 */
:global(.global-color) {
  color: blue;
  :global(.common-width) {
    width: 200px;
  }
}
```

**css module 高级使用**

- 和外部样式混用

```js
import classNames from 'classnames';

// 使用classNames
const wrapperClassNames = classNames({
  'common-show': visible,
  'common-hide': !visible,
  [styles1['view-wrapper']]: true
});
<div className={wrapperClassNames}></div>;

// 使用模板字符串
<div className={`${styles1.content} ${styles1.color} common-show`}>
  我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容
</div>;
```

- 覆盖第三方 UI 库

```jsx
{/* 覆盖第三方UI库 样式*/}
<div className={styles1['am-button-custom-wrapper']}>
  <Button type={'primary'} onClick={() => toggle()}>
     {visible ? '隐藏' : '显示'}
  </Button>
</div>

//  覆盖第三方UI库的 样式
.am-button-custom-wrapper {
  :global {
    .am-button-primary {
      color: red;
    }
  }
}
```

### css in js

- style 对象

```js
const style = {
  width: 200,
  color: '#fff',
  backgroundColor: 'red'
};
```

- [emotion](https://emotion.sh/docs/introduction)

- styled-components
  [styled-components](https://styled-components.com/docs/basics#extending-styles) 是针对 React 写的一套 css in js 框架, 在你使用 styled-components 进行样式定义的同时，你也就创建了一个 React 组件。[css in js ](https://www.jianshu.com/p/27788be90605)

  ```css

  const DivWrapper = styled.div`
    width: '100%';
    height: 300;
    background-color: ${(props) => props.color};
  `;

  // 封装第三方组件库
  const AntdButtonWrapper = styled(Button)`
    color: 'red';
  `;

  // 通过属性动态定义样式
  const MyButton = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  // 样式复用
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
  ```

styled-components 优势: 支持将 props 以插值的方式传递给组件,以调整组件样式, 跨平台可在 RN 和 next 中使用。 缺点： 预处理器和后处理器不兼容。

### 对比总结

![总结](https://user-gold-cdn.xitu.io/2019/12/30/16f5477372d2bee3?imageslim)

# 参考链接

- [梳理 CSS 模块化
  ](https://juejin.im/post/6844904034281734151#heading-9)
- [styled-component, emotion and jss 对比](https://www.cnblogs.com/yy17yy/p/11618775.html)
