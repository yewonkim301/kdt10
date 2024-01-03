import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import Color from './ex/Color';
import Disappear from './ex/Disappear';
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
    </div>
  );
}

export default App;
