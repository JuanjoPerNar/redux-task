import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/todosSlice";

const TaskList = () => {
    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()
    
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    {task.text}
                    <button onClick={() => dispatch(deleteTask(task.id))} className="delete-button">Eliminar tarea</button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList