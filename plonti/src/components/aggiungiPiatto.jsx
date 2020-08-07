import React, {useState} from "react"
import firebase from "../firebase"

const AggiungiPiatto =()=>{

    const [title, setTitle]= useState("")
    const [numero, setNumero]= useState("")
    
    function onSubmit(e){
        e.preventDefault()
        
        firebase.firestore().collection("piatti").add({title: title, numero: parseInt(numero)}).then(()=>{
            setTitle("")
            setNumero("")
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Aggiungi il piatto</h3>
            <div>
                <label>Nome Piatto</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}></input> 
            </div>
            <div>
                <label>Numero piatto</label>
                <input type="number" value={numero} onChange={e => setNumero(e.currentTarget.value)}></input> 
            </div>
            <button>Aggiungi il piatto</button>
        </form>
    )
}

export default AggiungiPiatto