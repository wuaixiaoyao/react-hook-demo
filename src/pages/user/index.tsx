/**
 * @author wuaixiaoyao
 * @date 2019/9/2
 * @Description:
*/
import * as React from 'react';
import BaseModal from '../../components/baseModal'
import {getCode as getVerifyCode,pwdLogin} from '../../api'
const {useState,useCallback,useEffect} = React;
export default function Users() {
    const [visible,setVisible] = useState(true);
    const [loginType,setLoginType] = useState('pwd');
    useEffect( () => {

    },[])
    function showModal(){
        setVisible(true)
    }
    const getCode = async ()=>{
        let res = await getVerifyCode({phone:'13818959694'});
    }
    const handleOk = () => {
        //点击确定的回调

    }
    const login = () => {

    }
    // const changeType = (event:changeEvent)=> {
    //    //
    //
    //     // setLoginType(value)
    // }
    const verifyCodeView = ()=><div >
        <label htmlFor="account">手机号</label><input id={"account"} type="text" />
        <button onClick = {getCode}>获取验证码</button>
        <br/>
        <label htmlFor="account">验证码</label><input id={"account"} type="text" />
    </div>
    const pwdView = () => <div >
        <label htmlFor="account">手机号</label><input id={"account"} type="text" />
        <br/>
        <label htmlFor="pwd">密码</label><input id={"pwd"} type="text" />
    </div>
    return <div>
        <h2 onClick = { showModal}>登录</h2>
        <BaseModal modalVisible = {visible}>
            <select name="type" id="loginType">
                <option key = {1} value="verifyCode">验证码登录</option>
                <option key = {2} value="pwd">密码登录</option>
            </select>
            {loginType === 'verifyCode'? verifyCodeView() :pwdView() }
            <button onClick = {login}>登录</button>
        </BaseModal>
    </div>;
}