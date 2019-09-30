import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class SignedOutNavbar extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-light bg-light" expand="md">
                    <NavbarBrand className="" href="/">ProjectManagerApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/login" className="btn border border-dark rounded-pill text-dark ml-1 mr-1 mt-1 mb-1">Log In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/signup" className="btn border border-dark rounded-pill text-dark ml-1 mr-1 mt-1 mb-1">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default SignedOutNavbar;
