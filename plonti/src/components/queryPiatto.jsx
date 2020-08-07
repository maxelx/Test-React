import React, {useState}  from "react"
import firebase from "../firebase"
import ListaFast from "./listaFast"


const QueryPiatto = ()=> {

    const [nome, setNome]= useState("")//nome del piatto per sapere chi lo ha ordinato
    const [nomiUtenti, setNomiUtenti]= useState("");//array inizializzato vuoto che conterrà i nomi di chi ha ordinato il piatto

    function onSubmit(e){
        e.preventDefault()
        
        firebase.firestore().collection("piatti").where("numero", "==", parseInt(nome)).get().then((querySnapshot)=>{//la query
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "=>", doc.data());
                console.log(doc.data().title)
                setNomiUtenti(doc.data());//variabile che mi serve per passare i valori a listaFast come props
            });
            setNome("");
            //setNomiUtenti("");
        }).catch((error)=>{
            console.log("error : ", error);
        })
    }

    return (
        <div>
            <h2>Chi ha oldinato questo piatto?</h2>
            <form onSubmit={onSubmit}>
            <div>
                <label>Numero Piatto</label>
                <input type="text" value={nome} onChange={e => setNome(e.currentTarget.value)}></input> 
            </div>
            <button>Invia</button>
            </form>
            <ListaFast piatti={nomiUtenti}></ListaFast>
        </div>
    )
}
export default QueryPiatto;