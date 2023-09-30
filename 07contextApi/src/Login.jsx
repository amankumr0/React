import React, { useState, useContext } from 'react';
import UserContext from './context/UserContext';

const Login = () => {
    const { setData } = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handler = () => {
        setData({ username, password })
        setValue("")
        setPassword("")
    }
    return (
        <div>
            <input onChange={(e) => setValue(e.target.value)} value={username} type='text' placeholder='Username' />
            <span>{"    "}</span>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
            <button onClick={handler}>Login</button>
        </div>
    );
}

export default Login;
