// src/components/TaskForm.js
import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm({ initialTask, onSave }) {
    const { addTask, updateTask } = useContext(TaskContext);
    const [task, setTask] = useState(initialTask || { title: '', description: '', due_date: '' });

    useEffect(() => {
        setTask(initialTask || { title: '', description: '', due_date: '' });
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            updateTask(task.id, task);
        } else {
            addTask(task);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <input
                type="date"
                value={task.due_date}
                onChange={(e) => setTask({ ...task, due_date: e.target.value })}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default TaskForm;
