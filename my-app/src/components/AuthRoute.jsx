import React, {Component} from "react";
import AuthenticationService from "../components/GestFId/Services/authservice";
import {Redirect, Route} from "react-router-dom";

export default class AuthRouter extends Component{
    render(){
        if (AuthenticationService.isLogged()){
            return <Route {...this.props}></Route>
        }
        else {
            return <Redirect to ="/login"/>
        }
    }
}