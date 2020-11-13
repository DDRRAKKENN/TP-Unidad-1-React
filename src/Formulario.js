import React, {Component} from "react";

class Formulario extends Component{
    render(){
        return(
        <div>
            <label >Nombre <input type="text" placeholder="Ingrese su Nombre" /> </label>
            <br>
            </br>
            <label>Apellidos <input type="text" placeholder="Ingrese su Apellido" /></label>
            <br> 
            </br>
            <label>Email <input type="email"  placeholder="Ingrese correo electronico" /></label>
        </div>)
    };
}
export default Formulario;