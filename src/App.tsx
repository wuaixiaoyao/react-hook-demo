import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from 'emotion';
import Index from './pages/home';
import Todo from './pages/todo';
import Users from './pages/user';
import Song from './components/songs/SongItem';
import Test from './pages/test';
import { ThemeContext, themes } from './context/themeContext';
import ThemedButton from './UI/ThemedButton';
import Header from './components/header';

// 一个使用 ThemedButton 的中间组件
const Toolbar = (props: any) => {
  return (
    <div className={stylesEmotion.themeButtonWrapper}>
      <ThemedButton>修改主题色</ThemedButton>
    </div>
  );
};

export default function App() {
  // 默认亮色
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = useCallback(() => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
        <div className={stylesEmotion.root}>
          <Router>
            <div>
              <Header />
              <Route path="/" exact component={Index} />
              <Route path="/todo" exact component={Todo} />
              <Route path="/users/" exact component={Users} />
              <Route path="/songs/" component={Song} />
              <Route path="/test/" component={Test} />
            </div>
          </Router>
        </div>
      </ThemeContext.Provider>
      <ThemedButton>我不会变， 因为我不在provider里面</ThemedButton>
    </div>
  );
}

const stylesEmotion = {
  root: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    width: 100%;
  `,
  themeButtonWrapper: css`
   positon: fixed;
   bottom: 30px;
   right； 10px；
   width: 60px;
  `
};
