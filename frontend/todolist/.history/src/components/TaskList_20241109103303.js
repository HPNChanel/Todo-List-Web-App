// src/components/TaskList.js
import React, { useState, useEffect, useContext } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
    const { tasks, fetchTasks } = useContext(TaskContext);
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        fetchTasks(categoryFilter);
    }, [categoryFilter, fetchTasks]);

    return (
        <div className="container mx-auto p-4">
            <h4 className="text-2xl font-bold text-center mb-4">Todo List</h4>
            <select
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
            >
                <option value="">All Tasks</option>
                <option value="MY_DAY">My Day</option>
                <option value="IMPORTANT">Important</option>
                <option value="PLANNED">Planned</option>
            </select>
            <TaskForm />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
