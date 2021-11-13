import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const {user, handleLogout} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="my-3">
        <Navbar.Brand as={NavLink} to="/">Simpler</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} exact to="/products">Products</Nav.Link>
            {
                user.email ?
                <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/dashboard">Dashboard</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                   
                </NavDropdown>

                :
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

            }
            </Nav>
           
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navigation;