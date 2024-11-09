import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import '../styles/TaskList.css';
import { getTasks } from '../api/TaskApi';

function TaskList() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks || []);
            } catch (error) {
                if (error.message === "Unauthorized") {
                    navigate('/login'); // Điều hướng đến trang đăng nhập nếu gặp lỗi 401
                } else {
                    console.error("Error fetching tasks:", error);
                }
            }
        };

        fetchTasks();
    }, [navigate]);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearTaskToEdit = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="task-list container">
            <h4 className="text-center mb-4">Todo List</h4>
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
