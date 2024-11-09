import React, { useState, useEffect } from 'react';
import useTasks from '../hooks/useTasks';

function TaskForm({ taskToEdit, clearTaskToEdit }) { 
  const { addTask, editTask } = useTasks();
  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [description, setDescription] = useState(taskToEdit?.description || '');
  const [priority, setPriority] = useState(taskToEdit?.priority || 1);
  const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || '');

  useEffect(() => {
    if ()
  })
}