// src/components/TaskForm.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm() {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSave = () => {
        addTask({ title, description, due_date: dueDate });
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded dark:bg-gray-600 dark:text-white"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded dark:bg-gray-600 dark:text-white"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded dark:bg-gray-600 dark:text-white"
            />
            <button
                onClick={handleSave}
                className="w-full py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
                Add Task
            </button>
        </div>
    );
}

export default TaskForm;
