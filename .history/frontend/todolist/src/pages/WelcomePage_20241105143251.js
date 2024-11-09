// src/pages/WelcomePage.js
import React from 'react';
import '../styles/WelcomePage.css';

const WelcomePage = () => (
    <div className="welcome-page text-center">
        <h1>Welcome to Todo List App</h1>
        <p>Manage your tasks effectively and stay organized.</p>
        <button className="btn btn-primary mt-3">
            Get Started
        </button>
    </div>
);

export default WelcomePage;
