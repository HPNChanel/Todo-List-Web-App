// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Draggable from 'react-draggable';
import '../styles/TaskItem.css';

function TaskItem({ task, onEdit }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);

    return (
        <Draggable>
            <div className="task-item-container">
                <div className={`task-item-note ${task.completed ? 'completed' : ''}`}>
                    <div className="task-content">
                        <h5 className="task-title">{task.title}</h5>
                        <p className="task-description">{task.description}</p>
                        <p className="task-date">Due: {new Date(task.due_date).toLocaleDateString()}</p>
                    </div>
                    <div className="task-actions">
                        <button onClick={() => onEdit(task)} className="action-button edit">Edit</button>
                        <button onClick={() => toggleComplete(task.id)} className="action-button complete">
                            Complete
                        </button>
                        <button onClick={() => removeTask(task.id)} className="action-button delete">Delete</button>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default TaskItem;
