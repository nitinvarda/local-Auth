import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const [data, setData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: ''
    })
    const [progress, setProgress] = useState(false)
    const { name, password, email, phone, profession } = data
    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }
    const submit = (e) => {
        e.preventDefault();
        if (localStorage.getItem('users')) {
            const us = JSON.parse(localStorage.getItem('users'))
            // console.log(us)
            us.push(data);
            localStorage.setItem('users', JSON.stringify(us))
            setProgress(true)
        }
        else {

            localStorage.setItem('users', JSON.stringify([data]))
            setProgress(true)

        }
    }
    if (localStorage.getItem('auth')) {
        return (
            <Redirect to="/" />
        )
    }
    else {
        if (!progress) {




            return (
                <div className="container">
                    <h3 style={{ textAlign: 'center' }}>Sign up here</h3>

                    <form onSubmit={submit} className="sign-form-container">
                        <div className="sign-form">
                            <label>Enter Name</label>
                            <input type="text" name="name" value={name} onChange={change} required />

                        </div>
                        <div className="sign-form">
                            <label>Enter Password</label>
                            <input type="password" name="password" value={password} onChange={change} required />

                        </div>
                        <div className="sign-form">
                            <label>Enter Email</label>
                            <input type="email" name="email" value={email} onChange={change} required />

                        </div>
                        <div className="sign-form">
                            <label>Enter Phone Number</label>
                            <input type="tel" name="phone" value={phone} onChange={change} required />

                        </div>
                        <div className="sign-form">
                            <label>Select Profession</label>
                            <select name="profession" value={profession} onChange={change} required>
                                <option value="">select Profession</option>
                                <option value="Employee">employee</option>
                                <option value="Bussiness">Bussiness</option>
                                <option value="Investor">Investor</option>
                                <option value="Student">Student</option>
                            </select>

                        </div>
                        <br />
                        <button className="btn btn-primary sign-button" type="submit">Sign Up</button>
                    </form>
                    <br />
                    <div >
                        <h6 style={{ textAlign: "center" }}>Already have an account ? <Link to="/login">Login here</Link>  </h6>
                    </div>


                </div>
            );
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}

export default Signup;
