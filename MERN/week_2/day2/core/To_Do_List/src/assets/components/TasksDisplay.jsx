const TasksDisplay = ({ tasks, toggleTask, removeTask }) => (
    <div>
        {tasks.length === 0 ? (
            <p>Aucune tâche pour le moment.</p>
        ) : (
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTask(index)} 
                        />
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            {task.text}
                        </span>
                        <button onClick={() => removeTask(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default TasksDisplay;

