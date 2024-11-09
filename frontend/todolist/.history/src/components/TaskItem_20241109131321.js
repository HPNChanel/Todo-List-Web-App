// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Draggable from 'react-draggable';
import '../styles/TaskItem.css';

function TaskItem({ task }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);

    return (
        <Draggable bounds="parent">
            <div className={`task-item-note ${task.completed ? 'completed' : ''}`}>
                <h5 className="task-title">{task.title}</h5>
                <p className="task-description">{task.description}</p>
                <p className="task-date">Due: {new Date(task.due_date).toLocaleDateString()}</p>
                <div className="task-actions">
                    <button onClick={() => toggleComplete(task.id)} className="action-button complete">
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => removeTask(task.id)} className="action-button delete">
                        Delete
                    </button>
                </div>
            </div>
        </Draggable>
    );
}

export default TaskItem;
