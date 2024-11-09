import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskAPI';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

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
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}