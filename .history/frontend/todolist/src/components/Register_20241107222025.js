// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import NavBar from './NavBar';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <>
            <NavBar />
            <div className="auth-container">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </>
    );
}

export default Register;
