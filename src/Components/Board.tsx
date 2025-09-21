import Column from "./Column";
import useTasks from "../Contexts/useTasks";
import type { Task } from "../Types/TaskType";
import { useState } from "react";
import TaskModal from "./TaskModal";
import { useParams, Link } from "react-router-dom";

export default function Board() {
  const { tasks } = useTasks();
  const { columntype } = useParams();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null); //används för att öppna/stänga modal

  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const doingTasks = tasks.filter((task) => task.status === "Doing");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  //lista med alla kolumner: deras titel och filtrerade tasks
  const columns: { title: Task["status"]; tasks: Task[] }[] = [
    { title: "To Do", tasks: todoTasks },
    { title: "Doing", tasks: doingTasks },
    { title: "Done", tasks: doneTasks },
  ];

  // steg för steg vad som händer nedan:
  // finns columntype? (params från router)
  // om ja -> hitta kolumnen (title + tasks) som motsvarar den columntype som blivit klickad
  // detta blir singleColumn variabeln
  // om columntype inte finns (ingen kolumn har blivit klickad) -> returnera inget
  const singleColumn = columntype
    ? columns.find(
        (c) =>
          c.title.toLowerCase().replace(" ", "") === columntype.toLowerCase()
      )
    : null;

  // om ett värde har sparats i singlecolumn (dvs om en kolumn klickats) -> rendera vald kolumn
  if (singleColumn) {
    return (
      <div className="bg-neutral-50 m-0 p-0 flex flex-col justify-center items-center">
        <Column
          status={singleColumn.title}
          tasks={singleColumn.tasks}
          onTaskClick={setSelectedTask}
        />

        <Link
          to="/"
          className=" bg-purple-200 px-2 text-sm text-center rounded-xl w-52 cursor-pointer"
        >
          ⬅️ Go back to Board
        </Link>

        {selectedTask && (
          <TaskModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
      </div>
    );
  }

  // annars: rendera alla kolumner
  return (
    <div className="bg-neutral-50 m-0 p-0">
      <h1 className="bg-neutral-200 p-1 font-medium">The Board App</h1>

      <div className="flex flex-col items-center md:flex-row md:justify-evenly">
        {columns.map((c) => (
          <Column
            key={c.title}
            status={c.title}
            tasks={c.tasks}
            onTaskClick={setSelectedTask}
          />
        ))}
      </div>

      {selectedTask && (
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
}
