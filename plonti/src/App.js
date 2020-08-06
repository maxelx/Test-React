import React from 'react';
import './App.css';
import firebase from "./firebase"
import ListaPiatti from "./components/listaPiatti"
import AggiungiPiatto from "./components/aggiungiPiatto"


/*firebase.firestore().collection("piatti").add({
  title:"Involtino primavera",
  numero: 32
})*/

function App() {
  return (
    <div className="App">
      <h1>Buongiolno siete plonti??</h1>
      <ListaPiatti/>
      <AggiungiPiatto></AggiungiPiatto>
    </div>
  );
}

export default App;
