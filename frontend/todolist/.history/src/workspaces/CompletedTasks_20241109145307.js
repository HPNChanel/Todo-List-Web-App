// src/components/CompletedTasks.js
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../contexts/TaskContext';

function CompletedTasks() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks
                .filter((task) => task.completed)
                .map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
        </div>
    );
}

export default CompletedTasks;
