import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import LoginForm from "./Pages/loginPage/LoginForm";
import ToDoListPage from "./Pages/toDoListPage/ToDoListPage";
import "./App.css";
import TaskListContextProvider from "./context/TaskListContext"
function App() {
  const authentification = useContext(AuthContext);
  return (

    <div className="App">
      {authentification.auth.email ? (
        <ToDoListPage />
      ) : <LoginForm />}
    </div>

  );
}
function AppWithStore() {

  return (
    <AuthProvider>
      <TaskListContextProvider>
        <App />
      </TaskListContextProvider>
    </AuthProvider>
  );
}

export default AppWithStore;
