import './App.css';
import FuncComponent from './FuncComponent';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FoodComponent from './FoodComponent';
import BookComponent from './BookComponent';
import ClassComponent2 from './ClassComponent2';

function App() {
  function valid() {
    console.log('콘솔 띄우기 성공!');
  }
  return (
    <div className="App">
      <FuncComponent name={3} />
      <FuncComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name="코딩온" />
      <ClassComponent />
      <hr />
      <br />
      <FoodComponent food="밥" />
      <FoodComponent />
      <hr />
      <br />
      <BookComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      <hr />
      <br />
      <ClassComponent2
        text="이건 컴포넌트에서 넘겨준 text props입니다."
        valid={valid}
      />
    </div>
  );
}

export default App;
