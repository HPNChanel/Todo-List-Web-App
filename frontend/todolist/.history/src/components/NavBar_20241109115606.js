// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar({ isDarkMode, toggleDarkMode }) {
    return (
        <div className={`nav-bar ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
            <div className="nav-title">Todo List App</div>
            <div className="nav-links">
                <NavLink to="/" exact activeClassName="active" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/workspace/my-tasks" activeClassName="active" className="nav-link">
                    My Tasks
                </NavLink>
                <NavLink to="/workspace/important" activeClassName="active" className="nav-link">
                    Important
                </NavLink>
                <NavLink to="/workspace/completed" activeClassName="active" className="nav-link">
                    Completed
                </NavLink>
            </div>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default NavBar;
