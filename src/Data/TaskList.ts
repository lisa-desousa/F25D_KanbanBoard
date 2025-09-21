import type { Task } from "../Types/TaskType";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Bygga React App",
    text: "Bygga en kanban-board app med react och bibliotek från reacts ekosystem",
    status: "Doing",
    date: new Date("2025-09-21"),
  },
  {
    id: 2,
    title: "Plantera om växter",
    text: "Plantera om med ny jordblandning",
    status: "Done",
    date: new Date("2025-04-30"),
  },
  {
    id: 3,
    title: "Ha redovisning F25D",
    text: "Hej Anas :-)",
    status: "To Do",
    date: new Date("2025-09-26"),
  },
  {
    id: 4,
    title: "Gå till gymmet",
    text: "Styrketräning överkropp + kondition",
    status: "To Do",
    date: new Date("2025-10-01"),
  },
];

export default initialTasks;
