// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';
import useTasks from '../hooks/useTasks';

function TaskForm({ taskToEdit, clearTaskToEdit }) {
    const { addTask, editTask } = useTasks();
    const [title, setTitle] = useState(taskToEdit?.title || '');
    const [description, setDescription] = useState(taskToEdit?.description || '');
    const [priority, setPriority] = useState(taskToEdit?.priority || 1);
    const [dueDate, setDueDate] = useState(taskToEdit?.due_date || '');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setPriority(taskToEdit.priority);
            setDueDate(taskToEdit.due_date);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, priority, due_date: dueDate };
        if (taskToEdit) {
            editTask(taskToEdit.id, taskData);
            clearTaskToEdit();
        } else {
            addTask(taskData);
        }
        setTitle('');
        setDescription('');
        setPriority(1);
        setDueDate('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value={1}>Low</option>
                        <option value={2}>Medium</option>
                        <option value={3}>High</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input
                        type="date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="col-md-1">
                    <button type="submit" className="btn btn-primary w-100">
                        {taskToEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
