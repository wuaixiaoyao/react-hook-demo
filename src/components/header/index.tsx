import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
import styles from './index.module.scss';

declare type HeaderTypeProps = {};

const Header: React.FC<HeaderTypeProps> = (props: HeaderTypeProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={styles['nav-wrapper']} style={{ backgroundColor: theme.background }}>
      <ul>
        <li>
          <Link to="/test/">测试</Link>
        </li>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/users/">用户</Link>
        </li>
        <li>
          <Link to="/songs/">歌曲</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
