import React, {useState, useEffect} from "react"
import firebase from "../firebase"


function usePiatti(){
    const [piatti, setPiatti]= useState([])
    useEffect(()=>{

        const unsubscribe = firebase
        .firestore()
        .collection("piatti")
        .onSnapshot((snapshot)=>{
            const newPiatto = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setPiatti(newPiatto)
        })
        return ()=> unsubscribe()// permette di chiudere la socket dopo che è stata fatta la richiesta
    },[])
    return piatti
}

function elimina(id){
    firebase.firestore().collection("piatti").doc(id).delete().then(function (){
        console.log("Documento eliminato");
    }).catch(function(error){
        console.error("Errore rimuovendo l'errore", error);
    });
}

const ListaPiatti =()=>{

    const piatti = usePiatti()

    return(
        <div>
            <h2>Lista piatti</h2>
            <div>
                <label>Ordina per</label>
                <select>
                    <option>Nome piatto dall'alto</option>
                    <option>Nome piatto dal basso</option>
                    <option disabled>-----</option>
                    <option>Numero piatto dall'altro</option>
                    <option>Numero piatto dal basso</option>
                </select>
            </div>
            <ol>
                {piatti.map((piatto)=>
                    <li key={piatto.id}>
                        <div className="piatto">
                            <h3>Ordinato da : {piatto.nome}</h3>
                            <h3>Nome piatto {piatto.title}</h3>
                            <code className="codicePiatto">Codice piatto : {piatto.numero}</code>
                            <button onClick={()=> elimina(piatto.id)}>Piatto Arrivato</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ListaPiatti