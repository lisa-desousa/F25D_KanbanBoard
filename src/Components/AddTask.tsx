import type { Task } from "../Types/TaskType";
import useTasks from "../Contexts/useTasks";
import { useState } from "react";

export default function AddTask() {
  const { onAdd } = useTasks();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [title, setTitle] = useState<Task["title"]>("");
  const [text, setText] = useState<Task["text"]>("");

  function handleSubmit() {
    if (title) {
      //en task måste ha titel men inte nödvändigtvis beskrivning
      onAdd(title, text);
      setIsActive(false);
      setTitle("");
      setText("");
    } else {
      alert("New task must have a title!");
    }
  }

  return (
    <>
      <div
        className="bg-neutral-200 mt-3 mb-3 rounded-sm w-58 p-2 font-medium cursor-pointer"
        onClick={() => setIsActive(true)}
      >
        <h2> ➕ Add New Task</h2>
      </div>
      {isActive && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-neutral-100 rounded-md border-neutral-300 border-2 p-4 w-md h-3/4 flex flex-col relative">
            <button
              className="absolute top-0 right-1 font-bold cursor-pointer"
              onClick={() => setIsActive(false)}
            >
              X
            </button>

            <input
              className="text-xl outline-none mb-4"
              placeholder="Enter task title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="text-md outline-none resize-none h-38"
              placeholder="Enter task description here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="text-lg font-medium bg-purple-200 rounded-lg mt-auto w-1/2 self-center cursor-pointer"
              onClick={handleSubmit}
            >
              Save Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}
