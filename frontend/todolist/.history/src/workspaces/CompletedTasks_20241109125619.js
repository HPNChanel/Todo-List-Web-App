// src/workspaces/CompletedTasks.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function CompletedTasks() {
    const { tasks } = useContext(TaskContext);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="task-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {completedTasks.map((task) => (
                <div key={task.id} className="task-card bg-white p-4 shadow-md rounded-lg cursor-pointer hover:bg-green-100">
                    <h5 className="task-title font-bold">{task.title}</h5>
                    <p className="task-due text-sm text-gray-500">Due: {task.due_date}</p>
                </div>
            ))}
        </div>
    );
}

export default CompletedTasks;
