import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import DataDisplay from '../UI/helpers/DataDisplay';
import PlayerInfo from './PlayerInfo';
import MoveHistory from './MoveHistory';

const Sidebar = () => {
  return (
    <div className="">
      <PlayerInfo />
      <MoveHistory />
    </div>
  );
};

export default Sidebar;
