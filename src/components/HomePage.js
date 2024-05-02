import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/videos/list')
      .then(response => response.json())
      .then(setVideos)
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Public Speaking Practice App
        </Typography>
        <Button variant="contained" component={Link} to="/record-session" style={{ margin: '10px' }}>
          Record a Session
        </Button>
        <Button variant="outlined" component={Link} to="/videos" style={{ margin: '10px' }}>
          My Recordings
        </Button>
      </div>
    </Container>
  );
}

export default HomePage;
