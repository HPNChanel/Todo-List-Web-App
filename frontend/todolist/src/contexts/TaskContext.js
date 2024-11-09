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
                completed: true  // Chỉ cần cập nhật trạng thái completed
            };
            try {
                const result = await updateTask(id, updatedTask); // Gọi API cập nhật completed
                setTasks(tasks.map((t) => 
                    (t.id === id ? { ...t, completed: true, category: "COMPLETED" } : t)
                )); // Cập nhật trạng thái trong frontend
            } catch (error) {
                console.error('Failed to update task:', error);
            }
        }
    };

    const getTasksByCategory = (category) => {
        return tasks.filter((task) => task.category === category || (category === "COMPLETED" && task.completed));
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
