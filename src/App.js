import React from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Info from './components/Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact strict component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/info" exact component={Info} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
