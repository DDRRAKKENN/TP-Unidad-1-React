import './App.css';
import Formulario from "./Formulario"
import Validacion from "./Validacion"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Trabajo practico numero 1
        </p>
        <p>
        <Formulario/>
        <Validacion/>
        </p>
      </header>
    </div>
  );
}

export default App;
