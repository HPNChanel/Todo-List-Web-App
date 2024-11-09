import React, { useState, useEffect } from 'react';
import useTasks from '../hooks/useTasks';

function TaskForm({ taskToEdit, clearTaskToEdit }) { 
  const { addTask, editTask } = useTasks();
  const [title, setTitle] = useState(taskToEdit?.title)
  const
  const
  const
}