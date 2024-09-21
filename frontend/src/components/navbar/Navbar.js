import React, { useState } from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Navbar = ({ fields, onAddField, onRemoveField, welcomeData, onUpdateWelcomeData, emailData, onUpdateEmailData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [emailError, setEmailError] = useState(""); // State to store email validation error

  const navigate = useNavigate();  // Initialize the navigation hook

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleFieldClick = (field) => {
    setEditingField(field); // Set the editing field when clicked
  };

  const handleSave = () => {
    setEditingField(null); // Hide form on Save
  };

  const handleDiscard = () => {
    setEditingField(null); // Hide form on Discard
  };

  const handleAddField = (field) => {
    if (!fields.includes(field)) {
      onAddField(field);
    }
    togglePopup();

    // Navigate to the corresponding page
    if (field === "Welcome Screen") {
      navigate('/');
    } else if (field === "Enter Your Email") {
      navigate('/email');
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (editingField === "Welcome Screen") {
      onUpdateWelcomeData(name, value);
    } else if (editingField === "Enter Your Email") {
      if (name === "email") {
        onUpdateEmailData(name, value);  // Always update the input value
        if (validateEmail(value)) {
          setEmailError("");  // Clear error if valid
        } else {
          setEmailError("Please enter a valid email address");  // Show error if invalid
        }
      }
    }
  };
  
    
  

  return (
    <nav className="navbar">
      {editingField === null && (
        <div className="selected-fields">
          {fields.map((field, index) => (
            <div key={index} className="field-item">
              <span onClick={() => handleFieldClick(field)}>{field}</span>
              <button onClick={() => onRemoveField(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {editingField === "Welcome Screen" && (
        <div className="form-container">
          <h3>Welcome Screen Settings</h3>
          <form>
            <div>
              <label htmlFor="title">Enter Your Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={welcomeData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="description">Enter Your Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={welcomeData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="image">Enter Your Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={welcomeData.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleDiscard}>Discard</button>
            </div>
          </form>
        </div>
      )}

      {editingField === "Enter Your Email" && (
        <div className="form-container">
          <h3>Email Settings</h3>
          <form>
            <div>
              <label htmlFor="email">Enter Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={emailData.email}
                onChange={handleInputChange}
              />
              {emailError && <span className="error-message">{emailError}</span>} {/* Error message display */}
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleDiscard}>Discard</button>
            </div>
          </form>
        </div>
      )}

      {editingField === null && (
        <button className="btn-add-field" onClick={togglePopup}>
          Add Field
        </button>
      )}

      {showPopup && editingField === null && (
        <div className="popup">
          <div className="popup-content">
            <h3>Select a field to add:</h3>
            <button onClick={() => { handleAddField("Welcome Screen") }}>Welcome Screen</button>
            <button onClick={() => { handleAddField("Enter Your Email") }}>Enter Your Email</button>
            <button onClick={() => { handleAddField("Enter Your Name") }}>Enter Your Name</button>
            <button className="btn-close" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
