const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const videoRoutes = require('./routes/videoRoutes');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/videos', videoRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/videoDB');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Hello, world! The server is running and can respond to requests.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//
