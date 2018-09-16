import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import logo from './logo.svg';

interface IAppMenuState {
    isOpen: boolean;
}

/**
 * @see https://reactstrap.github.io/components/navbar/
 */
export default class AppNavbar extends React.Component<any, IAppMenuState> {

    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    My-App
                    </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <div />
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