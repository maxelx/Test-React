import React, {Component} from "react";
import "./FooterComponent.css";

export default class FooterComponent extends Component{
    render () {
        return (
            <div className="FooterComponent">
                <footer class="footer text-xs-center">
                    <p class="text-muted">
                        <small>&copy; 2020 Mael Vena</small>
                    </p>
                    <p class="text-muted">
                        <a href="#"><small>Termini &amp; Condizioni</small></a>
                    </p>
                    <p class="text-muted">
                        <a href="#"><small>Chi siamo</small></a>
                    </p>
                    <p class="text-muted">
                        <a href="#"><small>I nostri Negozi</small></a>
                    </p>
                </footer>
            </div>
        )
    }
}