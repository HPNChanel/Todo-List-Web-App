// src/contexts/TaskContext.js
import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/TaskApi';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        // Lấy dữ liệu từ localStorage khi ứng dụng khởi động
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const fetchTasks = useCallback(async (category = '') => {
        const data = await getTasks(category);
        setTasks(data);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useEffect(() => {
        // Cập nhật localStorage mỗi khi tasks thay đổi
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = async (task) => {
        const newTask = await createTask(task);
        setTasks([...tasks, newTask]);
    };

    const editTask = async (id, updatedTask) => {
        const task = await updateTask(id, updatedTask);
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const toggleComplete = async (id) => {
        const task = tasks.find((t) => t.id === id);
        if (task) {
            const updatedTask = { ...task, completed: !task.completed };
            await updateTask(id, updatedTask);
            setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask, editTask, removeTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
};
