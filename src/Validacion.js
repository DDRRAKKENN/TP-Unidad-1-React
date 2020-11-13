import React, {Component} from "react";

class Validacion extends Component{
    render(){
        return(
        <div>
            <label >Constraseña <input type="password" /> </label>
            <br></br>
            <label >Repita constraseña <input type="password" /> </label>
            <br></br>
            <button onClick="submit">Confirmar</button>
        </div>)
                 
    };
}

export default Validacion;