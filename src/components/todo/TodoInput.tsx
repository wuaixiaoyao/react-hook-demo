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
    return (
        <input className={styles.root} type="text"
               onChange = {e => setNewTodo(e.target.value)}
               onKeyDown = {e=>{
                   if(e.key === "Enter"){
                        dispatch({type:"add todo",todo:newTodo});
                        setNewTodo("")
                    }
               }}
               placeholder={"请输入"}
               value={newTodo}
        />
    )

}
const styles = {
    root: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `
};