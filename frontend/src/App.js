import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/home/Welcome';
import Email from './components/email/Email';

function App() {
  const [welcomeData, setWelcomeData] = useState({
    title: "",
    description: "",
    image: ""
  });

  const [emailData, setEmailData] = useState({
    email: ""
  });

  const [fields, setFields] = useState([]);

  const updateEmailData = (name, value) => {
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const realTimeWelcomeData = (name, value) => {
    setWelcomeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addField = (field) => {
    setFields([...fields, field]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  return (
    <Router>
      <div className="left-container">
        <Navbar
          fields={fields}
          onAddField={addField}
          onRemoveField={removeField}
          welcomeData={welcomeData}
          emailData={emailData}
          onUpdateWelcomeData={realTimeWelcomeData}
          onUpdateEmailData={updateEmailData}
        />

        <div className="right-content">
          <Routes>
            <Route path="/" element={<Welcome welcomeData={welcomeData} />} />
            <Route path="/email" element={<Email emailData={emailData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
