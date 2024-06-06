import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router basename="/content-management-dashboard">
      <CssBaseline />
      <Container>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
