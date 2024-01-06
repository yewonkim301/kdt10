import Ex1 from './Ex1';
import Ex2 from './Ex2';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 라이프사이클 */}
      <LifeCycleClass /> <hr />
      {/* 함수형 컴포넌트 라이프사이클 */}
      <LifeCycleFunc /> <hr />
      <Ex1 />
      <hr />
      <Ex2 />
    </div>
  );
}

export default App;
