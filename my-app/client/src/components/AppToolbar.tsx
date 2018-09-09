import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

interface IAppMenuState {
    isOpen: boolean;
}

export default class AppToolbar extends React.Component<any, IAppMenuState> {

    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        My-App
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <div />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}