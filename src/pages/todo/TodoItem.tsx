/**
 * @author wuaixiaoyao
 * @date 2019/7/1
 * @Description:
*/
import { css } from "emotion";
import * as React from "react";
import { Button} from 'antd-mobile';
import { useDispatch, useMappedState } from "redux-react-hook";
import { IState } from "../../store/store";
const {useCallback} = React;
export default function TodoItem({ index }: { index: number }) {
    const mapState = useCallback((state: IState) => state.todos[index], [
        index
    ]);
    const todo = useMappedState(mapState);
    const dispatch = useDispatch();
    const deleteTodo = useCallback(
        () => dispatch({ type: "delete todo", index }),
        [index]
    );

    return (
        <li className={styles.root}>
            <span>{todo}</span>
            <button onClick={deleteTodo}>删除</button>
            <Button>删除</Button>

        </li>
    );
}

const styles = {
    root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `
};
