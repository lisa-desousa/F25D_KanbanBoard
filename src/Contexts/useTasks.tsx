import { useContext } from "react";
import TaskContext from "./TaskContext";

//custom hook för att undvika att göra null-kontroll på varje plats man vill använda context
export default function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("Task context must be used within provider!");
  return context;
}
