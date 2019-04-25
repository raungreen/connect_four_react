import React from 'react';
import {
  UncontrolledCollapse,
  Button,
  Label,
  CardBody,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import Input from 'reactstrap/lib/Input';

const UserInfo = () => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Game Stats
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <CardText>Red:{}</CardText>
          <CardText>Yellow:{}</CardText>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default UserInfo;
