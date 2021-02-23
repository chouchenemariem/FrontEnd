import React, { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext();

export function AuthProvider(Props) {
    const [auth, setAuth] = useState({ email: '', password: '' });

    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        //test if email in localStorage not empty so stay authenfied
        if (email) {
            setAuth({ email, password })
        }

    }, [])
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {Props.children}
        </AuthContext.Provider>

    )
}


