import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarComponent from '../NavBarComponent';
import Layout from '../Layout';
import ImagesUi from '../ImagesUi';

class App extends Component {
 
 
  render() {
    return (
      <Router>
        <NavBarComponent />
        <Switch>
          <Route exact path="/" component={Layout}></Route>
          <Route exact path="/images" component={ImagesUi}></Route>
        </Switch>
      </Router>
     
    );
  }
}

export default App;
