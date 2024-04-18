// const express = require('express');
// const router = express.Router();
// const {Video} = require("../models/videoModel");

// router.post('/upload', (req, res) => {
//   const { title, path } = req.body;
//   const video = new Video({ title, path });
//   video.save().then((doc) => res.json(doc));
// });

// module.exports = router;

const express = require('express');
const multer = require('multer');
const router = express.Router();
const { Video } = require("../models/videoModel");
const fs = require('fs');
const path = require('path');

// Configure multer for video storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No video file uploaded.');
  }
  console.log('video path', req.file.path);
  // req.file.path will have the path of the uploaded video file
  const video = new Video({
    title: "Video Title", // You might want to send the title from the frontend or generate it some other way
    path: req.file.path
  });
  video.save().then((doc) => res.json(doc));
});

// Listing videos directly from the file system
router.get('/list', (req, res) => {
  const uploadsDirectory = path.join(__dirname, '../uploads');

  fs.readdir(uploadsDirectory, (err, files) => {
    if (err) {
      console.log("Failed to list contents of directory:", err);
      return res.status(500).send('Unable to list video files');
    }

    const videos = files.map(file => ({
      title: file,
      path: file
    }));
    console.log('videos', videos);
    res.json(videos);
  });
});

module.exports = router;

