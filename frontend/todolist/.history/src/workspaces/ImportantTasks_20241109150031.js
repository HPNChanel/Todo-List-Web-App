// src/workspaces/ImportantTasks.js
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../contexts/TaskContext';
import '../styles/ImportantTasks.css';

function ImportantTasks({ onEdit }) {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list important-task-grid">
            {tasks
                .filter((task) => task.important && !task.completed)  // Chỉ lọc các công việc quan trọng và chưa hoàn thành
                .map((task) => (
                    <div key={task.id} className="important-task-card">
                        <TaskItem task={task} onEdit={onEdit} />
                    </div>
                ))}
        </div>
    );
}

export default ImportantTasks;
