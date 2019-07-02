/**
 * @author wuaixiaoyao
 * @date 2019/7/1
 * @Description:
*/
import * as React from "react";
import {css} from "emotion";
import {useDispatch} from "redux-react-hook";
const {useState} = React;
export default function TodoInput() {
    const [newTodo,setNewTodo] = useState("");
    const dispatch = useDispatch();
    function addTodo(){
        if(newTodo){
            dispatch({type:"add todo",todo:newTodo});
            setNewTodo("")
        }       
    }
    return (
        <div className = {styles.inputWrapper}>
            <input className={styles.root} type="text"
               onChange = {e => setNewTodo(e.target.value)}
               onKeyDown = {e=>{
                   if(e.key === "Enter"){
                        addTodo()
                    }
               }}
               placeholder={"请输入"}
               value={newTodo}
            />
            <button onClick = {addTodo} className = {styles.addBtn}>添加</button>
        </div>
    )

}
const styles = {
    root: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `,
  inputWrapper:css`
    display:flex;    

  `,
  addBtn:css`
    width:80px;
    height:40px;
    border:none;
    text-align:center;
    background:red;
  `
};