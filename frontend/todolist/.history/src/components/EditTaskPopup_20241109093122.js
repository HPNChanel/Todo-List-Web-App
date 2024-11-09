import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import './EditTaskPopup.css';

function EditTaskPopup({ task, onClose }) {
    const { editTask } = useContext(TaskContext);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [category, setCategory] = useState(task.category);

    const handleSave = () => {
        editTask(task.id, { title, description, category });
        onClose();
    };

    return (
        <div className="edit-task-popup">
            <button className="close" onClick={onClose}>×</button>
            <h5>Edit Task</h5>
            <form>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="MY_DAY">My Day</option>
                    <option value="IMPORTANT">Important</option>
                    <option value="PLANNED">Planned</option>
                </select>
                <button type="button" onClick={handleSave} className="save">Save</button>
            </form>
        </div>
    );
}

export default EditTaskPopup;
