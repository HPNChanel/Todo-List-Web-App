// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import { TaskProvider } from './contexts/TaskContext';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <TaskProvider>
            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
                    <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <TaskList />
                </div>
            </div>
        </TaskProvider>
    );
}

export default App;
