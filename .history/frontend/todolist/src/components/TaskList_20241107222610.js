// src/components/TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import '../styles/TaskList.css';
import useTasks from '../hooks/useTasks';

function TaskList() {
    const { tasks } = useTasks();
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearTaskToEdit = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="task-list container">
            <h4 className="text-center mb-4">Todo List</h4>
            <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={clearTaskToEdit} />
            <div className="row">
                {tasks.map((task) => (
                    <div key={task.id} className="col-md-4">
                        <TaskItem task={task} onEdit={handleEdit} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
