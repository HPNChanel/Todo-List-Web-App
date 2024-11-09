import React, { useContext } from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskContext } from '../contexts/TaskContext'; // Đảm bảo TaskContext được import


function TaskItem({ task }) {
    const { removeTask } = useContext(TaskContext);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography>{task.description}</Typography>
                <Typography>Due Date: {task.due_date}</Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<EditIcon />} onClick={() => onEdit(task)}>Edit</Button>
                <Button startIcon={<DeleteIcon />} onClick={() => removeTask(task.id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}

export default TaskItem;
