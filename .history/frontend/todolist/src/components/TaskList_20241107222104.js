// src/components/TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import '../styles/TaskList.css';
import useTasks from '../hooks/useTasks';
import NavBar from './NavBar';

function TaskList() {
    const { tasks } = useTasks();
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [filter, setFilter] = useState("all");

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearTaskToEdit = () => {
        setTaskToEdit(null);
    };

    const filteredTasks = tasks.filter(task => 
        filter === "all" || task.task_type === filter
    );

    return (
        <div className="task-list container">
            <h4 className="text-center mb-4">Todo List</h4>
            <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={clearTaskToEdit} />
            
            <div className="mb-3 d-flex justify-content-center">
                <select onChange={(e) => setFilter(e.target.value)} className="form-select w-25">
                    <option value="all">All Types</option>
                    <option value="MY_DAY">My Day</option>
                    <option value="IMPORTANT">Important</option>
                    <option value="PLANNED">Planned</option>
                </select>
            </div>

            <div className="row">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <div key={task.id} className="col-md-4">
                            <TaskItem task={task} onEdit={handleEdit} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">No tasks available</p>
                )}
            </div>
        </div>
    );
}

export default TaskList;
