import React, { useContext, useState, useEffect } from 'react'
import "./FormAddTask.css";
import { TaskListContext } from '../../context/TaskListContext'
function FormAddTask() {
    const { addTask, editTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title, description);
            setTitle("");
            setDescription("");
        } else {
            editTask(title, description, editItem.id);

        }
    }
    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            setDescription(editItem.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editItem])
    return (
        <div className="form-container-task">
            <h2>Créer une nouvelle tàche</h2>
            <form className="add-form-task" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom de la tache </label>
                    <input type="text" name="name" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description de la tache en une ligne </label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="add-task-container">
                    <button className="add-task">{editItem ? "Modifier" : "Ajouter"}</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddTask
