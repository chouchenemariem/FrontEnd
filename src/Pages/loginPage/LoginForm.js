import React, { useState, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import "./LoginPage.css";
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const authentification = useContext(AuthContext);

    const submitHandler = e => {
        e.preventDefault();
        console.log({ email, password })
        if (email == "test@test.com" && password == "test") {
            localStorage.setItem('password', password);
            localStorage.setItem('email', email);
            authentification.setAuth({ password, email });
        } else {
            setError('password and email do not match');
        }

    }
    return (
        <form className="form-auth" onSubmit={submitHandler}>
            <div className="form-container">
                <h2>Login</h2>
                {(error != "") ? <div className="error">{error}</div> : ""}
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <input className="form-bt" type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm
