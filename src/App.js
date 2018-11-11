import React, { Component } from 'react';
import Home from './Components/Home';
import CrowdsourceSection from './Components/CrowdsourceSection/CrowdsourceSection.jsx';
import EnterpriseButton from "./Components/EnterpriseButton/EnterpriseButton.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Router Navigation */}
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/crowdsource">Crowdsource</Link>
                <Link to="/enterprise"><EnterpriseButton/></Link>
                
                <hr />
                
                <Route exact path="/" component={Landing} />
                <Route path="/crowdsource" component={Crowdsource} />
                <Route path="/enterprise" component={Enterprise} />
            </div>
        </Router>
      </div>
    );
  }
}

function Landing(){
  return(
    <div>

    </div>
  );
}

function Crowdsource(){
  return (
      <div>
          <CrowdsourceSection/>
      </div>
  );
}

function Enterprise(){
    return (
          <div>
              <Home />
          </div>
    );
}

export default App;
