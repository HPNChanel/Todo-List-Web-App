// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: { main: '#1976d2' },
            secondary: { main: '#dc004e' },
        },
    });

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <ThemeProvider theme={theme}>
            <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <TaskList />
        </ThemeProvider>
    );
}

export default App;
