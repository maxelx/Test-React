import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Saluti, {Saluti2} from "./components/Saluti";//doppio import
//import Fidelity from "./components/Fidelity";
//import Contatore from "./components/Contatore/Contatore"
import GestFidApp from "./components/GestFId/GestFidApp";



function App() {
  return (
    <div className="App">
      <GestFidApp></GestFidApp>
    </div>
  );
}

const Saluti3 = () => <h3>Ciao sono il tuo terzo componente</h3>;

/*
//stateless
function Saluti2(){
  return <h2>Ciao sono il tuo secondo componente</h2>
}
*/
export default App;
