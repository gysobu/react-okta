import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layOut/Navbar'
import Home from './components/pages/Home'
import staff from './components/pages/Staff'
class App extends Component {
  render() {
    return (
      <Router>
      <div> 
      <Navbar/>
      <div className="container"> 
      <Route path="/" exact={true} component={Home}/>
      <Route path="/staff" exact={true} component={staff}/>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
