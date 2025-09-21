import { Link } from "react-router-dom";
import type { Task } from "../Types/TaskType";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

type ColumnProps = {
  status: Task["status"];
  tasks: Task[];
  onTaskClick: (task: Task) => void;
};

export default function Column({ status, tasks, onTaskClick }: ColumnProps) {
  const url: string = `/${status.toLowerCase().replace(" ", "")}`; //ändrar ex. 'To Do' till 'todo'

  return (
    <div className="h-90 w-70 rounded-md p-2 m-4 bg-neutral-300 flex flex-col items-center overflow-x-auto">
      <Link
        to={url}
        className="font-medium bg-purple-300 text-center rounded-xl w-1/2 cursor-pointer"
      >
        <h2>{status}</h2>
      </Link>

      <div>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
      {status === "To Do" && <AddTask />}
    </div>
  );
}
