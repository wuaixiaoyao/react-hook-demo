/**
 * login modal 组件
 */

import * as React from 'react';
import { Button, InputItem } from 'antd-mobile';
import { useModal } from '../../../hook/useModal';
import { useLogTime } from '../../../hook/useLogTime';
import BaseModal from '../../../components/baseModal';
import { getCode as getVerifyCode, pwdLogin } from '../../../api';
import { ChangeProps } from '../../../types/event';
import styles from './style.module.scss';
const { useState, useCallback, useEffect } = React;

interface LoginModalProps {
	modalVisible: boolean;
	onCancelCb: () => void | undefined;
}

function LoginModal(props: LoginModalProps) {
	const { modalVisible, onCancelCb } = props;
	const { visible, hideModal } = useModal({ modalVisible, onCancelCb })
	const [ loginType, setLoginType ] = useState('verifyCode');
	const [ phone, setPhone ] = useState('');
	const [ password, setPassword ] = useState('');
	const { count } = useLogTime({ log: true, time: true });

	const getCode = async () => {
		let res = await getVerifyCode({ phone });
		console.log('verify code ---', res);
	};

	const login = async () => {
		hideModal()
		// let params = {
		// 	phone,
		// 	password
		// };
		// let res = await pwdLogin(params);
	};

	const changeType = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		let type = event.target.value;
		setLoginType(type);
	};

	const changePhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
		let phone = event.target.value;
		setPhone(phone);
	};

	const changePwd = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(event.target.value);
	};

	const verifyCodeView = () => (
		<div>
			<label htmlFor="account">手机号</label>
			<input id={'account'} type="text" value={phone} onChange={changePhone} />
			<button onClick={getCode}>获取验证码</button>
			<p />
			<label htmlFor="code">验证码</label>
			<input id={'code'} type="text" />
		</div>
	);

	const pwdView = () => (
		<div>
			<label htmlFor="account">手机号</label>
			<input id={'account'} type="text" />
			<br />
			<label htmlFor="pwd">密码</label>
			<input id={'pwd'} type="password" value={password} onChange={changePwd} />
		</div>
	);

	return (
		<BaseModal
			modalVisible={visible}
			onCancelCb={onCancelCb}
		>
			<div className={styles['content-wrapper']}>
				<p>
					登录方式：
					<select name="type" id="loginType" value={loginType} onChange={changeType}>
						<option key={1} value="verifyCode">
							验证码登录
						</option>
						<option key={2} value="pwd">
							密码登录
						</option>
					</select>
				</p>
				{loginType === 'verifyCode' ? verifyCodeView() : pwdView()}
				<Button onClick={login} type="primary" style={{ width: '100%', marginTop: 20 }}>
					登录
				</Button>
			</div>
		</BaseModal>
	);
}
export default React.memo(LoginModal);
