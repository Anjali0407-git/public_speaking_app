import { Typography, Box, Rating, Paper, Grid } from '@mui/material';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const FeedbackPage = () => {
  // Sample data for Doughnut Chart
  const eyeContactData = {
    labels: ['Maintained', 'Not Maintained'],
    datasets: [
      {
        label: 'Eye Contact During Presentation',
        data: [70, 30],
        backgroundColor: ['#3f51b5', '#ff4081'],
        hoverOffset: 4
      }
    ]
  };

  // Sample data for Bar Chart
  const verbalCommunicationData = {
    labels: ['Clarity', 'Volume', 'Pacing'],
    datasets: [
      {
        label: 'Verbal Communication Scores',
        data: [8, 6, 7],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336']
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1.5  // Reducing the aspect ratio to make the chart smaller
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Feedback and Analysis
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Pace and Confidence</Typography>
            <Rating name="read-only" value={4} readOnly />
            <Typography variant="body2">
              Your pacing is good, showing confidence in your delivery.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Non-Verbal Communication</Typography>
            <Rating name="gesture-rating" value={3} readOnly />
            <Typography variant="body2">
              Work on your gestures and facial expressions for better engagement.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Eye Contact</Typography>
            <Doughnut data={eyeContactData} options={chartOptions} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Verbal Communication</Typography>
            <Bar data={verbalCommunicationData} options={chartOptions} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeedbackPage;
