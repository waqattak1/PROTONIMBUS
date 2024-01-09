import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Order from './Pages/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} /> {/* About as the main page */}
          <Route path="/home" element={<About />} /> {/* Main as the secondary page */}
          <Route path="/Order" element={<Order />} /> {/* Main as the secondary page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
