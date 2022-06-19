import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Navbar.js';
import Vote from './Vote';
import Create from './Create'
import Join from './Join';
import Home from './Home';

function App() {

  return (
    <>
    <Router>
    <div className='App'>
      <NavBar />
    <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/join">
          <Join />  
        </Route>
        <Route path="/vote">
          <Vote />  
        </Route>
      </Switch> 
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
