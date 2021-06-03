import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import ParentForm from './components/ParentForm/ParentForm';
import HomePage from './HomePage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/register" exact component={ParentForm}></Route>
          <PrivateRoute path="/register" exact component={ParentForm}></PrivateRoute>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
