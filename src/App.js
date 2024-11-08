import './App.css';
import Contador from './Contador';
import Toggle from './Toggle';
import ListaTareas from './ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>--------------------</h1>
        <Contador />
        <h1>--------------------</h1>
        <Toggle />
        <h1>--------------------</h1>
        <ListaTareas />
      </header>
    </div>
  );
}

export default App;
