import React, { useState, useEffect, useContext } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { TaskContext } from '../contexts/TaskContext';
import '../styles/TaskList.css';

function TaskList() {
    const { tasks, fetchTasks } = useContext(TaskContext);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        fetchTasks(categoryFilter); // Gọi fetchTasks mỗi khi categoryFilter thay đổi
    }, [categoryFilter]); // Đảm bảo chỉ gọi khi categoryFilter thay đổi

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearTaskToEdit = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="task-list container">
            <h4 className="text-center mb-4">Todo List</h4>
            <div className="mb-3">
                <select onChange={(e) => setCategoryFilter(e.target.value)} className="form-select">
                    <option value="">All Tasks</option>
                    <option value="MY_DAY">My Day</option>
                    <option value="IMPORTANT">Important</option>
                    <option value="PLANNED">Planned</option>
                </select>
            </div>
            <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={clearTaskToEdit} />
            <div className="row">
                {tasks.map((task) => (
                    <div key={task.id} className="col-md-4">
                        <TaskItem task={task} onEdit={handleEdit} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
