import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

function LoginForm() {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

const postData = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
    );
    return response.json();
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
        postData().then((response) => {
            console.log(response)
            if (response.token) {
                window.localStorage.setItem("token", response.token);
                console.log(response.status)
                localStorage.setItem('username', credentials.username);
                console.log('logged in', localStorage.getItem('username'));
                navigate("/users/:id")
            }
            else {
                alert("Username or Password is incorrect. Please try again.")
                console.log("log-in failed")
            }
        })
        .catch(err => {
            
            console.log(err);
        })    
    }        

};

    return (
        <form>
            <div>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    placeholder='Enter username'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input
                type='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
                />
            </div>
            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    )
}

export default LoginForm;