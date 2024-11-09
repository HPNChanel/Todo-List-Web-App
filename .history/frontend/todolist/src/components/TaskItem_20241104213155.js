// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, onEdit }) {
    const { removeTask } = useTasks();

    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.due_date}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
