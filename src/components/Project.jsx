import { useRef, useState } from "react";
import Input from "./Input";
import { FaPlus } from "react-icons/fa6";

export default function Project({ title, description, date, openTaskInput, isInput, clearProject }) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);

    const [isClearClicked, setIsClearClicked] = useState(false)
    const [tasks, setTasks] = useState([]);
    const newTask = useRef(null);

    function handleTasks() {
        // Capture the value once and trim whitespace
        const taskValue = newTask.current?.value.trim();

        // Skip if taskValue is empty
        if (!taskValue) return;

        // Add the new task and update the state
        setTasks((prevTasks) => [...prevTasks, taskValue]);

        // Clear the input after adding the task
        newTask.current.value = "";
    }

    function handleClearTask(index){
       setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
        

    }
   
    let content;
    if (tasks.length > 0) {
        content = (
            <ul className="w-full">
                {tasks.map((task, index) => (
                    <li key={index} className={`flex justify-between w-full p-4 text-violet-900 font-semibold`}>
                        {task} <button onClick={()=>handleClearTask(index)} className="text-sm text-violet-400">Clear</button>
                    </li>
                ))}
            </ul>
        );
    } else  {
        content = <p className="ps-3">No tasks added yet</p>;
    }

    return (
        <div className="flex flex-col py-8 px-10 md:px-16 lg:px-28 w-full overflow-hidden">
            <div className="flex justify-between">
                <h1 className="mt-5 text-4xl text-violet-900 font-bold">{title}</h1>
                <button  onClick={()=>clearProject()} className="self-end text-violet-600">Clear Project</button>

            </div>
            <h4 className="mt-2 text-violet-400">{formattedDate}</h4>
            <p className="mt-4">{description}</p>
            <hr className="mt-4 w-full border-violet-300" />
            <h2 className="mt-5 text-3xl text-violet-900 font-bold self-center md:self-start">Tasks</h2>
            <div className="flex mt-4 text-violet-700 font-bold text-xl self-center md:self-start">
                {!isInput ? (
                    <button
                        onClick={() => openTaskInput(true)}
                        className="flex  items-center gap-2 rounded-md outline-2 outline-dashed outline-violet-700 outline-offset-4 py-2 px-4 mt-3"
                    >
                        <FaPlus /> Add Task
                    </button>
                ) : (
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <Input ref={newTask} placeholder="Enter a new task" />
                        <button className="m-0" onClick={handleTasks}>
                            Add Task
                        </button>
                    </div>
                )}
            </div>
            <div className="bg-violet-200 mt-8 rounded-sm overflow-y-auto">{content}</div>
        </div>
    );
}
