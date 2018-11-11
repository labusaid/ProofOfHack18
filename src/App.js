import React, { Component } from 'react';
import Home from './Components/Home';
import CrowdsourceSection from './Components/CrowdsourceSection/CrowdsourceSection.jsx';
import EnterpriseButton from "./Components/EnterpriseButton/EnterpriseButton.jsx";
import HomeButton from './Components/HomeButton/HomeButton.jsx';
import CrowdsourceButton from './Components/CrowdsourceButton/CrowdsourceButton.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-left">
              <Router>
                  <div>
                      <Route exact path="/" component={Landing} />
                      <Route path="/crowdsource" component={Crowdsource} />
                      <Route path="/enterprise" component={Enterprise} />
                  </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Landing(){
  return(
    <div>
      <h1 className="title is-1">| DataHash |</h1>
      <h1 className="subtitle is-4">Data Security and Monotezation</h1>
      <Link to="/crowdsource"><CrowdsourceButton/></Link>
      <Link to="/enterprise"><EnterpriseButton/></Link>
    </div>
  );
}

function Crowdsource(){
  return (
      <div>
        <Link to="/"><HomeButton/></Link>
        <CrowdsourceSection/>
      </div>
  );
}

function Enterprise(){
    return (
          <div>
            <Link to="/"><HomeButton/></Link>
            <Home /> 
            <Home /> 
            <Home /> 
            <Home /> 
            <Home />  
          </div>
    );
}

export default App;
