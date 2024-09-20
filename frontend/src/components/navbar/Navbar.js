import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Hide the form when navigating to any path other than the root
        if (location.pathname !== "/") {
            setShowForm(false);
        }
    }, [location]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Title: ${formData.title}\nDescription: ${formData.description}`);
        setFormData({ title: '', description: '' });
        setShowForm(false);
    };

    return (
        <div className="navbar">
            <button className="BackButton" onClick={handleBack}>
                &larr; Back
            </button>
            <h3>Settings</h3>
            
            <ul className="navLists">
                <li>
                    <Link to="/" onClick={() => setShowForm(true)}>Welcome Screen</Link>
                    <br /><br />
                    {showForm && (
                        <form className="homeForm" onSubmit={handleSubmit}>
                            <div className="formG">
                                <label htmlFor="title">Title: </label>
                                <input 
                                    type="text" 
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="formG">
                                <label htmlFor="description">Description: </label>
                                <input 
                                    type="text" 
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="fromSubmit">Submit</button>
                        </form>
                    )}
                </li>
                {!showForm && (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
