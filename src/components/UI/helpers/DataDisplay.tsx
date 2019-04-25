import React from 'react';
import { Row, Col } from 'reactstrap';
import CreateBoard from '../../presentational/CreateBoard';
import Sidebar from '../../presentational/Sidebar';
import Modals from './Modals';

const DataDisplay = () => {
  return (
    <div>
      <Row className="row">
        <Col md={9}>
          <CreateBoard />
        </Col>
        <br />
        <Col sm={3}>
          <Sidebar />
        </Col>
      </Row>
      <br />
      <Row className="row">
        <Col>
          <Modals />
        </Col>
      </Row>
    </div>
  );
};

export default DataDisplay;
