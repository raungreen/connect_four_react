import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from 'reactstrap';
import FormGroup from 'reactstrap/lib/FormGroup';

interface Property<P> {
  initalValue: string;
}

interface State<S> {
  value: boolean;
}

class Rules extends Component<any, any> {
  // function Rules<P, S>(): any {
  // const [modal, setModal] = useState();
  // const [nestedModal, setNestedModal] = useState();
  // const [closeAll, setCloseAll] = useState<boolean>(false);
  // public state;

  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle = () => {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  };

  toggleNested = () => {
    this.setState({ nestedModal: !this.state.nestedModal });
    closeAll: false;
  };

  toggleAll = () => {
    this.setState({ nestedModal: !this.state.nestedModal });
    closeAll: true;
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Rules of play
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Rules gameplay</ModalHeader>
          <ModalBody>
            <ul>
              <li>
                The Connect Four game should use a 7 by 6 board that allows for
                two people to play against each other.
              </li>
            </ul>
            <br />
            <Button color="success" onClick={this.toggleNested}>
              Create Players
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>Player Name</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="player1" sm={1}>
                    P1:
                  </Label>{' '}
                  <input type="text" placeholder="Player-1 name" />
                  <Label for="player1" sm={1}>
                    P2:
                  </Label>{' '}
                  <input type="text" placeholder="Player-2 name" />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={this.toggleNested}>
                  Create
                </Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Let's Play
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Rules;
