/**
 * @author wuaixiaoyao
 * @date 2019/9/2
 * @Description:
*/
import * as React from 'react';
import BaseModal from '../../components/baseModal'
const {useState,useCallback,useEffect} = React;
export default function Users() {
    const [visible,setVisible] = useState(true);
    useEffect( () => {

    },[])
    function showModal(){
        setVisible(true)
    }
    return <div>
        <h2 onClick = { showModal}>登录</h2>
        <BaseModal modalVisible = {visible}/>
    </div>;
}