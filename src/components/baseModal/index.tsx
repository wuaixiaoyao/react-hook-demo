import * as React from 'react';
import styles from './index.module.scss';
const {useState} = React;
export default function BaseModal({modalVisible}:{modalVisible:boolean}){
    const [visible,setVisible] = useState(false);
    function showModal(){
      setVisible(true)
    }
    function hideModal(){
      setVisible(false)   
    }
    return(
      visible&&
      <div className={styles.base_modal_wrapper} onClick={hideModal}>
          123444
      </div>
  )
}