import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Index />
      </div>
    </Router>
  );
}

export default App;
