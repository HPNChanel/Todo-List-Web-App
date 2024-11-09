// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import ContactUs from './components/ContactUs';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NotFound from './pages/NotFound';

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
                <Router>
                    <NavBar />
                    <Container>
                        <Routes>
                            <Route path="/" element={<TaskList />} />
                            <Route path="/welcome" element={<WelcomePage />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Container>
                </Router>
            </TaskProvider>
        </ThemeProvider>
    );
}

export default App;
