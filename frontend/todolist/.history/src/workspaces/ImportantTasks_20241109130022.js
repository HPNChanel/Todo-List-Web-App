// src/components/ImportantTasks.js
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../contexts/TaskContext';

function ImportantTasks() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks
                .filter((task) => task.important && !task.completed)
                .map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
        </div>
    );
}

export default ImportantTasks;