import React from 'react';
import './navbar.css';

const NavBar = () => (
    <div className="navbar-container">
        <span className="logo">LOGO!</span>
        <nav className="top-nav">
            <ul>
                <li>
                    <a href="#">Nav element</a>
                </li>
                <li>
                    <a href="#">Nav element</a>
                </li>
                <li>
                    <a href="#">Nav element</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default NavBar;
