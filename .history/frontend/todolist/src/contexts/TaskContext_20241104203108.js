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
  }

  const addTask = async
}