// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import ContactUs from './components/ContactUs';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token'); // Clear token on logout
    };

    return (
        <TaskProvider>
            <Router>
                {/* Ensure NavBar is here */}
                <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <div className="container my-4">
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </TaskProvider>
    );
}

export default App;
