// src/components/TaskList.js
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
