import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from './pages/Login/login';
import './style.css';
import Header from './components/Header';
import Register from './pages/Register';
import ToDo from './pages/ToDo';

function App() {

  return (
    <div className="App" >
      <Router>
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <PrivateRoute exact path="/todo" component={ToDo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
