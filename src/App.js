import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './views/Home.js'
import User from './views/User.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
