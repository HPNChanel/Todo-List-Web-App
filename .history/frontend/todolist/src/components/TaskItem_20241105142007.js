// src/components/TaskItem.js
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../styles/TaskItem.css';
import useTasks from '../hooks/useTasks';

function TaskItem({ task, onEdit }) {
    const { removeTask } = useTasks();

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text text-muted">{task.description}</p>
                <p className="card-text">Priority: {task.priority}</p>
                <p className="card-text">Due Date: {task.due_date}</p>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-sm btn-outline-primary mr-2"
                        onClick={() => onEdit(task)}
                    >
                        <FaEdit /> Edit
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeTask(task.id)}
                    >
                        <FaTrashAlt /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
