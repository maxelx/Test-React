import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class WelcomeComponent extends Component{
    render(){
        return(
            <div className="WelcomeComponent">
                <section class="section-content bg padding-y">
                    <header class="section-heading">
                        <h2 class="section-title">Benvenuto in GestFid</h2>
                    </header>
                    <p>Ciao {this.props.match.params.userid}, clicca <Link to="/clienti">qui</Link> per vedere i clienti disponibili</p>

                </section>
            </div>

        )
    }
}