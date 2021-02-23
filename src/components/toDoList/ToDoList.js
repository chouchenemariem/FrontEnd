import React, { useContext } from 'react';
import "./ToDoList.css";
import ToDoItem from "../../components/toDoItem/ToDoItem";
import { TaskListContext } from '../../context/TaskListContext'

function ToDoList() {
    const { tasks } = useContext(TaskListContext);
    return (
        <div className="to-do-list-container">
            <h2>Liste des Taches</h2>
            {tasks.length ? (
                <div className="to-do-list">
                    {
                        tasks.map((task) => {
                            return <ToDoItem task={task} key={task.id} />
                        })
                    }

                </div>
            ) : <div className="no-tasks">Pas de tâches </div>}
        </div >
    )
}

export default ToDoList
