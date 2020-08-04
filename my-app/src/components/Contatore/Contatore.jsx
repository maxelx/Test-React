import React, {Component} from "react";
import "./Contatore.css"
import Bottone from "./Bottone";

class contatore extends Component {
    state={
        contatore :0,
    }

    render (){
        return(
            <div className="Contatore">
                <Bottone modifica={this.incrementa.bind(this, 1)} modifica2={this.decrementa.bind(this, 1)} valore={1}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 3)} modifica2={this.decrementa.bind(this, 3)} valore={3}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 5)} modifica2={this.decrementa.bind(this, 5)} valore={5}></Bottone>
                <span className="valore">{this.state.contatore}</span>
                <div>
                <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

    reset = () => {
        this.setState(
            (prevState) => {
                return {contatore : 0}
            }
        )
    }

    incrementa = (valore) => {
        console.log("incrementa");

        this.setState (
            (prevState)=> 
            {
                return {contatore : prevState.contatore + valore}
            }
        )
    }

    decrementa = (valore) => {
        console.log("decrementa");
        
        this.setState (
            (prevState)=> 
            {
                return {contatore : prevState.contatore - valore}
            }
        )
    }



}
export default contatore;

