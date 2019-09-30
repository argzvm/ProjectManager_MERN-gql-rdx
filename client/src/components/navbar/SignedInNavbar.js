import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class SignedInNavbar extends React.Component {
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
                {/* <Navbar color="light" light expand="md"> */}
                <Navbar className="navbar navbar-dark bg-dark" expand="md">
                    <NavbarBrand href="/app">ProjectManagerApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/app/projects/create" className="btn border border-light rounded-pill text-white ml-1 mr-1 mt-1 mb-1">Create</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/projects/list" className="btn border border-light rounded-pill text-white ml-1 mr-1 mt-1 mb-1">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/logout" className="btn border border-light rounded-pill text-white ml-1 mr-1 mt-1 mb-1">Log Out</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/users/user" className="btn border border-light rounded-circle text-white ml-1 mr-1 mt-1 mb-1">ME</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default SignedInNavbar;
