// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskItem({ task, onEdit }) {
    const { removeTask } = useContext(TaskContext);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h5 className="text-xl font-semibold mb-2">{task.title}</h5>
            <p className="text-gray-700 mb-4">{task.description}</p>
            <p className="text-gray-500">Due Date: {task.due_date}</p>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                    Edit
                </button>
                <button
                    onClick={() => removeTask(task.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
