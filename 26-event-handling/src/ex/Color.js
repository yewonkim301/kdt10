import { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState('검정색');
  const [color2, setColor2] = useState('black');
  /* 해설 -> 객체로 선언
  const [textColor, changeColor] = useState({
    color: 'black',
    text: '검정색'
  })
  */
  const red = (e) => {
    setColor('빨간색');
    setColor2('red');
  };
  const blue = (e) => {
    setColor('파란색');
    setColor2('blue');
  };

  return (
    <div>
      <h1>이벤트 핸들링 실습2</h1>
      {/* 해설 */}
      {/* <h2 style={{ color: textColor.color }}>{textColor.text} 글씨</h2> */}
      <h2 style={{ color: color2 }}>{color} 글씨</h2>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
};

export default Color;
