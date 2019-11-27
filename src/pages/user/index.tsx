/**
 * @author wuaixiaoyao
 * @date 2019/9/2
 * @Description:
*/
import {ChangeEvent} from 'react';
import  * as React  from 'react';
import BaseModal from '../../components/baseModal'
import {getCode as getVerifyCode, pwdLogin} from '../../api'
import {ChangeProps} from '../../types/event'
import styles from './style.module.scss'
const {useState,useCallback,useEffect} = React;
export default function Users() {
    const [ visible,setVisible ] = useState(false);
    const [ loginType,setLoginType ] = useState('verifyCode');
    const [ phone ,setPhone ] = useState('');
    const [ password , setPassword] = useState('');
    useEffect( () => {

    },[])
    function showModal(){
        setVisible(true)
    }
    const getCode = async ()=>{
        let res = await getVerifyCode({phone});
        debugger

    }
    const handleOk = () => {
        //点击确定的回调

    }
    const login = async () => {
        let params = {
            phone,
            password
        }
        let res = await pwdLogin(params);

    }
    const changeType =  (event: ChangeEvent<HTMLSelectElement>): void => {
        let type = event.target.value;
        setLoginType(type)
    }
    const changePhone =  (event: ChangeEvent<HTMLInputElement>): void => {
        let phone = event.target.value;
        setPhone( phone )
    }
    const changePwd = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword( event.target.value)
    }
    const verifyCodeView = ()=><div >
        <label htmlFor="account" >手机号</label>
        <input id={"account"} type="text" value={phone} onChange = {changePhone}/>
        <button onClick = {getCode}>获取验证码</button>
        <br/>
        <label htmlFor="code">验证码</label>
        <input id={"code"} type="text" />
    </div>
    const pwdView = () => <div >
        <label htmlFor="account">手机号</label>
        <input id={"account"} type="text" />
        <br/>
        <label htmlFor="pwd">密码</label>
        <input id={"pwd"} type="password" value={password} onChange={changePwd}/>
    </div>
    return <div>
        <h2 onClick = { showModal}>登录</h2>
        <BaseModal modalVisible = {visible}
            onCancelCb = {() => {
                setVisible(false)
            }}>
            <div className={styles["content-wrapper"]}>
                <p>
                    <select name="type" id="loginType"
                            value = {loginType} onChange = {changeType}>
                        <option key = {1} value="verifyCode">验证码登录</option>
                        <option key = {2} value="pwd">密码登录</option>
                    </select>
                </p>
                {loginType === 'verifyCode'? verifyCodeView() :pwdView() }
                <button onClick = {login}>登录</button>
            </div>
        </BaseModal>
    </div>;
}
