// src/components/TaskList.js
import React, { useState, useEffect, useContext } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
    const { tasks, fetchTasks } = useContext(TaskContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [sortOrder, setSortOrder] = useState('');
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Gọi fetchTasks khi trang được tải lại
    useEffect(() => {
        fetchTasks();
    }, []); // Chỉ cần chạy một lần khi component được render

    useEffect(() => {
        let sortedTasks = tasks.filter(task => 
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortOrder === 'due_date') {
            sortedTasks = sortedTasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
        } else if (sortOrder === 'priority') {
            sortedTasks = sortedTasks.sort((a, b) => a.priority - b.priority);
        }

        setFilteredTasks(sortedTasks);
    }, [searchQuery, sortOrder, tasks]);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    return (
        <div className="task-list container mx-auto p-4">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
            >
                <option value="">Sort By</option>
                <option value="due_date">Due Date</option>
                <option value="priority">Priority</option>
            </select>
            <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={() => setTaskToEdit(null)} />
            <div className="task-grid">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} onEdit={handleEdit} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
