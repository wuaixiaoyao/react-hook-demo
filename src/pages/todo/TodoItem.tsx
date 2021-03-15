import React, { useCallback } from 'react';
import { Button } from 'antd-mobile';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { css } from 'emotion';
import { IState } from '../../store/store';

export default function TodoItem({ index }: { index: number }) {
  const mapState = useCallback((state: IState) => state.todos[index], [index]);
  const todo = useMappedState(mapState);
  const store = useMappedState((state) => state);
  const dispatch = useDispatch();
  const deleteTodo = useCallback(() => dispatch({ type: 'delete todo', index }), [index]);
  console.log('store:' , store)
  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <Button type="primary" onClick={deleteTodo} size="small">
        删除
      </Button>
    </li>
  );
}

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `
};
