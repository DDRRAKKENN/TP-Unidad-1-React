import './App.css';
import React, {Component} from "react";
import Formulario from "./Formulario"
import Validacion from "./Validacion"

//App principal que va renderizarse en index.js

class App extends Component{
  render(){
    return(
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
    )
  }
}

export default App;
