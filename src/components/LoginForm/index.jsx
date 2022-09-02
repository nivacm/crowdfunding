import React, { useState } from 'react'
import './styles.css';

import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const navigate = useNavigate()
    
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    
    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json()
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(credentials.username && credentials.password) {
            postData().then((response) => {
            window.localStorage.setItem('token', response.token);
            navigate('/');
        });
    }
};
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2> Sign In </h2>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} 
                type="text"
                id="username"/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} 
                type="password"
                id="password"/>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </form>
    )

}

export default LoginForm