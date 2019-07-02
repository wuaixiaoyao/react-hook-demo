/**
 * @author wuaixiaoyao
 * @date 2019/7/1
 * @Description:
*/
import {Action, createStore} from 'redux';
import reducer from '../reducer/reducer';

export interface IState {
    lastUpdated: number;
    todos: string[];
}

export type Action =
    | {
    type: 'add todo';
    todo: string;
}
    | {
    type: 'delete todo';
    index: number;
};

export function makeStore() {
    return createStore(reducer, {
        lastUpdated: 0,
        todos: [
            'Make the fire!',
            'Fix the breakfast!',
            'Wash the dishes!',
            'Do the mopping!',
        ],
    });
}
