/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description:
*/
import * as React from "react";
import TodoInput from './TodoInput';
import TodoList from './TodoList';
export default function Todo() {
    return <div>
        <TodoInput/>
        <TodoList/>
    </div>
}