// src/workspaces/ImportantTasks.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function ImportantTasks() {
    const { tasks } = useContext(TaskContext);
    const importantTasks = tasks.filter(task => task.priority === 'high');

    return (
        <div className="task-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {importantTasks.map((task) => (
                <div key={task.id} className="task-card bg-white p-4 shadow-md rounded-lg cursor-pointer hover:bg-yellow-100">
                    <h5 className="task-title font-bold">{task.title}</h5>
                    <p className="task-due text-sm text-gray-500">Due: {task.due_date}</p>
                </div>
            ))}
        </div>
    );
}

export default ImportantTasks;
