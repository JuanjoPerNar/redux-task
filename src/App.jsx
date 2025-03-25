import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import CreateTask from "./components/createTask";
import './App.css';

const App = () => {
  const tasks = useSelector(state => state.task.tasks)
  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
