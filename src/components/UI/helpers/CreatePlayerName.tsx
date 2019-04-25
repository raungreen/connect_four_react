import React, { useState, useCallback } from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Modal,
  Form,
  Input
} from 'reactstrap';
import { render } from 'react-dom';

interface PlayerProps {
  id: string;
  player: string;
  createPlayer: string;
  updatePlayer: string;
  onClose(): boolean;
}

const CreatePlayerName: React.SFC = (id, player) => {
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const { name, email }: { name: string; email: string } = e.target;
    const values = {
      name: name,
      email: email
    };

    // player ? updatePlayer(id, values) : createPlayer(values);
    // onClose();
  }, []);

  return (
    <div>
      <Modal>
        <CardTitle id={player}>
          {id ? 'Edit Person' : 'Create Person'}
        </CardTitle>
        <Card>
          <Form onSubmit={handleSubmit}>
            <CardBody>
              <Input
                name="name"
                label="Name"
                defaultValue={player ? player.name : ''}
              />
              <Input
                name="email"
                label="Email"
                defaultValue={player ? player.email : ''}
              />
            </CardBody>
          </Form>
        </Card>
      </Modal>
    </div>
  );
};
export default CreatePlayerName;
