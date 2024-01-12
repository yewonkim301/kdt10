import { useSelector, useDispatch } from 'react-redux';
// import { plus, minus } from '../store/countReducer';
import visibleReducer, { change } from '../store/visibleReducer';

function Box4() {
  const number = useSelector((state) => state.count.number);
  const isvisible = useSelector((state) => state.visible.isvisible);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      {/* <h2>Box4 : {number}</h2>
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button> */}
      {/* 실습 */}
      <h2>isVisible 값은 "{isvisible}"이다.</h2>
      <button onClick={() => dispatch({ type: 'visible/isvisible' })}>
        CHANGE
      </button>
    </div>
  );
}

export default Box4;
