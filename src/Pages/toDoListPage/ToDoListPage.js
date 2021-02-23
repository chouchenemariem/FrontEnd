import React from 'react'
import NavBar from "../../components/NavBar";
import ToDoList from "../../components/toDoList/ToDoList";
import FormAddTask from "../../components/formAddTask/FormAddTask";
import "./ToDoListPage.css";
function ToDoListPage() {
    return (

        <div className="to-do-page-container">
            <NavBar />
            <ToDoList />
            <FormAddTask />
        </div>

    )
}

export default ToDoListPage
