import * as React from 'react';
const { useEffect, useState } = React;

export function useLogTime(data = { log: true, time: true }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        data.log && console.log('log 组件渲染完成----');
        let timer: any;
        if (data.time) {
            timer = setInterval(() => {
                setCount((count: number) => count + 1);
            }, 1000);
        }
        return () => {
            data.log && console.log('log 组件即将卸载----');
            data.time && clearInterval(timer);
        };
    }, []);
    return { count };
}
