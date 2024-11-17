// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/saved"> Saved Recipes </Link>
    </nav>
  );
}

export default Navbar;
