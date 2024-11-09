import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import { TaskProvider } from './contexts/TaskContext';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <TaskProvider>
            <ToastContainer position="top-right" autoClose={3000} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${isDarkMode ? 'dark' : ''}`}
            >
                <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
                    <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <TaskList />
                </div>
            </motion.div>
        </TaskProvider>
    );
}

export default App;
