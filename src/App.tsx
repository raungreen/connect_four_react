import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import ConnectNavBar from './components/presentational/ConnectNavBar';
import Rules from './components/UI/helpers/Rules';
import Settings from './components/UI/helpers/Settings';
import Sidebar from './components/presentational/Sidebar';
import CreateBoard from './components/presentational/CreateBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <ConnectNavBar />
          <CreateBoard />
          {/* <Sidebar /> */}
          {/* <Switch>
            <Route exact path="/" component={Settings} />
          </Switch> */}
        </Container>
      </Router>
    );
  }
}

export default App;
