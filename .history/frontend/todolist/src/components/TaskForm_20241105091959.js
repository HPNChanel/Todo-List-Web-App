// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { motion } from 'framer-motion';
import useTasks from '../hooks/useTasks';
import '../styles/TaskForm.css';

function TaskForm({ taskToEdit, clearTaskToEdit }) {
    const { addTask, editTask } = useTasks();
    const [title, setTitle] = useState(taskToEdit?.title || '');
    const [description, setDescription] = useState(taskToEdit?.description || '');
    const [priority, setPriority] = useState(taskToEdit?.priority || 1);
    const [dueDate, setDueDate] = useState(taskToEdit?.due_date || '');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setPriority(taskToEdit.priority);
            setDueDate(taskToEdit.due_date);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, priority, due_date: dueDate };
        if (taskToEdit) {
            editTask(taskToEdit.id, taskData);
            clearTaskToEdit();
        } else {
            addTask(taskData);
        }
        setTitle('');
        setDescription('');
        setPriority(1);
        setDueDate('');
    };

    return (
        <motion.div
            className="task-form"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ flex: 2 }}
                />
                <TextField
                    select
                    label="Priority"
                    variant="outlined"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    sx={{ width: 120 }}
                >
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                </TextField>
                <TextField
                    label="Due Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    sx={{ width: 160 }}
                />
                <Button type="submit" variant="contained" color="primary">
                    {taskToEdit ? "Update Task" : "Add Task"}
                </Button>
            </Box>
        </motion.div>
    );
}

export default TaskForm;
