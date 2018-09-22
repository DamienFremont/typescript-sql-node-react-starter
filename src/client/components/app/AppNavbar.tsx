import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import App from '../../App';
import AppLocaleSelector from './AppLocaleSelector';


interface IAppNavbarState {
    isOpen: boolean;
}

interface IAppNavbarProps {
    logo: any;
}

/**
 * @see https://reactstrap.github.io/components/navbar/
 */
export default class AppNavbar extends React.Component<IAppNavbarProps, IAppNavbarState> {

    constructor(props: IAppNavbarProps) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        const logo = this.props.logo;
        const isOpen = this.state.isOpen;
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">
                    {logo ?
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        : null}
                    {intl.get('app.title')}
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <AppLocaleSelector locales={App.LOCALES} />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}