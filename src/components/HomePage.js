import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/videos/list')
      .then(response => response.json())
      .then(setVideos)
      .catch(console.error);
  }, []);

  return (
    <div className="App-header">
      <h1>Welcome to the Public Speaking Practice App</h1>
      <Link to="/record-session" className="App-link">
        Record a Session
      </Link>
      <div>
        {videos.map(video => (
          <video key={video.path} src={`/uploads/${video.path}`} controls />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
