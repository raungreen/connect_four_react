import React, { Component, useCallback, useState } from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Modal,
  Form,
  Input
} from 'reactstrap';

const CreatedPlayer: React.FC = (id, player) => {
  const [state, setState] = useState();
  const [players, setPlayers] = useState({});

  // state = {
  player: [
    {
      id: 1,
      name: 'Steve Smith',
      create: false
    }
    //     {
    //       id: 2,
    //       name: 'Greg Gray',
    //       create: false
    //     },
    //     {
    //       id: 3,
    //       name: 'Amy Wood',
    //       create: false
    //     }
  ];
  // };
  const updatePlayer = () => {
    if (player === player) return setPlayers;
  };

  const createPlayer = () => {
    return setPlayers;
  };
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const { name, email }: { name: string; email: string } = e.target;
    const value = {
      name: name,
      email: email
    };

    player ? updatePlayer() : createPlayer();
  }, []);

  return (
    <div>
      <Modal>
        <CardTitle>{player ? 'Edit Person' : 'Create Person'}</CardTitle>
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
              {/* <CreatedPlayer player={setPlayers} /> */}
            </CardBody>
          </Form>
        </Card>
      </Modal>
    </div>
  );
};

export default CreatedPlayer;
