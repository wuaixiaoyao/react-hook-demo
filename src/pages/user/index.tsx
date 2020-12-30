/**
 * @author wuaixiaoyao
 * @date 2019/9/2
 * @Description:
 */
import * as React from 'react';
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
export default function Users() {
  const { visible, hideModal, showModal } = useModal({
    modalVisible: false
  });
  const { count } = useLogTime({ log: true, time: true });
  const [time, setTime] = useState(0);

  useEffect(() => {}, []);

  return (
    <div>
      <h2 onClick={showModal}>点击登录</h2>
      <p>{`次数${count}`}</p>
      <p>测试show time, {time}</p>
      <button onClick={() => setTime((pre: number) => pre + 1)}>点击增加</button>
      <LoginModal modalVisible={visible} onCancelCb={hideModal} />
      {/* <Parent></Parent> */}
      <TextInputWithFocusButton></TextInputWithFocusButton>
    </div>
  );
}
