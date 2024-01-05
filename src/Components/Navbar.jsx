import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Protonimbus&trade;</h1>
      <div className="nav-links">
        <Link to="/home">Home</Link> {/* Updated link to Main */}
        <Link to="/">About</Link> {/* Updated link to About */}
      </div>
    </nav>
  );
};

export default Navbar;
