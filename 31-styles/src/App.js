import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import StyleEx from './StyleEx';
import StyleEx2 from './StyleEx2';
import StyleEx3 from './StyleEx3';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>React styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponent />
      <br />
      <h2>SASS</h2>
      <SassComponent />
      <br />
      <StyleEx />
      <br />
      <StyleEx2 />
      <br />
      <StyleEx3 /> */}
      <StyledComponent />
    </div>
  );
}

export default App;
