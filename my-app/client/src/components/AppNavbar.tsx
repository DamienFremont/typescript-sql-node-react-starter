import * as React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class AppNavbar extends React.Component {

  public render() {
    return (
      <div>
        <Nav vertical>
          <NavLink disabled href="#">
            Manage people
          </NavLink> 
          <NavLink href="#">
            Add new person
          </NavLink> 
        </Nav>
        <hr />
        <Nav vertical>
          <NavLink href="#">
            Help
          </NavLink> 
        </Nav>
      </div>
    );
  }
}