import { useState } from "react";
import TasksDisplay from "./TasksDisplay";

const Tasks = ({ tasks, setTasks }) => {
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "" || tasks.some(task => task.text === newTask.trim())) return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTask = (index) => {
        setTasks(
            tasks.map((task, i) => 
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Nouvelle tâche..."
            />
            <button onClick={addTask}>Ajouter</button>
            <TasksDisplay tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
        </div>
    );
};

export default Tasks;
