import React, { useState } from "react";
import './Navbar.css'

const Navbar = ({ fields, onAddField, onRemoveField }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [editingField, setEditingField] = useState(null); 
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  const handleFieldClick = (field) => {
    if (field === "Welcome Screen") {
      setEditingField(field); 
    }
  };

  const handleSave = () => {
    setEditingField(null); 
  };

  const handleDiscard = () => {
    setEditingField(null);
  };

  const handleAddField = (field) => {
    if (!fields.includes(field)) {
        onAddField(field);
    }
    togglePopup();
  }


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
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="description">Enter Your Description:</label>
              <input type="text" id="description" name="description" />
            </div>
            <div>
              <label htmlFor="image">Enter Your Image URL:</label>
              <input type="text" id="image" name="image" />
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleDiscard}>Discard</button>
            </div>
          </form>
        </div>
      )}
    

      { editingField === null &&(
        <button className="btn-add-field" onClick={togglePopup}>
        Add Field
        </button>

      )}
      
      {showPopup && editingField == null && (
        <div className="popup">
          <div className="popup-content">
            <h3>Select a field to add:</h3>
            <button onClick={() => { handleAddField("Welcome Screen") }}>Welcome Screen</button>
            <button onClick={() => { handleAddField("Enter Your Email")  }}>Enter Your Email</button>
            <button onClick={() => { handleAddField("Enter Your Name") }}>Enter Your Name</button>
            <button className="btn-close" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
