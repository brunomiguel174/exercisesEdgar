import React, {Component, Fragment} from "react";
import {hot} from "react-hot-loader";
import "./Styles/App.less"
import Router from './Components/Router';

class App extends Component{
  render(){
    return(
    <Fragment>
        <Router />
    </Fragment>
    );
  }
}

export default hot(module)(App);