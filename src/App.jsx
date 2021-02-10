import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Index from './components/Index';
import Metronome from './components/Metronome';
import Warwick from './components/Warwick';
import Ibanez from './components/Ibanez';
import Epiphone from './components/Epiphone';
import BassStrings from './components/BassStrings';

function App() {
  
  return (
      
    <Router>
        <div>
          <Navbar />
          <Switch>
            <Route component={Index} path="/" exact />
            <Route component={Warwick} path="/warwick" exact />
            <Route component={Ibanez} path="/ibanez" exact />
            <Route component={Epiphone} path="/epiphone" exact />
            <Route component={BassStrings} path="/strings" exact />
            <Route component={Metronome} path="/metronome" exact />
          </Switch>
        </div>
      </Router>
    
  )
}

export default App;
