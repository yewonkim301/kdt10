import UseCallback from './UseCallback';
import UseCallback2 from './UseCallback2';
import UseMemoEx from './UseMemoEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallback />
      <hr />
      <UseCallback2 postId={3} />
    </div>
  );
}

export default App;
