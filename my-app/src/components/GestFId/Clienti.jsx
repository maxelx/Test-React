import React, { Component } from 'react';
import './Clienti/Clienti.css';

export default class ClientiComponent extends Component {

    state = {
        clienti: [
            {codfid: '67301894', nome: 'Nicola La Rocca', indirizzo: 'Via dei Mille, 52', comune: 'Alghero', bollini: '1580', data: '02/01/2020'},
            {codfid: '67100671', nome: 'Adelina Bianchi', indirizzo: 'P.zza Garibaldi, 3', comune: 'Sassari', bollini: '240', data: '06/01/2020'},
            {codfid: '67100421', nome: 'Massimo Frigerio', indirizzo: 'Via XX Settembre, 8', comune: 'Fertialia', bollini: '380', data: '09/12/2019'},
            {codfid: '67100426', nome: 'Giavanna Falchi', indirizzo: 'Via Cavour, 11', comune: 'Alghero', bollini: '2140', data: '15/01/2020'},
        ] 
    }    

    render() {
        return ( 
            <section className="container">
                
                <div className="table-wrapper"> 
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-5">
                            <h2>Risultati Ricerca: <small>Trovati 0 Clienti</small></h2>
                            </div>
                            <div className="col-sm-7">	
                                <button style={{'marginleft':'20px'}} className="btn btn-success float-right">
                                    <i className="fa fa-plus"></i> Nuovo Cliente
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="table-filter">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="show-entries">
                                <span>Mostra</span>
                                <select className="form-control">
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                                <span>righe</span>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                <div className="filter-group">
                                    <label>Filtro: </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <table id="clienti" className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>CodFid</th>
                                <th>Nominativo</th>
                                <th>Indirizzo</th>
                                <th>Comune</th>
                                <th>Telefono</th>
                                <th>Bollini</th>
                                <th>Ultima Spesa</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                this.state.clienti.map (
                                    (cliente, index) => 
                                    <tr key={cliente.codfid}>
                                        <td>{cliente.codfid}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.indirizzo}</td>
                                        <td>{cliente.comune}</td>
                                        <td></td>
                                        <td>{cliente.bollini}</td>
                                        <td>{cliente.data}</td>
                                        <td>
                                            <button className="btn btn-warning table-buttons">
                                                <i className="fa fa-edit" aria-hidden="true"></i> Modifica
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning table-buttons" onClick={()=>this.Elimina(index)}>
                                                <i className="fa fa-minus" aria-hidden="true"></i> Elimina
                                            </button>
                                        </td>
                                    </tr>
                                )
                            } 
                            </tbody>
                    </table>
                </div>
            </section>
        )
    }

    Elimina = (indexCliente)=>{
        console.log("Elimina indice:" + indexCliente);

        const NewClienti = [...this.state.clienti]
        NewClienti.splice(indexCliente, 1);
        this.setState({clienti: NewClienti});
    }
}

