import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router basename="/content-management-dashboard">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
