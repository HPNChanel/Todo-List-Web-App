// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Workspace from './components/Workspace';
import TaskList from './components/TaskList';
import { TaskProvider } from './contexts/TaskContext';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <TaskProvider>
            <Router>
                <ToastContainer position="top-right" autoClose={3000} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${isDarkMode ? 'dark' : ''}`}
                >
                    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
                        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        <Switch>
                            <Route path="/workspace" component={Workspace} />
                            <Route exact path="/" component={TaskList} />
                        </Switch>
                    </div>
                </motion.div>
            </Router>
        </TaskProvider>
    );
}

export default App;
