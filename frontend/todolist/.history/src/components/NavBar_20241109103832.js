// src/components/NavBar.js
import React from 'react';

function NavBar({ isDarkMode, toggleDarkMode }) {
    return (
        <div className={`p-4 flex items-center justify-between ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
            <div className="text-lg font-bold">Todo List App</div>
            <button
                onClick={toggleDarkMode}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default NavBar;
