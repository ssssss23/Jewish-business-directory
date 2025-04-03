
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/businesses">Businesses</Link>
      <Link to="/add-business">Add Business</Link>
      <Link to="/deals">Deals</Link>
    </nav>
  );
}

export default Navbar;
    