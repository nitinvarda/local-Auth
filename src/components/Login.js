import React, { useState } from 'react';
// import Main from './Main';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [data, setData] = useState({
        name: '',
        password: '',

    })
    const [auth, setAuth] = useState('')
    const [errors, setErrors] = useState([])
    const { name, password } = data;

    const change = (e) => {
        setErrors('')
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const login = (e) => {
        e.preventDefault();
        if (localStorage.getItem('users')) {
            const users = JSON.parse(localStorage.getItem('users'))
            const find = users.filter(user => user.name === name && user.password === password)

            if (find.length > 0) {
                setAuth('success')
                localStorage.setItem('auth', 'authenticated')
            }
            else {

                setErrors(['invalid credentials'])
            }
        }
    }
    if (localStorage.getItem('auth')) {
        return (
            <Redirect to="/" />
        )
    }
    else {
        if (auth === 'success') {
            return (<Redirect to="/" />)
        }
        else {
            return (
                <div className="container">

                    {errors.length > 0 ? (errors.map(error => <h6 style={{ textAlign: 'center', color: 'red' }}>{error}</h6>)) : (<div></div>)}
                    <h3 style={{ textAlign: 'center' }}>Login Here</h3>
                    <form onSubmit={login} className="loginform">
                        <div className="login-start">
                            <div className="login-form">
                                <label>Name</label><br />
                                <input type="text" name='name' value={name} onChange={change} required />

                            </div>
                            <div className="login-form">
                                <label>Password</label><br />
                                <input type="password" name="password" value={password} onChange={change} required />

                            </div>

                            <br />
                            <button type="submit" className="btn btn-primary login-button" >Login</button>

                        </div>
                    </form>
                    <br />
                    <div >
                        <h6 style={{ textAlign: "center" }}>Don't have an account ? <Link to="/signup">Sign Up here</Link>  </h6>
                    </div>

                </div>
            );
        }

    }

}

export default Login;
