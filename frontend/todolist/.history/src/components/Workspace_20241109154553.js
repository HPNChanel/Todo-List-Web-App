// src/components/Workspace.js
import React, { useState, useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function Workspace() {
    const { getTasksByCategory, addTask, updateTask } = useContext(TaskContext);
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
            updateTask(editingTask.id, taskData);
        } else {
            addTask(taskData);
        }
        setFormVisible(false);
    };

    return (
        <div className="workspace-container flex">
            <aside className="workspace-sidebar bg-gray-800 text-white w-1/5 min-h-screen p-4">
                <h2 className="text-xl font-semibold mb-6">Workspace</h2>
                <nav className="workspace-nav">
                    <NavLink to="/workspace/my-tasks" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        My Day
                    </NavLink>
                    <NavLink to="/workspace/important" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Important
                    </NavLink>
                    <NavLink to="/workspace/planned" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Planned
                    </NavLink>
                    <NavLink to="/workspace/completed" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Completed
                    </NavLink>
                </nav>
                <button onClick={handleAddTask} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Task
                </button>
            </aside>

            <main className="workspace-main bg-gray-100 flex-grow p-4">
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
