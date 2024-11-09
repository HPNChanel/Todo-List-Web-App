// src/components/TaskList.js
import React, { useState, useEffect, useContext } from 'react';
import { Container, Grid, Select, MenuItem } from '@mui/material';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
    const { tasks, fetchTasks } = useContext(TaskContext);
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        fetchTasks(categoryFilter);
    }, [categoryFilter, fetchTasks]);

    return (
        <Container>
            <h4>Todo List</h4>
            <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <MenuItem value="">All Tasks</MenuItem>
                <MenuItem value="MY_DAY">My Day</MenuItem>
                <MenuItem value="IMPORTANT">Important</MenuItem>
                <MenuItem value="PLANNED">Planned</MenuItem>
            </Select>
            <TaskForm />
            <Grid container spacing={2}>
                {tasks.map((task) => (
                    <Grid item xs={12} sm={6} md={4} key={task.id}>
                        <TaskItem task={task} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TaskList;
