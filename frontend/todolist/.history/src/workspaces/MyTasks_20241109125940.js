// src/components/MyTasks.js
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../contexts/TaskContext';

function MyTasks() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks
                .filter((task) => !task.completed && !task.important)
                .map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
        </div>
    );
}

export default MyTasks;
