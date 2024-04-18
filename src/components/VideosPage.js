import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/videos/list')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Recordings</h1>
      <div>
        {videos.map(video => (
          <video key={video.path} src={`http://localhost:5000/uploads/${video.path}`} controls />
        ))}
      </div>
    </div>
  );
}

export default VideosPage;
