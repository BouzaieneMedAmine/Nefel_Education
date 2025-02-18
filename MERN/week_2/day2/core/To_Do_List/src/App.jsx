import { useState } from "react";
import Tasks from "./assets/components/Tasks.jsx";

const App = () => {
    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <h1>Liste de Tâches</h1>
            <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
