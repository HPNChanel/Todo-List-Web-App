// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Draggable from 'react-draggable';

function TaskItem({ task }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);

    return (
        <Draggable bounds="parent">
            <div className={`task-item ${task.completed ? 'completed' : ''}`}>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p>Due: {new Date(task.due_date).toLocaleDateString()}</p>
                <div className="actions">
                    <button onClick={() => toggleComplete(task.id)}>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => removeTask(task.id)}>Delete</button>
                </div>
            </div>
        </Draggable>
    );
}

export default TaskItem;
