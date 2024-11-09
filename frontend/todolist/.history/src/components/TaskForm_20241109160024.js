// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialTask }) {
    const [title, setTitle] = useState(initialTask ? initialTask.title : '');
    const [description, setDescription] = useState(initialTask ? initialTask.description : '');
    const [dueDate, setDueDate] = useState(initialTask ? initialTask.due_date : '');
    const [completed, setCompleted] = useState(initialTask ? initialTask.completed : false);
    const [category, setCategory] = useState(initialTask ? initialTask.category : 'PLANNED');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description);
            setDueDate(initialTask.due_date);
            setCompleted(initialTask.completed);
            setCategory(initialTask.category);
        }
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, due_date: dueDate, completed, category });
        setTitle('');
        setDescription('');
        setDueDate('');
        setCompleted(false);
        setCategory('PLANNED');
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
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <div className="flex items-center mb-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="mr-2"
                />
                <label>Completed</label>
            </div>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            >
                <option value="MY_DAY">My Day</option>
                <option value="IMPORTANT">Important</option>
                <option value="PLANNED">Planned</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {initialTask ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
}

export default TaskForm;
