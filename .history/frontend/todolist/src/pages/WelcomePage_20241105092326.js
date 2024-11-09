// src/pages/WelcomePage.js
import React from 'react';
import { Button } from '@mui/material';
import '../styles/WelcomePage.css';

const WelcomePage = () => (
    <div className="welcome-page">
        <h1>Welcome to Todo List App</h1>
        <p>Manage your tasks effectively and stay organized.</p>
        <Button variant="contained" className="get-started-btn" color="primary">
            Get Started
        </Button>
    </div>
);

export default WelcomePage;
