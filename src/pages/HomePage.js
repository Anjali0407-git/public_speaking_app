import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App-header">
      <h1>Welcome to the Public Speaking Practice App</h1>
      <Link to="/record-session" className="App-link">
        Record a Session
      </Link>
    </div>
  );
}

export default HomePage;
