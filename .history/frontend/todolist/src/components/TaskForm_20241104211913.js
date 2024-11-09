import React, { useState, useEffect } from "react";
import useTasks from "../hooks/useTasks";

function TaskForm({ taskToEdit, clearTaskToEdit }) {
  const { addTask, editTask } = useTasks();
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [description, setDescription] = useState(taskToEdit?.description || "");
  const [priority, setPriority] = useState(taskToEdit?.priority || 1);
  const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || "");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setTitle(taskToEdit.description);
      setTitle(taskToEdit.priority);
      setTitle(taskToEdit.dueDate);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, priority, due_date: dueDate };
    if (taskToEdit) {
      editTask(taskToEdit.id, taskData);
      clearTaskToEdit();
    } else {
      addTask(taskData);
    }
    setTitle("");
    setDescription("");
    setPriority(1);
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value="{title}"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />  
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>

      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
    </form>
  );
}
