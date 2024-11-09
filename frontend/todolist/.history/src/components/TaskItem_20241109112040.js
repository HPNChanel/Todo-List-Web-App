import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskItem({ task, onEdit }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);

    return (
        <div className={`bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 mb-4 ${task.completed ? 'bg-green-100' : ''}`}>
            <h5 className="text-xl font-semibold mb-2 dark:text-gray-200">{task.title}</h5>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{task.description}</p>
            <p className="text-gray-500 dark:text-gray-400">Due Date: {task.due_date}</p>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500 hover:text-blue-700 font-semibold dark:text-blue-300"
                >
                    Edit
                </button>
                <button
                    onClick={() => removeTask(task.id)}
                    className="text-red-500 hover:text-red-700 font-semibold dark:text-red-300"
                >
                    Delete
                </button>
                <button
                    onClick={() => toggleComplete(task.id)} // Sử dụng toggleComplete để thay đổi trạng thái hoàn thành
                    className={`ml-2 ${task.completed ? 'text-green-600' : 'text-gray-400'}`}
                >
                    {task.completed ? 'Completed' : 'Mark as Complete'}
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
