import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskInput, addTask } from "../redux/todosSlice";

const CreateTask = () => {
    const taskInput = useSelector(state => state.task.taskInput)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        dispatch(updateTaskInput(e.target.value))
    }

    const handleAddTask = () => {
        if (taskInput.trim() === '') return
        dispatch(addTask())
    }

    return (
        <div>
            <input 
            type="text" 
            value={taskInput} 
            onChange={handleInputChange} 
            placeholder="Nueva tarea"
            className="task-input"
            />
            <button onClick={handleAddTask} className="task-button">Añadir tarea</button>
        </div>
    )
}




export default CreateTask