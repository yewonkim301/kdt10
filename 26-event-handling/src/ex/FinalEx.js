import { useState } from 'react';
import apple from './사과.jpg';
import banana from './바나나.jpg';
import peach from './복숭아.jpg';

const FinalEx = (props) => {
  const { fruit, bgColor, color } = props;
  const [state, setState] = useState({
    bgColor: 'red',
    color: 'black',
    img: apple,
    text: '',
  });
  const changeState = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'bgColor') {
      setState((prevState) => {
        return {
          // ... -> spread 연산자
          // ...prevState는 명시되지 않은 값은 이전 값 그대로 가져가겠다는 의미
          // 즉, 뒤에 명시된 bgColor만 값을 변경하고, 나머지는 그대로 사용하겠다는 의미
          ...prevState,
          bgColor: e.target.value,
        };
      });
    } else if (e.target.name === 'color') {
      setState((prevState) => {
        return {
          ...prevState,
          color: e.target.value,
        };
      });
    } else if (e.target.name === 'fruit') {
      let fruitImg;
      if (e.target.value === 'apple') {
        fruitImg = apple;
      } else if (e.target.value === 'banana') {
        fruitImg = banana;
      } else if (e.target.value === 'peach') {
        fruitImg = peach;
      }
      setState((prevState) => {
        return {
          ...prevState,
          img: fruitImg,
        };
      });
    }
    setState((prevState) => {
      return {
        ...prevState,
        text: e.target.value,
      };
    });
  };
  return (
    <div>
      <span>
        과일:{' '}
        <select name="fruit" id="fruit" onChange={changeState}>
          <option value="apple">{fruit[0]}</option>
          <option value="banana">{fruit[1]}</option>
          <option value="peach">{fruit[2]}</option>
        </select>
      </span>
      <span>
        배경색:{' '}
        <select name="bgColor" id="bgColor" onChange={changeState}>
          <option value="red">{bgColor[0]}</option>
          <option value="yellow">{bgColor[1]}</option>
          <option value="pink">{bgColor[2]}</option>
        </select>
      </span>
      <span>
        글자색:{' '}
        <select name="color" id="color" onChange={changeState}>
          <option value="black">{color[0]}</option>
          <option value="blue">{color[1]}</option>
          <option value="green">{color[2]}</option>
        </select>
      </span>
      <br />
      <span>
        내용: <input type="text" onChange={changeState} />
      </span>
      <br />
      <img src={state.img} alt="" onChange={changeState} /> <br />
      <span style={{ backgroundColor: state.bgColor, color: state.color }}>
        {state.text}
      </span>
    </div>
  );
};

export default FinalEx;
