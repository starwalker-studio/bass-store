import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Index from './components/Index';
import Metronome from './components/Metronome';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Index} path="/" exact />
          <Route component={Metronome} path="/metronome" exact /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
