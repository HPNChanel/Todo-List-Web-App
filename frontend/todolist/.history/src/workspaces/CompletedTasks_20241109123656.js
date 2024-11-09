// src/workspaces/CompletedTasks.js
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../contexts/TaskContext';
import '../styles/CompletedTasks.css';

function CompletedTasks({ onEdit }) {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list completed-task-grid">
            {tasks
                .filter((task) => task.completed)  // Chỉ lọc các công việc đã hoàn thành
                .map((task) => (
                    <div key={task.id} className="completed-task-card">
                        <TaskItem task={task} onEdit={onEdit} />
                    </div>
                ))}
        </div>
    );
}

export default CompletedTasks;
