import React from "react";

const cliente  = (props) => {
    return (
        <div>
            <p onClick={props.modifica}>{props.nome} - Bollini {props.bollini} - Ultima Spesa {props.data}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.modificaNome} value={props.nome}></input>
        </div>
        //js tra parentesi, props sono i parametri
        //modificaNome binding bidirezionale
        )
}

export default cliente;

