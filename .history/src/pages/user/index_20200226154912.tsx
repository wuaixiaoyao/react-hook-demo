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
const { useState, useCallback, useEffect } = React;
export default function Users() {
	const { visible, hideModal, showModal} = useModal({
		modalVisible: false
	})
	const { count } = useLogTime({ log: true, time: true });

	useEffect(() => {

	}, []);

	return (
		<div>
			<h2 onClick={showModal}>点击登录</h2>
			<p>{`次数${count}`}</p>
			<LoginModal
				modalVisible={visible}
				onCancelCb={hideModal}
			/>
		</div>
	);
}
