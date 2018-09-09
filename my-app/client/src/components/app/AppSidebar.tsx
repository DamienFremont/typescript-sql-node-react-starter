import { faPlus, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Nav, NavLink } from 'reactstrap';

/**
 * @see https://reactstrap.github.io/components/navs/
 */
export default class AppSidebar extends React.Component {

  public render() {
    return (
      <div className="bg-light" style={{ minHeight: "100%" }}>
        <Nav vertical>
          <NavLink disabled href="#">
            <FontAwesomeIcon icon={faSearch} />{' '}
            Manage people
          </NavLink>
          <NavLink disabled href="#">
            <FontAwesomeIcon icon={faPlus} />{' '}
            Add new person
          </NavLink>
        </Nav>
        <hr />
        <Nav vertical>
          <NavLink disabled href="#">
            <FontAwesomeIcon icon={faQuestion} />{' '}
            Help
          </NavLink>
        </Nav>
      </div>
    );
  }
}