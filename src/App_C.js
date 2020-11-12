import React, {Component} from "react";

class App_C extends Component{
    render(){
        return(
        <div>
            <label>Nombre </label>
            <input type="text" placeholder="Ingrese su Nombre" />
            <br>

            </br>
            <label>Apellidos</label>
            <input type="text" placeholder="Ingrese su Apellido" />
            <br>
                
            </br>
            <label>Email </label>
            <input type="email"  placeholder="Ingrese correo electronico" required oninvalid="setCustomValidity('El campo DNI es obligatorio')" />
        </div>)
                 
    };
}

export default App_C;