import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Navbar.js';
import Vote from './Vote';

function App() {

  return (
    <>
    <Router>
    <div className='App'>
      <NavBar></NavBar>
    <div className='content'>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to FeedBack</h1>
        </Route>
        <Route path="/vote">
          <Vote />  
        </Route>
        <Vote />
      </Switch> 
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
