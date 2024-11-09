// src/workspaces/MyTasks.js
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../contexts/TaskContext';

function MyTasks({ onEdit }) {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tasks
                .filter((task) => !task.completed && !task.important)  // Lọc công việc chưa hoàn thành và không quan trọng
                .map((task) => (
                    <TaskItem key={task.id} task={task} onEdit={onEdit} />
                ))}
        </div>
    );
}

export default MyTasks;
