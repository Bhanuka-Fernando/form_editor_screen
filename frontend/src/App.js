import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';



function App() {

  const [fields, setFields] = useState([]);

  // Function to add a new field
  const addField = (field) => {
    setFields([...fields, field]);
  };

  // Function to remove a field
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };


  return (

      <div className="left-container">
      <Navbar fields={fields} onAddField={addField} onRemoveField={removeField} />

        <div className="right-content">
          
        </div>
      </div>

  );
}

export default App;
