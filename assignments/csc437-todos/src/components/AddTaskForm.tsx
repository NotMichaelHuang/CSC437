import { useState } from "react";


interface AskTaskProps {
    onAddTask: (taskname: string) => void,
    onAfterAdd: () => void;
};

function AddTask({ onAfterAdd, onAddTask }: AskTaskProps) {
    const [taskName, setTaskName] = useState("");

    function handleNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if (taskName.trim() === "") return;

        onAddTask(taskName.trim());
        setTaskName("");

        {/* Exit modal after adding task */}
        onAfterAdd();
    }

    return (
        <form onSubmit={handleNewTask} className="flex items-center gap-4">
            <input
            type="text"
            placeholder="New task name"
            className="border border-black rounded-md px-4 py-2"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            />

            <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition">
                Add task
            </button>

        </form>
    );
}

export default AddTask;

