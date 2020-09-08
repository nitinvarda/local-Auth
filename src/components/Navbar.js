import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" >

            <Link className="navbar-brand" to="/">Home</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav " >
                    <li className="nav-item">
                        <Link to="/login" style={{ color: "white", textDecoration: 'none' }} >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" style={{ color: "white", textDecoration: 'none' }} >Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/info" style={{ color: "white", textDecoration: 'none' }}>Info</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
