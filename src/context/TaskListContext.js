import React, { createContext, useState, useEffect } from 'react';
export const TaskListContext = createContext();

const TaskListContextProvider = (Props) => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);
    const [completeItem, setCompleteItem] = useState(null);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify((tasks)), [tasks]);
    })
    const addTask = (title, description) => {
        setTasks([...tasks, { title: title, description: description, complete: false, id: Math.floor(Math.random() * 10000) }])
    }
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const findItem = id => {
        console.log(id)
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }
    const taskComplete = async (id) => {
        console.log(id);
        const item = tasks.find(task => task.id === id);
        console.log(item, "item");
        setCompleteItem(item);
        toggleComplete(id);
    }
    const toggleComplete = (id) => {
        console.log(completeItem, "completeItem");
        const newTasks = tasks.map(task => (task.id === id ? { ...task, complete: true } : task));
        setTasks(newTasks);
        setCompleteItem(null);
    }
    const editTask = (title, description, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, description, id } : task));
        setTasks(newTasks);
        setEditItem(null);
    }
    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, findItem, editItem, editTask, taskComplete }}>
            {Props.children}
        </TaskListContext.Provider>
    )
}
export default TaskListContextProvider;