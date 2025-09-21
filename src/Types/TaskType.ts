export type Task = {
  id: number;
  title: string;
  text: string;
  status: "To Do" | "Doing" | "Done";
  date: Date;
};
