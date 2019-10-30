import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-custom">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">logo here</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#terminals">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills">Buy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
