import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login/login';
import './style.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path="/"><Login /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
