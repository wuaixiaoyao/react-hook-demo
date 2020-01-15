import {css} from 'emotion';
import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Index from './pages/home'
import Todo from './pages/todo';
import Users from './pages/user';
import Song from "./components/songs/SongItem";
import stylesName from './index.style.module.scss';

export default function App() {
    return <div className={styles.root}>
        <Router>
            <div>
                <nav className={stylesName['nav-wrapper']}>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/todo">Todo list</Link>
                        </li>
                        <li>
                            <Link to="/users/">用户</Link>
                        </li>
                        <li>
                            <Link to="/songs/">歌曲</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Index} />
                <Route path="/todo" component={Todo} />
                <Route path="/users/" component={Users} />
                <Route path="/songs/" component={Song} />

            </div>
        </Router>

    </div>
}

const styles = {
    root: css`
    box-sizing:border-box:
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    margin: 24px auto;
    padding: 24px;
    width:90%;
  `,
};
