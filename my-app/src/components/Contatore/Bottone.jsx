import React from "react";
import "./Contatore.css";

const Bottone = (props) => {
    return (  
        <div className="Bottone">
            <button onClick={props.modifica}> + {props.valore} </button>
            <button onClick={props.modifica2}> - {props.valore} </button>
        </div>
        )
}

export default Bottone;