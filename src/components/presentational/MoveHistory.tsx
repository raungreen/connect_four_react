import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const MoveHistory = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Move History</CardTitle>
          <CardText>1:A1</CardText>
          <CardText>2:B1</CardText>
        </CardBody>

        <CardBody>
          <CardTitle>Winning Plays</CardTitle>
          <CardText>2:B1</CardText>
          <CardText>4:C2</CardText>
          <CardText>6:D3</CardText>
          <CardText>8:E4</CardText>

          <CardLink href="#">New Game</CardLink>
          <CardLink href="#">Settings</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default MoveHistory;
