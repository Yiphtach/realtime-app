// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved">Saved Recipes</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/random">Random Meal</Link>
        </li>
        <li>
          <Link to="/search">Search by Name</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
