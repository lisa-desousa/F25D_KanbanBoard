import Board from "./Components/Board";
import TaskContext from "./Contexts/TaskContext.tsx";
import { useState } from "react";
import initialTasks from "./Data/TaskList.ts";
import type { Task } from "./Types/TaskType.ts";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [nextId, setNextId] = useState(
    Math.max(...initialTasks.map((task) => task.id)) + 1
  );

  function onEdit(id: Task["id"], updates: Pick<Task, "title" | "text">) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updates };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function onAdd(title: Task["title"], text: Task["text"]) {
    const newTask: Task = {
      title: title,
      text: text,
      status: "To Do",
      date: new Date(),
      id: nextId,
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  }

  function onRemove(id: Task["id"]) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function onStatusChange(id: Task["id"], status: Task["status"]) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const contextValue = {
    tasks,
    onAdd,
    onRemove,
    onStatusChange,
    onEdit,
  };

  return (
    <>
      <TaskContext.Provider value={contextValue}>
        <Board />
      </TaskContext.Provider>
    </>
  );
}

export default App;
