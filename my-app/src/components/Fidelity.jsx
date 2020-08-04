import React, {Component} from "react";
import Cliente from "./Clienti";

export default class Fidelity extends Component{

    constructor (props){
        super (props)

        this.state = {
            clienti : [
                {nome : "Mael vena", bollini:"1500", data:"02/01/2020"},
                {nome : "Mauro vena", bollini:"500", data:"03/02/2020"},
                {nome : "Pablo vena", bollini:"1200", data:"04/03/2020"},
                {nome : "Pilar Blasco", bollini:"200", data:"05/04/2020"},
            ]
        }
        console.log("CONSTRUCTOR");

    }



    modificaDati =(Bollini)=> {
        console.log("Ciao");

        this.setState(
             {
                clienti : [
                    {nome : "Mael vena", bollini: Bollini, data:"12/01/2020"},
                    {nome : "Mauro vena", bollini:"1500", data:"13/02/2020"},
                    {nome : "Pablo vena", bollini:"2200", data:"14/03/2020"},
                    {nome : "Pilar Blasco", bollini:"1200", data:"15/04/2020"},
                ]
            }
        )
    }

    modificaDati2 = (event)=>{
        this.setState(
            {
               clienti : [
                   {nome : "Mael vena", bollini: "1400", data:"12/01/2020"},
                   {nome : event.target.value, bollini:"1500", data:"13/02/2020"},
                   {nome : "Pablo vena", bollini:"2200", data:"14/03/2020"},
                   {nome : "Pilar Blasco", bollini:"1200", data:"15/04/2020"},
               ]
           }
       )
    }

    componentDidMount(){//prima di assemblare i componenti
        console.log("Avviato mount()");
    }

    componentWillUnmount(){//quando si chiude il componente
        console.log("Avviato unmount()");
    }

    componentWillMount(){//non più utilizzato
        console.log("avviato mount will");
    }


    render (){

        console.log("Avviato metodo render()");

        return (
            <div>
                 <Cliente modifica={this.modificaDati.bind(this, "1000")} nome ={this.state.clienti[0].nome} bollini={this.state.clienti[0].bollini} data={this.state.clienti[0].data}></Cliente>
                 <Cliente modificaNome={this.modificaDati2}  nome ={this.state.clienti[1].nome} bollini={this.state.clienti[1].bollini} data={this.state.clienti[1].data}></Cliente>
                 <Cliente  nome ={this.state.clienti[2].nome} bollini={this.state.clienti[2].bollini} data={this.state.clienti[2].data}></Cliente>
                 <button onClick={this.modificaDati.bind(this, "2000")}>Modifica</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("Avviato Metodo DidMount");
    }

}