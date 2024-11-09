import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const useTasks = () => {
  return useContext(TaskContext);
};

export default useTasks;