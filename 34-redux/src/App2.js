import { useSelector } from 'react-redux';
import Box1 from './component/Box1';
import './styles/Box.css';

function App() {
  const number = useSelector((state) => state.count.number);
  const isvisible = useSelector((state) => state.visible.isvisible);
  return (
    <>
      <h1>React Redux Ex2</h1>
      {/* <h2>{number}</h2> */}
      <h2>isVisible 값은 "{isvisible}"이다.</h2>
      <Box1 />
    </>
  );
}

export default App;
