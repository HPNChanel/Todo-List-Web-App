// src/components/TaskForm.js
import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskForm({ taskToEdit, clearTaskToEdit }) {
    const { addTask, editTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setDueDate(taskToEdit.due_date);
        }
    }, [taskToEdit]);

    const handleSave = () => {
        if (taskToEdit) {
            editTask(taskToEdit.id, { title, description, due_date: dueDate });
            toast.success('Task updated successfully!');
            clearTaskToEdit();
        } else {
            addTask({ title, description, due_date: dueDate });
            toast.success('Task added successfully!');
        }
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <div className="task-form bg-white shadow-lg rounded-lg p-4 mb-4">
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
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleSave}
                className="w-full py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
                {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
        </div>
    );
}

export default TaskForm;
