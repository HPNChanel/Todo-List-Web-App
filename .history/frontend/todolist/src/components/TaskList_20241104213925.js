import React from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import useTasks from "../hooks/useTasks";

function TaskList() {
  const { tasks } = useTasks();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit()
  }
}