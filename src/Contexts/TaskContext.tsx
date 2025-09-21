import { createContext } from "react";
import type { TaskContextType } from "../Types/TaskContextType";

const TaskContext = createContext<TaskContextType | null>(null);

export default TaskContext;
