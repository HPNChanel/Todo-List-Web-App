// src/contexts/TaskContext.js
import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/TaskApi';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const fetchTasks = useCallback(async () => {
        const data = await getTasks();
        setTasks(data);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useEffect(() => {
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
            const updatedTask = { 
                ...task, 
                completed: !task.completed,
                category: task.completed ? task.category : 'COMPLETED', // Đặt category là "COMPLETED" khi hoàn thành
                title: task.title,
                description: task.description,
                due_date: task.due_date 
            };
            try {
                await updateTask(id, updatedTask); // Gọi API với dữ liệu đầy đủ
                setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
            } catch (error) {
                console.error('Failed to update task:', error);
            }
        }
    };

    const getTasksByCategory = (category) => {
        return tasks.filter((task) => task.category === category);
    };

    return (
        <TaskContext.Provider value={{
            tasks,
            fetchTasks,
            addTask,
            editTask,
            removeTask,
            toggleComplete,
            getTasksByCategory
        }}>
            {children}
        </TaskContext.Provider>
    );
};
