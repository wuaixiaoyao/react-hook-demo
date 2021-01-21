/**
 * @author wuaixiaoyao
 * @date 2019/9/2
 * @Description:
 */
import * as React from 'react';
import { useCounter, useDeepCompareEffect, useDebounce } from 'react-use';

import { Button, InputItem } from 'antd-mobile';
import { useLogTime } from '../../hook/useLogTime';
import { useModal } from '../../hook/useModal';
import BaseModal from '../../components/baseModal';
import { getCode as getVerifyCode, pwdLogin } from '../../api';
import { ChangeProps } from '../../types/event';
import LoginModal from './components/loginModal';
import Parent from './components/parent';
const { useState, useCallback, useEffect, useRef } = React;

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

const DebounceDemo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <button onClick={cancel}>Cancel debounce</button>
      </div>
    </div>
  );
};

export default function Users() {
  const { visible, hideModal, showModal } = useModal({
    modalVisible: false
  });
  const { count } = useLogTime({ log: true, time: true });
  const [time, setTime] = useState(0);
  const [count1, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  // 深比较
  useDeepCompareEffect(() => {
    inc(options.step);
  }, [options]);

  return (
    <div>
      <h2 onClick={showModal}>点击登录</h2>
      <p>{`次数${count}`}</p>
      <p>测试show time, {time}</p>
      <button onClick={() => setTime((pre: number) => pre + 1)}>点击增加</button>
      <LoginModal modalVisible={visible} onCancelCb={hideModal} />
      {/* <Parent></Parent> */}
      <TextInputWithFocusButton></TextInputWithFocusButton>
      <p>useDeepCompareEffect: {count1}</p>
      <DebounceDemo />
    </div>
  );
}
