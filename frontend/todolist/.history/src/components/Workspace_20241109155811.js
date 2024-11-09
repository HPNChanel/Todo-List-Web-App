// src/components/Workspace.js
import React, { useState, useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../styles/Workspace.css';

function Workspace() {
    const { getTasksByCategory, addTask, editTask } = useContext(TaskContext);
    const [isFormVisible, setFormVisible] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = () => {
        setEditingTask(null);
        setFormVisible(true);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setFormVisible(true);
    };

    const handleFormSubmit = (taskData) => {
        if (editingTask) {
            editTask(editingTask.id, taskData);
        } else {
            addTask(taskData);
        }
        setFormVisible(false);
    };

    return (
        <div className="workspace-container">
            <aside className="workspace-sidebar">
                <h2>Workspace</h2>
                <nav className="workspace-nav">
                    <NavLink to="/workspace/my-tasks" className="nav-link">My Day</NavLink>
                    <NavLink to="/workspace/important" className="nav-link">Important</NavLink>
                    <NavLink to="/workspace/planned" className="nav-link">Planned</NavLink>
                    <NavLink to="/workspace/completed" className="nav-link">Completed</NavLink>
                </nav>
                <button onClick={handleAddTask}>Add Task</button>
            </aside>
            <main className="workspace-main">
                {isFormVisible && (
                    <TaskForm onSubmit={handleFormSubmit} initialTask={editingTask} />
                )}
                <Routes>
                    <Route path="my-tasks" element={<TaskList tasks={getTasksByCategory('MY_DAY')} onEdit={handleEditTask} />} />
                    <Route path="important" element={<TaskList tasks={getTasksByCategory('IMPORTANT')} onEdit={handleEditTask} />} />
                    <Route path="planned" element={<TaskList tasks={getTasksByCategory('PLANNED')} onEdit={handleEditTask} />} />
                    <Route path="completed" element={<TaskList tasks={getTasksByCategory('COMPLETED')} onEdit={handleEditTask} />} />
                </Routes>
            </main>
        </div>
    );
}

export default Workspace;
