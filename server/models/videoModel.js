const mongoose = require("mongoose");

const Video = mongoose.model('Video', {
    title: String,
    path: String,
    date: { type: Date, default: Date.now },
  });

module.exports = {Video};