import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Index from './components/Index';
import Metronome from './components/Metronome';
import Warwick from './components/Warwick';
import Ibanez from './components/Ibanez';
import Epiphone from './components/Epiphone';
import BassStrings from './components/BassStrings';
import PdfBassTabs from './components/PdfBassTabs';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {

  const active = useSelector(store => store.googleUser.active);

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (active) {
      return <Route component={component} path={path} {...rest} />
    } else {
      return <Redirect to="/bass-store" {...rest} />
    }
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route component={Index} path="/bass-store" exact />
          <Route component={Warwick} path="/warwick" exact />
          <Route component={Ibanez} path="/ibanez" exact />
          <Route component={Epiphone} path="/epiphone" exact />
          <Route component={BassStrings} path="/strings" exact />
          <Route component={Metronome} path="/metronome" exact />
          <Route component={PdfBassTabs} path="/basstabs" exact />
          <PrivateRoute component={Cart} path="/usercart" exact />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;
