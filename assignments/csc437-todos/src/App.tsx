import { useState } from 'react';

{/* Components */}
import TodoItem from "./components/TodoItem";
import Modal from "./components/Modal";
import AddTask from "./components/AddTaskForm";


function App() {
    const INITIAL_TASK_LIST = [
        {task: "Eat", checked: false},
        {task: "Sleep", checked: false},
        {task: "Repeat", checked: false}
    ]

    const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle Delete
    function handleDeleteTask(taskIndex: number) {
        setTaskList(taskList.filter((_, index) => index !== taskIndex));
    }

    function handleAddTask(newTaskName: string){
        const newTask = {task: newTaskName, checked: false};
        setTaskList([...taskList, newTask])
    }

    function handleCheck(indexToToggle: number){
        setTaskList(taskList.map((task, i) => {
            if (i === indexToToggle){
                return {...task, checked: !task.checked}
            }
            return task;
        }));
    }

    return (
        <>
            <main className="z-0 m-4 flex flex-col gap-6">
                {/* Input + Button Row */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition self-start"
                >
                    Add Task
                </button> 

                {/* Todo Section */}
                <section>
                    <h1 className="text-xl font-bold mb-4">To do</h1>
                    <ul className="flex flex-col gap-4">
                        {taskList.map((t, i)=> (
                            < TodoItem 
                            key={i} 
                            task={t.task} 
                            checked={t.checked} 
                            onToggle={() => handleCheck(i)}
                            onDelete={() => handleDeleteTask(i)}
                            />
                        ))} 
                    </ul>
                </section>
            </main>

            {isModalOpen && (
                <Modal
                    headerLabel="Add Task" 
                    onCloseRequested={() => setIsModalOpen(false)}
                >
                    < AddTask 
                        onAddTask={handleAddTask} 
                        onAfterAdd={() => setIsModalOpen(false)}
                    />
                </Modal>
            )} 
        </>
    );
}

export default App;

