// src/components/EditTaskPopup.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/EditTaskPopup.css';

function EditTaskPopup({ task, onSave, onClose }) {
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    const handleSave = () => {
        onSave({ ...task, title, description });
        onClose();
    };

    return (
        <motion.div
            className="edit-task-popup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h5>Edit Task</h5>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button onClick={handleSave} className="save" variant="contained" color="primary">
                    Save
                </Button>
                <Button onClick={onClose} className="close" variant="text" color="secondary">
                    Cancel
                </Button>
            </Box>
        </motion.div>
    );
}

export default EditTaskPopup;
