import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Property<P> {
  initalValue: boolean;
}

interface State<S> {
  value: boolean;
}

class Settings extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          Settings
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} charCode="Y">
            UX settings
          </ModalHeader>
          <ModalBody>
            <ul>
              <li>
                The Connect Four game should use a 7 by 6 board that allows for
                two people to play against each other.
              </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Save
            </Button>{' '}
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Settings;
