import { useState, useCallback } from 'react';
import React from 'react';

function HooksTest() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
    console.log('change leee ');
  }, []);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <input value={inputValue} onChange={onChange} />
      <div onClick={increment}>{count}</div>
    </>
  );
}

export default HooksTest;
