import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
//import * as Scroll from 'react-scroll';
//import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link} from 'react-scroll'

// var Section = React.createClass({
//     componentDidMount: function() {

//         Events.scrollEvent.register('begin', function(to, elememt) {
//             console.log("begin", arguments);
//         })

//         Events.scrollEvent.register('end', function(to, element) {
//             console.log("end", arguments);
//         })

//         scrollSpy.update();
//     },

//     componentWillUnmount: function() {
//         Events.scrollEvent.remove('begin');
//         Events.scrollEvent.remove('end');
//     },

//     scrollToTop: function() {
//         scroll.scrollToTop();
//     },

//     scrollToBottom: function() {
//         scroll.scrollToBottom();
//     },

//     scrollTo: function() {
//         scroll.scrollTo(100);
//     },

//     scrollMore: function() {
//         scroll.scrollMore(100);
//     },

//     handleSetActive: function(to) {
//         console.log(to);
//     },
// })

import './Navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg='transparent' expand='sm' className='nav-container'>
                <Navbar.Toggle area-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
<<<<<<< HEAD
                        <NavLink className='d-inline p-2 text-white' to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='d-inline p-2 text-white' to='/#about-us' style={{ textDecoration: 'none' }}>About Us</NavLink>
                        <NavLink className='d-inline p-2 text-white' to='/shop' style={{ textDecoration: 'none' }}>Buy</NavLink>
                        <NavLink className='d-inline p-2 text-white' to='/#contact-us' style={{ textDecoration: 'none' }}>Contact Us</NavLink>
=======
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/#about-us' style={{ textDecoration: 'none' }}>About Us</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/shop' style={{ textDecoration: 'none' }}>Buy</NavLink>
                        <Link className='d-inline p-2 bg-dark text-white'
                            activeClass="active"
                            to="media"
                            spy={true}
                            smooth={true}
                            offset={-15}
                            duration= {500}
                        >Media</Link>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/#contact-us' style={{ textDecoration: 'none' }}>Contact Us</NavLink>
>>>>>>> upstream/media
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}