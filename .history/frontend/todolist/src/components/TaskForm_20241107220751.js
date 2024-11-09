// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';
import useTasks from '../hooks/useTasks';

function TaskForm({ taskToEdit, clearTaskToEdit }) {
    const { addTask, editTask } = useTasks();
    const [title, setTitle] = useState(taskToEdit?.title || '');
    const [description, setDescription] = useState(taskToEdit?.description || '');
    const [dueDate, setDueDate] = useState(taskToEdit?.due_date || '');
    const [taskType, setTaskType] = useState(taskToEdit?.task_type || 'MY_DAY');
    const [isCompleted, setIsCompleted] = useState(taskToEdit?.is_completed || false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setDueDate(taskToEdit.due_date);
            setTaskType(taskToEdit.task_type);
            setIsCompleted(taskToEdit.is_completed);
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description, due_date: dueDate, task_type: taskType, is_completed: isCompleted };
        try {
            if (taskToEdit) {
                await editTask(taskToEdit.id, taskData);
                setMessage('Task updated successfully!');
            } else {
                await addTask(taskData);
                setMessage('Task added successfully!');
            }
            clearForm();
        } catch {
            setMessage('Error: Could not save task');
        }
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setDueDate('');
        setTaskType('MY_DAY');
        setIsCompleted(false);
        clearTaskToEdit();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            {message && <p className="alert alert-success">{message}</p>}
            <div className="row">
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="col-md-4">
                    <textarea className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <select className="form-select" value={taskType} onChange={(e) => setTaskType(e.target.value)}>
                        <option value="MY_DAY">My Day</option>
                        <option value="IMPORTANT">Important</option>
                        <option value="PLANNED">Planned</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input type="date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="col-md-1">
                    <button type="submit" className="btn btn-primary w-100">
                        {taskToEdit ? "Update" : "Add"}
                    </button>
                </div>
                <div className="col-md-12">
                    <label>
                        <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} /> Completed
                    </label>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
