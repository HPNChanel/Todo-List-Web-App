import React, { createContext, useState, useCallback } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/TaskApi';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async (category = '') => {
    const data = await getTasks(category);
    setTasks(data);
  }, []); // useCallback để tránh tạo hàm mới mỗi lần render

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

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
