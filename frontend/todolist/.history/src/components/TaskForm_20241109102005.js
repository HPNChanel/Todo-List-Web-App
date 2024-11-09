import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm({ taskToEdit, clearTaskToEdit }) {
    const { addTask, editTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('PLANNED');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setCategory(taskToEdit.category);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description, category };

        if (taskToEdit) {
            editTask(taskToEdit.id, newTask);
            clearTaskToEdit();
        } else {
            addTask(newTask);
        }

        setTitle('');
        setDescription('');
        setCategory('PLANNED');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" required />
            </div>
            <div className="mb-3">
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" required />
            </div>
            <div className="mb-3">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
                    <option value="MY_DAY">My Day</option>
                    <option value="IMPORTANT">Important</option>
                    <option value="PLANNED">Planned</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;
