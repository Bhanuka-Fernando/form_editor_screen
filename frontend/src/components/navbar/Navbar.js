import React, { useState } from "react";
import './Navbar.css'

const Navbar = ({ fields, onAddField, onRemoveField, welcomeData, onUpdateWelcomeData, emailData, onUpdateEmailData }) => {
    
  const [showPopup, setShowPopup] = useState(false);
  const [editingField, setEditingField] = useState(null); 

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
  }

  // Real-time change handlers
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (editingField === "Welcome Screen") {
      onUpdateWelcomeData(name, value);
    } else if (editingField === "Enter Your Email") {
      onUpdateEmailData(name, value);
    }
  };

  return (
    <nav className="navbar">
      {/* Display added fields */}
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
     
      {/* Welcome Screen Form */}
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

      {/* Enter Your Email Form */}
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
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleDiscard}>Discard</button>
            </div>
          </form>
        </div>
      )}

      {/* Add Field Button */}
      {editingField === null && (
        <button className="btn-add-field" onClick={togglePopup}>
          Add Field
        </button>
      )}

      {/* Popup for Adding Fields */}
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
