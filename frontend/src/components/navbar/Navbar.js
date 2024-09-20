import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <h3>Settings</h3>
            <ul className="navLists">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;