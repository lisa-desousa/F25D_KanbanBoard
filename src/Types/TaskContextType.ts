import type { Task } from "./TaskType";

export type TaskContextType = {
  tasks: Task[];
  onAdd: (title: Task["title"], text: Task["text"]) => void;
  onRemove: (id: Task["id"]) => void;
  onStatusChange: (id: Task["id"], status: Task["status"]) => void;
  onEdit: (id: Task["id"], updates: Pick<Task, "title" | "text">) => void;
};
