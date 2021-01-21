/**
 * @author wuaixiaoyao
 * @date 2019/7/1
 * @Description:
 */
import * as React from 'react';
import { useMappedState } from 'redux-react-hook';
import { css } from 'emotion';
import { IState } from '../../store/store';
import TodoItem from './TodoItem';
import Switch from './Switch';

const mapState = (state: IState) => ({
  lastUpdated: state.lastUpdated,
  todoCount: state.todos.length
});

export default function TodoList() {
  const { lastUpdated, todoCount } = useMappedState(mapState);
  console.log('todoCount', todoCount);
  return (
    <div>
      <div className={styles.count}>你有 {todoCount}个Todos</div>
      <ul className={styles.todos}>
        <Switch>
          {new Array(todoCount).fill(null).map((_, index) => (
            <TodoItem index={index} key={index} />
          ))}
        </Switch>
      </ul>
      <div className={styles.lastUpdated}>
        最近更新时间: {lastUpdated ? new Date(lastUpdated).toString() : 'never'}
      </div>
    </div>
  );
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `
};
