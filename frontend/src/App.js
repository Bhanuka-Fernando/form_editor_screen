import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/home/Welcome';
import Email from './components/email/Email';


function App() {

  const [welcomeData, setWelcomeData] = useState({
    title:"",
    description: "",
    image: ""
  });

  const [emailData, setEmailData] = useState({
    email: ""
  });

  const [fields, setFields] = useState([]);


  // an function for updating email data
  const updateEmailData = (name, value) => {
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  // an function for real time updating data 
  const realTimeWelcomeData = (name, value) => {
    setWelcomeData((prevData) => ({ ...prevData, [name]:value}));
  };

  // an function for adding new field
  const addField = (field) => {
    setFields([...fields, field]);
  };

  // an function for removing new field
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };


  return (

      <div className="left-container">
      <Navbar fields={fields} 
        onAddField={addField} 
        onRemoveField={removeField}
        welcomeData={welcomeData} 
        emailData={emailData}
        onUpdateWelcomeData={realTimeWelcomeData}
        onUpdateEmailData={updateEmailData}
        />

        <div className="right-content">
          <Welcome welcomeData={welcomeData} />
          <Email emailData={emailData}/>
        </div>
      </div>

  );
}

export default App;
