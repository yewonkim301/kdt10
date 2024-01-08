import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import StyleEx from './StyleEx';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponent />
      <br />
      <h2>SASS</h2>
      <SassComponent />
      <br />
      <StyleEx />
    </div>
  );
}

export default App;
