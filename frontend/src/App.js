import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';


function App() {
  return (
    <Router>
      <div className="left-container">
        <Navbar />

        <div className="right-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
