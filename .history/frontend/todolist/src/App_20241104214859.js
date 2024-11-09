import React from "react";
import { TaskProvider } from "./contexts/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Todo List </h1>
      </div>
    </TaskProvider>
  )
}