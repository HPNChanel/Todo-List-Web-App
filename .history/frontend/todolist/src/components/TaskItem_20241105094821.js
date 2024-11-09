// src/components/TaskItem.js
import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useTasks from '../hooks/useTasks';
import '../styles/TaskItem.css';

function TaskItem({ task, onEdit }) {
    const { removeTask } = useTasks();

    return (
        <motion.div
            className="task-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="div">
                    {task.title}
                </Typography>
                <Typography className="task-info" variant="body2" color="textSecondary">
                    {task.description}
                </Typography>
                <Typography variant="body2">Priority: {task.priority}</Typography>
                <Typography variant="body2">Due Date: {task.due_date}</Typography>
                <Box className="task-actions">
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<FaEdit />}
                        onClick={() => onEdit(task)}
                        className="edit"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<FaTrashAlt />}
                        onClick={() => removeTask(task.id)}
                        className="delete"
                    >
                        Delete
                    </Button>
                </Box>
            </Paper>
        </motion.div>
    );
}

export default TaskItem;
