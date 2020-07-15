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

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pageContent">
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route path="/register"><Register /></Route>
            {/* <Route exact path="" component={} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
