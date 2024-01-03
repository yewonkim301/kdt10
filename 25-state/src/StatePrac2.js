import React, { useState } from 'react';

const StatePrac2 = () => {
  // 첫 번쨰 인자: 초기값 / 두 번쨰 인자: 변경될 값
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <h1>실습2. 함수형 컴포넌트</h1>
      <h2>{number}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
};

export default StatePrac2;
