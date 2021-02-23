import React, { createContext, useState, useEffect } from 'react';
export const TaskListContext = createContext();

const TaskListContextProvider = (Props) => {
    //IntialState tasks
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);
    const [completeItem, setCompleteItem] = useState(null);
    //To save all new task in localStorage and changed when tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    //Add task to tasks
    const addTask = (title, description) => {
        setTasks([...tasks, { title: title, description: description, complete: false, id: Math.floor(Math.random() * 10000) }])
    }
    //Remove task
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    //Select task from tasks
    const findItem = id => {
        console.log(id)
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }
    //Edit task 
    const editTask = (title, description, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, description, id } : task));
        setTasks(newTasks);
        setEditItem(null);
    }
    //Select task from tasks and then call function toggleComplete to change complete to true
    const taskComplete = async (id) => {
        console.log(id);
        const item = tasks.find(task => task.id === id);
        console.log(item, "item");
        setCompleteItem(item);
        toggleComplete(id);
    }
    //Change complete to true
    const toggleComplete = (id) => {
        console.log(completeItem, "completeItem");
        const newTasks = tasks.map(task => (task.id === id ? { ...task, complete: true } : task));
        setTasks(newTasks);
        setCompleteItem(null);
    }

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, findItem, editItem, editTask, taskComplete }}>
            {Props.children}
        </TaskListContext.Provider>
    )
}
export default TaskListContextProvider;