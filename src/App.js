import Home from "./components/Home";
import About from './components/About';
import Login from './components/Login';
import SignupForm from './components/SignupForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mac's Travel Itenearies</h1>
          <p>Map out your perfect getaway with this awesome itenerary builder</p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupForm handleReload={handleReload} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
