import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', email: '' });
    const navigate = useNavigate();

    const addField = (fieldName) => {
        if (!fields.includes(fieldName)) {
            setFields([...fields, fieldName]);
        }
    };

    const removeField = (fieldName) => {
        setFields(fields.filter(field => field !== fieldName));
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
        alert(`Title: ${formData.title}, Description: ${formData.description}, Email: ${formData.email}`);
        setFormData({ title: '', description: '', email: '' });
    };

    return (
        <div className="navbar">
            <button className="BackButton" onClick={() => navigate(-1)}>
                &larr; Back
            </button>
            <h3>Form Editor</h3>

            {/* Add Field Button */}
            <button className="AddFieldButton" onClick={() => addField("Enter Your Mail")}>
                Add a Field
            </button>

            <ul className="navLists">
                {fields.map((field, index) => (
                    <li key={index}>
                        {field}
                        <button onClick={() => removeField(field)}>Remove</button>
                    </li>
                ))}
            </ul>

            {/* Only show the form when fields have been added */}
            {fields.length > 0 && (
                <form onSubmit={handleSubmit}>
                    {fields.includes("Welcome Screen") && (
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
                    )}
                    {fields.includes("Profile") && (
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
                    )}
                    {fields.includes("Enter Your Mail") && (
                        <div className="formG">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <button type="submit" className="fromSubmit">Submit</button>
                    {/* Buttons for adding different fields */}
<button onClick={() => addField("Welcome Screen")}>Add Welcome Screen</button>
<button onClick={() => addField("Profile")}>Add Profile</button>
<button onClick={() => addField("Enter Your Mail")}>Add Enter Your Mail</button>

                </form>
            )}
        </div>
    );
};

export default Navbar;
