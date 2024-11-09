// src/workspaces/MyTasks.js
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../contexts/TaskContext';
import '../styles/MyTasks.css';

function MyTasks({ onEdit }) {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list my-task-grid">
            {tasks
                .filter((task) => !task.completed && !task.important)  // Chỉ lọc các công việc chưa hoàn thành và không quan trọng
                .map((task) => (
                    <div key={task.id} className="my-task-card">
                        <TaskItem task={task} onEdit={onEdit} />
                    </div>
                ))}
        </div>
    );
}

export default MyTasks;
