import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { useState, useEffect } from 'react';

const VideoCapture = ({ documentUrl }) => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [videoURL, setVideoURL] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('images/normal.jpg');

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'b':
          setBackgroundImage('/images/bored.jpg');
          break;
        case 'f':
          setBackgroundImage('/images/focussed.jpg');
          break;
        case 'h':
          setBackgroundImage('/images/happy.jpg');
          break;
        case 'l':
          setBackgroundImage('/images/laughing.jpg');
          break;
        case 'n':
          setBackgroundImage('/images/normal.jpg');
          break;
        case 's':
          setBackgroundImage('/images/sleepy.jpg');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleStartCapture = () => {
    setRecording(true);
    const stream = webcamRef.current.stream;
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    let chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const completeBlob = new Blob(chunks, { type: "video/webm" });
      console.log('complete blob', completeBlob);
      const videoURL = URL.createObjectURL(completeBlob);
      console.log('Video URL:', videoURL);
      setVideoData(completeBlob);
      setVideoURL(videoURL);
    };
    recorder.start();
    setMediaRecorder(recorder);
  };

  const handleStopCapture = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const handleUpload = async () => {
    if (videoData) {
      const formData = new FormData();
      formData.append('video', videoData, 'video.webm');
      try {
        const response = await fetch('http://localhost:5000/api/videos/upload', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        console.log(result);
        alert('Upload successful');
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed');
      }
    }
  };
  

  return (
    // <div style={{ 
    //   position: 'relative',
    //   width: '100%', 
    //   height: '100vh',
    //   backgroundImage: `url(${backgroundImage})`,
    //   backgroundSize: 'cover'
    // }}>
    //   <Webcam audio={false} ref={webcamRef} style={{
    //       position: 'absolute',
    //       left: '10px',
    //       bottom: '10px',
    //       width: '160px',
    //       height: '120px'
    //     }}/>
    //   {recording ? (
    //     <button onClick={handleStopCapture}>Stop Capture</button>
    //   ) : (
    //     <button onClick={handleStartCapture}>Start Capture</button>
    //   )}
    //   <button onClick={handleUpload} disabled={!videoData}>Upload Video</button>
    //   {/* {videoURL && <video src={videoURL} controls />} */}
    // </div>

    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div style={{ flex: 1, position: 'relative', backgroundImage: `url(images/normal.jpg)`, backgroundSize: 'cover' }}>
        <Webcam audio={false} ref={webcamRef} style={{
            position: 'absolute',
            left: '10px',
            bottom: '10px',
            width: '160px',
            height: '120px'
        }}/>

        {recording ? (
          <button onClick={handleStopCapture}>Stop Capture</button>
          ) : (
            <button onClick={handleStartCapture}>Start Capture</button>
        )}

        <button onClick={handleUpload} disabled={!videoData}>Upload Video</button>
          {/* {videoURL && <video src={videoURL} controls />} */}
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {documentUrl && <iframe src={documentUrl} style={{ width: '100%', height: '100%' }} />}
      </div>
    </div>
  );
};

export default VideoCapture;
//