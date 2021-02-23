import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

function NavBar() {
    const authentification = useContext(AuthContext);
    function logOut() {
        authentification.setAuth({});
        localStorage.removeItem('password');
        localStorage.removeItem('email');
    }
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Todo List</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" to="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/Taches">Taches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor: "pointer" }} onClick={logOut} >Déconnexion</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar
