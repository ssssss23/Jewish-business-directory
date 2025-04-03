
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Jewish Business Directory</h1>
      <p>Find Jewish-owned businesses near you!</p>
      <Link to="/businesses">Browse Businesses</Link>
    </div>
  );
}

export default Home;
    