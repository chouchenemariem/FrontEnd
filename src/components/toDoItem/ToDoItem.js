import React, { useContext } from 'react'
import "./ToDoItem.css";
import { TaskListContext } from '../../context/TaskListContext'
function ToDoItem({ task }) {
    const { removeTask, findItem, taskComplete } = useContext(TaskListContext);
    return (
        <div className="to-do-container">
            <div className="to-do-detail">
                <div className="task">{task.title}</div>
                <div className="description">{task.description}</div>
                <div className="delete" onClick={() => removeTask(task.id)}>-Supprimer</div>
                <div className="edit" onClick={() => findItem(task.id)}>-Modifier</div>
            </div>
            <div className="toggel-complete">
                <button className={task.complete ? "complete-bt" : "complete-bt-no"} onClick={() => taskComplete(task.id)}>{task.complete ? " complétée " : "Non complétée "}</button>
            </div>
        </div>
    )
}

export default ToDoItem
