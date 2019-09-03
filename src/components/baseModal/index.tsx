import * as React from 'react';
import {Button} from 'antd-mobile'
const { useEffect ,useCallback} = React;
import styles from './index.module.scss';
const {useState} = React;
type modalProps = {
    modalVisible:boolean
}
export default function BaseModal(props: modalProps){
    const [visible,setVisible] = useState(props.modalVisible);
    useCallback(() => {

    },[])
    useEffect(() => {

    },[])
    function showModal(){
      setVisible(true)
    }
    function hideModal(){
      setVisible(false)   
    }
    if(visible){
        return <div className={styles.base_modal_wrapper} >
            弹窗
            <Button type = "primary" onClick={hideModal} >取消</Button>
        </div>
    }else {
        return null
    }
}