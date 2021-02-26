import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { auth } from './firebase';

import Index from './components/Index';
import Metronome from './components/Metronome';
import Warwick from './components/Warwick';
import Ibanez from './components/Ibanez';
import Epiphone from './components/Epiphone';
import BassStrings from './components/BassStrings';
import PdfBassTabs from './components/PdfBassTabs';
import Cart from './components/Cart';

function App() {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    const fecthUser = () => {
      auth.onAuthStateChanged(user => localStorage.getItem(user.uid) && (setFirebaseUser(true)));
    }
    fecthUser();
  }, []);

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (firebaseUser) {
      return <Route component={component} path={path} {...rest} />
    } else {
      return <Redirect to="/" {...rest} />
    }
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route component={Index} path="/" exact />
          <Route component={Warwick} path="/warwick" exact />
          <Route component={Ibanez} path="/ibanez" exact />
          <Route component={Epiphone} path="/epiphone" exact />
          <Route component={BassStrings} path="/strings" exact />
          <Route component={Metronome} path="/metronome" exact />
          <Route component={PdfBassTabs} path="/basstabs" exact />
          <PrivateRoute component={Cart} path="/usercart" exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
