import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Order from './Pages/CorporateClients';
import CorporateClients from './Pages/CorporateClients';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/home" element={<About />} /> 
          <Route path="/CorporateClients" element={<CorporateClients />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
