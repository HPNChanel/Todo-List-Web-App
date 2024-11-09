// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Draggable from 'react-draggable';

function TaskItem({ task, onEdit }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);

    return (
        <Draggable>
            <div className={`task-item shadow-lg rounded-lg p-4 mb-4 ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
                <h5 className="text-xl font-semibold mb-2">{task.title}</h5>
                <p>{task.description}</p>
                <p className="text-gray-500">Due Date: {task.due_date}</p>
                <div className="task-actions mt-4 flex justify-between">
                    <button onClick={() => onEdit(task)} className="text-blue-500 hover:text-blue-700 font-semibold">
                        Edit
                    </button>
                    <button onClick={() => toggleComplete(task.id)} className={`ml-2 ${task.completed ? 'text-green-600' : 'text-gray-400'}`}>
                        {task.completed ? 'Completed' : 'Make It Complete'}
                    </button>
                    <button onClick={() => removeTask(task.id)} className="text-red-500 hover:text-red-700 font-semibold">
                        Delete
                    </button>
                </div>
            </div>
        </Draggable>
    );
}

export default TaskItem;
