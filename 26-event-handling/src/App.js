import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import Color from './ex/Color';
import Disappear from './ex/Disappear';
import FinalEx from './ex/FinalEx';
import HandlerEx from './ex/HandlerEx';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <Color />
      <hr />
      <Disappear />
      <hr />
      <FinalEx
        fruit={['사과', '바나나', '복숭아']}
        bgColor={['빨강', '노랑', '분홍']}
        color={['검정', '파랑', '초록']}
      />
    </div>
  );
}

export default App;
