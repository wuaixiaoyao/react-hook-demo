import * as React from 'react';
import {Button} from 'antd-mobile'
const { useEffect ,useCallback} = React;
import styles from './index.module.scss';
const {useState} = React;
type modalProps = {
    modalVisible:boolean,
    children?:any
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
            <div className={styles.base_modal_content}>
                {props.children}
            </div>
            <div className = {styles.footer_wrapper}>
                <Button type = "primary" >确定</Button>
                <Button type = "primary" onClick={hideModal} style = {{width:60}}>取消</Button>
            </div>
        </div>
    }else {
        return null
    }
}