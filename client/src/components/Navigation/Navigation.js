import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg='dark' expand='sm'>
                <Navbar.Toggle area-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/'>Home</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/#about-us'>About Us</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/shop'>Buy</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/#contact-us'>Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}