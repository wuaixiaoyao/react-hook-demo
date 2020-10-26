import React from 'react';
import { useEffect, useCallback, useState, useRef, FC } from 'react';
import { Button } from 'antd-mobile';
import moment from 'moment';
interface ApplicationsProps {}

interface refCurrent {
  current?: number;
}

const Timer: FC<ApplicationsProps> = (props) => {
  // 创建一个标识，通用容器
  const timer: refCurrent = useRef();
  const [nums, setNums] = useState(0);

  useEffect(() => {
    goStart();
    return () => {
      // 组件销毁时，清除定时器
      goClear;
    };
  }, []);

  // 点击开始
  const goStart = useCallback(() => {
    (index?: number) => {
      goClear();
      timer.current = setInterval(() => {
        console.log(timer);
        // 注意此处，不是直接通过setNums(),修改里面的值，因为闭包原因，如果通过这种方式会一直为1，通过测试，不是更改值方式的原因，如果通过useReducer更改值也不会改变依然是1
        setNums((n) => {
          return n + 1;
        });
      }, 1000);
    };
  }, []);

  const goClear = () => {
    clearInterval(timer.current);
  };

  return (
    <React.Fragment>
      <div>
        <Button
          type="primary"
          style={{ marginBottom: 10 }}
          onClick={() => {
            goStart();
          }}
        >
          开始
        </Button>
        <Button
          type="primary"
          onClick={() => {
            goClear();
          }}
        >
          清除
        </Button>
      </div>
      <div>定时器nums: {nums}</div>
    </React.Fragment>
  );
};
export default Timer;
