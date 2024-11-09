// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialTask }) {
    const [title, setTitle] = useState(initialTask ? initialTask.title : '');
    const [description, setDescription] = useState(initialTask ? initialTask.description : '');
    const [dueDate, setDueDate] = useState(initialTask ? initialTask.due_date : '');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description);
            setDueDate(initialTask.due_date);
        }
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, due_date: dueDate });
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">{initialTask ? 'Edit Task' : 'Add New Task'}</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="w-full p-2 mb-3 border rounded"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {initialTask ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
}

export default TaskForm;
