import React, { useState, useEffect, useContext } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
    const { tasks, fetchTasks } = useContext(TaskContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [sortOrder, setSortOrder] = useState('');
    const [taskToEdit, setTaskToEdit] = useState(null); // Thêm state để giữ task cần chỉnh sửa

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

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
        setTaskToEdit(task); // Thiết lập taskToEdit với task cần chỉnh sửa
    };

    return (
        <div className="container mx-auto p-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} onEdit={handleEdit} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;