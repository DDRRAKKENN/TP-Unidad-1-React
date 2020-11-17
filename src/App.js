import './App.css';
import React, {Component} from "react";
import Formulario from "./Formulario"
import Validacion from "./Validacion"

//App principal que va renderizarse en index.js

class App extends Component{
  render(){
    return(
      <form>
        <Formulario/>
        <br/>
        <Validacion/>
      </form>
    )
  }
}

export default App;