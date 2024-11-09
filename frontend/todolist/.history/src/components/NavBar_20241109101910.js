// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({ isDarkMode, toggleDarkMode }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Todo List App
                </Typography>
                <Switch checked={isDarkMode} onChange={toggleDarkMode} />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
