// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
    <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
);

export default NavBar;
