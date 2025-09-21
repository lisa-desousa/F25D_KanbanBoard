//modal har edit funktion och remove funktion
import type { Task } from "../Types/TaskType";
import useTasks from "../Contexts/useTasks";
import { useState } from "react";

type TaskModalProps = {
  task: Task;
  onClose: () => void;
};

export default function TaskModal({ task, onClose }: TaskModalProps) {
  const { onEdit, onRemove, onStatusChange } = useTasks();

  const [title, setTitle] = useState<Task["title"]>(task.title);
  const [text, setText] = useState<Task["text"]>(task.text);

  // om titel ELLER text ändrats skickas BÅDA
  // -> kan utvecklas genom att endast den som ändrats skickas
  function handleClose() {
    if (title !== task.title || text !== task.text) {
      onEdit(task.id, { title, text });
    }
    onClose(); //detta är en callback till setselectedtask(null), då visas inte modalen längre eftersom den renderas endast när selectedtask = true
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 cursor-default">
      <div className="bg-neutral-100 rounded-md border-neutral-300 border-2 p-4 w-md h-3/4 flex flex-col relative">
        <button
          className="absolute top-0 right-1 font-bold cursor-pointer"
          onClick={handleClose}
        >
          X
        </button>

        <input
          className="text-xl outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="text-sm mt-2 mb-2 italic">
          {task.date.toLocaleDateString("sv-SE")}
        </p>

        <textarea
          className="text-md outline-none resize-none h-38"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="absolute left-2 bottom-2">
          <p className="text-sm mb-2">Change Task Status:</p>
          <button
            className="font-medium text-xs bg-purple-200 text-center rounded-md p-1 px-4 mr-3 cursor-pointer"
            onClick={() => {
              onStatusChange(task.id, "To Do");
              onClose();
            }}
          >
            To Do
          </button>
          <button
            className="font-medium text-xs bg-purple-200 text-center rounded-md p-1 px-4 cursor-pointer"
            onClick={() => {
              onStatusChange(task.id, "Doing");
              onClose();
            }}
          >
            Doing
          </button>
          <button
            className="font-medium text-xs bg-purple-200 text-center rounded-md p-1 px-4 ml-3 cursor-pointer"
            onClick={() => {
              onStatusChange(task.id, "Done");
              onClose();
            }}
          >
            Done
          </button>
        </div>

        <button
          className="font-medium text-xs bg-red-300 text-center rounded-xl w-1/3 absolute bottom-2 right-2 p-1 cursor-pointer"
          onClick={() => {
            onRemove(task.id);
            onClose();
          }}
        >
          Remove Task
        </button>
      </div>
    </div>
  );
}
