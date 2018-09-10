import { faPlus, faQuestion, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Nav, NavLink } from 'reactstrap';

interface IAppSidebarProps {
  className: string;
}

/**
 * @see https://reactstrap.github.io/components/navs/
 * @see https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
 */
export default class AppSidebar extends React.Component<IAppSidebarProps, any> {

  constructor(props: IAppSidebarProps) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  public componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  public render() {
    return (
      <div className={"bg-light " + this.props.className}>
        <Nav vertical>
          {this.renderNavLink("Manage people", faSearch, "#")}
          {this.renderNavLink("Add new person", faPlus, "#")}
        </Nav>
        <hr />
        <Nav vertical>
          {this.renderNavLink("Help", faQuestion, "#")}
        </Nav>
      </div>
    );
  }

  private renderNavLink(label: string, icon: IconDefinition, href: string) {
    const { width } = this.state;
    const isMobile = width <= 776;
    return (
      <NavLink disabled href={href}>
        <FontAwesomeIcon icon={icon} />{' '}
        <span hidden={isMobile}>{label}</span>
      </NavLink>
    );
  }

  private handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
}