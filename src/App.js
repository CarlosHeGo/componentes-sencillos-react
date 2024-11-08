import './App.css';
import Contador from './Contador.js';
import FormularioSimple from './FormularioSimple.js';
import ListaTareas from './ListaTareas.js';
import Toggle from './Toggle.js';
import BuscadorDeProductos from './BuscadorDeProductos.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>EJERCICIO 1</h1>
        <Contador />
        <h1>EJERCICIO 2</h1>
        <FormularioSimple />
        <h1>EJERCICIO 3</h1>
        <Toggle />
        <h1>EJERCICIO 4</h1>
        <ListaTareas />
        <h1>EJERCICIO 5</h1>
        <BuscadorDeProductos />
      </header>
    </div>
  );
}

export default App;
