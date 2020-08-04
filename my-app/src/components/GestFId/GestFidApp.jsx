import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WelcomeComponent from "./Welcome/Welcome";
import ClientiComponent from "./Clienti";
import LoginComponent from "./Login/LoginComponent";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import LogoutComponent from "./Logout/LogoutComponent";
import AuthRouter from "../AuthRoute";


export default class GestFidApp extends Component{
    render(){
        return (
            <div className="App">
                
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthRouter path="/welcome/:userid" component={WelcomeComponent}/>
                        <Route path="/" exact component={LoginComponent}/>
                        <AuthRouter path="/clienti" component ={ClientiComponent}/>
                        <Route path="/Logout" component ={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>Errore Pagina non trovata</div>
}

