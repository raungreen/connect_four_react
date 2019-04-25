import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import ConnectNavBar from './components/presentational/ConnectNavBar';
import Rules from './components/UI/helpers/Rules';
import Settings from './components/UI/helpers/Settings';
import Sidebar from './components/presentational/Sidebar';
import CreateBoard from './components/presentational/CreateBoard';
import './App.css';
import DataDisplay from './components/UI/helpers/DataDisplay';
import CreatePlayerName from './components/UI/helpers/CreatePlayerName';
import Modals from './components/UI/helpers/Modals';
import CreatedPlayer from './components/UI/helpers/CreatedPlayer';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <ConnectNavBar />
          <DataDisplay />
          <CreatedPlayer />
          <CreatePlayerName />
          {/* <Switch>
            <Route exact path="/" component={Settings} />
          </Switch> */}
        </Container>
      </Router>
    );
  }
}

export default App;
