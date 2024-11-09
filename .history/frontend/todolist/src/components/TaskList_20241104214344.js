import { useState, React } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList() {
  const { tasks } = useTasks();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const clearTaskToEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TaskForm taskToEdit={taskToEdit} clearTaskToEdit={clearTaskToEdit} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;