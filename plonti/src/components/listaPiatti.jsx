import React, {useState, useEffect} from "react"
import firebase from "../firebase"


function usePiatti(){
    const [piatti, setPiatti]= useState([])
    useEffect(()=>{
        firebase
        .firestore()
        .collection("piatti")
        .onSnapshot((snapshot)=>{
            const newPiatto = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setPiatti(newPiatto)
        })
    },[])
    return piatti
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
                            <h3>{piatto.title}</h3>
                            <code className="codicePiatto">{piatto.numero}</code>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ListaPiatti