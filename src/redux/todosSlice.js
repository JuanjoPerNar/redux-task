import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    taskInput: ''
}

export const todosSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        updateTaskInput(state, action) {
            state.taskInput = action.payload
        },
        addTask(state, action) {
            const newTask = {id: Date.now(), text: state.taskInput}
            state.tasks.push(newTask)
            state.taskInput = ''
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const { updateTaskInput, addTask, deleteTask } = todosSlice.actions

export default todosSlice.reducer