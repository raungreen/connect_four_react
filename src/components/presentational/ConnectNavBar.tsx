import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rules from '../UI/helpers/Rules';
import Settings from '../UI/helpers/Settings';
// import RightModal from '../presentational/RightModal';

import {
  Container,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  // NavbarToggler,
  NavbarBrand
  // Nav,
  // NavItem,
  // NavLink
} from 'reactstrap';

class ConnectNavBar extends Component {
  // constructor(props: any) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }
  render() {
    return (
      <div>
        <Container>
          <Nav className="navbar ml-auto px-4">
            <Navbar color="faded" light>
              <NavbarBrand tag={Link} to="/" className="navbar-brand">
                <h2>
                  <i className="fab fa-angrycreative" /> connectFour
                </h2>
              </NavbarBrand>
            </Navbar>
            <NavItem>
              <NavLink tag={Rules} to="rules">
                Rules
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={RightModal} to="rules">
                Rules
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={Settings} to="settings">
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </div>
    );
  }
}

export default ConnectNavBar;
