import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 auto', // Centering the container
    padding: '20px', // Padding around the edges
    maxWidth: '1200px', // Max width of the container
  },
  video: {
    width: '100%', // Full width but can be less based on container size
    maxHeight: '250px', // Limiting video height
  },
  button: {
    marginTop: '10px',
    width: '100%',
  }
}));

function VideosPage() {
  const [videos, setVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:5000/api/videos/list')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(console.error);
  }, []);

  return (
    <div className={classes.container}>
      <h1>My Recordings</h1>
      <Grid container spacing={3}>
        {videos.map(video => (
          <Grid item xs={12} sm={6} md={4} key={video.path}>
            <video src={`http://localhost:5000/uploads/${video.path}`} controls className={classes.video} />
            <Button variant="contained" color="primary" component={Link} to="/feedback" className={classes.button}>
              View Feedback
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideosPage;
