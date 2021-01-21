import React, { useEffect, useState } from 'react';

/**
 * Switch 组件 对children 做处理
 * @param props
 */
const Switch: React.FC = (props) => {
  const { children } = props;
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elements = React.Children.map(children, (child) => {
      console.log('child', child);
      const { props } = child;
      return React.cloneElement(child, { type: 'clone', ...props });
    });
    setElements(elements);
  }, [children]);

  console.log('elements:', elements);

  return <div>{elements}</div>;
};
export default Switch;
