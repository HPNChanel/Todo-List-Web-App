// src/components/TaskList.js
import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import useTasks from '../hooks/useTasks';
import '../styles/TaskList.css';

function TaskList() {
    const { tasks } = useTasks();
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearTaskToEdit = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="task-list">
            <Typography variant="h4" gutterBottom>Todo List</Typography>
            <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={clearTaskToEdit} />
            <Grid container spacing={2} className="task-grid">
                {tasks.map((task) => (
                    <Grid item xs={12} sm={6} md={4} key={task.id}>
                        <TaskItem task={task} onEdit={handleEdit} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default TaskList;
