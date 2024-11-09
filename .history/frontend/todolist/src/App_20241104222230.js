// src/App.js
import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TaskProvider>
                <Container>
                    <h1>Todo List Application</h1>
                    <TaskList />
                </Container>
            </TaskProvider>
        </ThemeProvider>
    );
}

export default App;
