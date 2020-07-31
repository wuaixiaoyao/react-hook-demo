import { useRef } from 'react';
import ChildComp from './child';
const FComp = () => {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        childRef.current.changeVal(99);
    };
    return (
        <>
            {/* 此处注意需要将childRef通过props属性从父组件中传给自己 cRef={childRef} */}
            <ChildComp cRef={childRef} />
            <button onClick={updateChildState}>触发子组件方法</button>
        </>
    );
};
export default FComp;
