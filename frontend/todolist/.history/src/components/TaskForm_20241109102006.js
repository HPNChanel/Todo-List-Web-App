// src/components/TaskForm.js
import React, { useState, useContext } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm({ open, handleClose }) {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        addTask({ title, description });
        handleClose();
        setTitle('');
        setDescription('');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskForm;
