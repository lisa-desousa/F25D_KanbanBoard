import type { Task } from "../Types/TaskType";

type TaskCardProps = {
  task: Task;
  onClick: () => void;
};

export default function TaskCard({ task, onClick }: TaskCardProps) {
  return (
    <div
      className="bg-neutral-50 mt-3 mb-3 rounded-sm w-58 p-2 cursor-pointer"
      onClick={onClick}
    >
      <h2>{task.title}</h2>
      <p className="text-xs mt-1 italic">
        {task.date.toLocaleDateString("sv-SE")}
      </p>
    </div>
  );
}
