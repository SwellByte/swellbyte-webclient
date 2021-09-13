import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Landing} from "./Views/Landing/Landing";
import {Nav} from "./Views/Nav/Nav";
import {Regions} from "./Views/Regions/Regions";

function App() {
  return (
    <Router>
      <Nav/>
      <Route path="/" component={Landing}/>
      <Route path="/regions" component={Regions}/>
    </Router>
  );
}

export default App;
