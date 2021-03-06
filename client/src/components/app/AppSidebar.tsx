import { faInfo, faPlus, faQuestion, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Nav, NavLink } from 'reactstrap';

interface AppSidebarProps {
  className: string;
}

/**
 * @see https://reactstrap.github.io/components/navs/
 * @see https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
 */
class AppSidebar extends React.Component<AppSidebarProps, any> {

  constructor(props: AppSidebarProps) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  public componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  public render() {
    return (
      <div className={"bg-light " + this.props.className}>
        <div>&nbsp;</div>
        <Nav vertical>
          {this.renderNavLink("nav.productSearch", faSearch, "/product/search")}
          {this.renderNavLink("nav.productCreate", faPlus, "/product/create")}
        </Nav>
        <hr />
        <Nav vertical>
          {this.renderNavLink("nav.help", faQuestion, "/help")}
          {this.renderNavLink("nav.about", faInfo, "/help/about")}
        </Nav>
        <div>&nbsp;</div>
      </div>
    );
  }

  private renderNavLink(messageId: string, icon: IconDefinition, href: string) {
    const { width } = this.state;
    const isMobile = width <= 776;
    return (
      <NavLink tag={Link} to={href} >
        <FontAwesomeIcon icon={icon} fixedWidth />{' '}
        <span hidden={isMobile}>
          {intl.get(messageId)}
        </span>
      </NavLink>
    );
  }

  private handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
}
export default AppSidebar;