import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
const Menu=()=>{
    return (
        <Navbar expand="lg" className="navbar">
            <Container className='nav-container'>
                    <Navbar.Brand as={NavLink} to='/' className="justify-content-start">Fredrik Halvarsson</Navbar.Brand>
                <div className="vr" style={{color: '#e2ab74'}}/>
                <div className='p-2 ms-auto'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburger'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link as={NavLink} to='/' className="navLink">Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/About' className="navLink">About</Nav.Link>
                        <Nav.Link as={NavLink} to='/CV' className="navLink">CV</Nav.Link>
                        <Nav.Link as={NavLink} to='/Portfolio' className="navLink">Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to='/Contact' className="navLink">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>                                   
    );
};
export default Menu;