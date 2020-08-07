import React, {useState} from "react"
import firebase from "../firebase"
import "./style.css"

const AggiungiPiatto =()=>{

    const [title, setTitle]= useState("")
    const [numero, setNumero]= useState("")
    const [nome, setNome]= useState("")
    
    function onSubmit(e){
        e.preventDefault()

        firebase.firestore().collection("piatti").add({nome: nome, title: title, numero: parseInt(numero)}).then(()=>{
            setTitle("")
            setNumero("")
            setNome("")
        })
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <h3>Aggiungi il piatto</h3>
            <div>
                <label>Il tuo Nome</label>
                <input type="text" value={nome} onChange={e => setNome(e.currentTarget.value)}></input> 
            </div>
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