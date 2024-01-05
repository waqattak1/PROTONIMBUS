import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Protonimbus&reg;</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
