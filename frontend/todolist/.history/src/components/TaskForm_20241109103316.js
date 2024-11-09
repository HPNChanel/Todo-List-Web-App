// src/components/TaskForm.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm() {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
                Add Task
            </button>
        </div>
    );
}

export default TaskForm;
