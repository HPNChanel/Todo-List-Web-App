// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
            <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <TaskList />
        </div>
    );
}

export default App;
