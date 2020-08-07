import React from "react"

const ListaFast= (props)=>{
    return(
        <div>
            {props.piatti.nome}
            {console.log("ordinato da :", props.piatti.nome)}
        </div>
    )
}

export default ListaFast