import React, { useState } from 'react';
import { css } from 'emotion';
import { useDispatch } from 'redux-react-hook';
import { Map } from 'immutable';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  // TODO: 判断是否相同， 相同的话 提示重复添加
  const addTodo = () => {
    if (newTodo) {
      dispatch({ type: 'add todo', todo: newTodo });
      setNewTodo('');
    }
  };

  // 引入 immutable 库里的 Map 对象，它用于创建对象

  // 初始化一个对象 baseMap

  const baseMap = Map({
    name: '修言',
    career: '前端',
    age: 99
  });

  // 使用 immutable 暴露的 Api 来修改 baseMap 的内容

  const changedMap = baseMap.set('age', 100);

  // 我们会发现修改 baseMap 后将会返回一个新的对象，这个对象的引用和 baseMap 是不同的

  console.log('baseMap === changedMap', baseMap === changedMap);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.root}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
        placeholder={'请输入'}
        value={newTodo}
      />
      <button onClick={addTodo} className={styles.addBtn}>
        添加
      </button>
    </div>
  );
}

const styles = {
  root: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `,
  inputWrapper: css`
    display: flex;
  `,
  addBtn: css`
    width: 80px;
    height: 40px;
    border: none;
    text-align: center;
    background: red;
  `
};
