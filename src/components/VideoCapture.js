// import React, { useRef } from 'react';
// import Webcam from "react-webcam";

// const VideoCapture = () => {
//   const webcamRef = useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc);
//     // Here, you'd handle uploading the captured image
//   }, [webcamRef]);

//   return (
//     <>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//       />
//       <button onClick={capture}>Capture photo</button>
//     </>
//   );
// };

// export default VideoCapture;

// VideoCapture.js
import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { useState } from 'react';

const VideoCapture = () => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [videoURL, setVideoURL] = useState('');

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

  // const handleUpload = async () => {
  //   if (videoData) {
  //     const formData = new FormData();
  //     formData.append('video', videoData, 'video.webm');
  //     console.log('video data', videoData);
  //     console.log('form data', formData);
  //     try {
  //       await fetch('http://localhost:5000/api/videos/upload', {
  //         method: 'POST',
  //         body: formData,
  //       });
  //       alert('Upload successful');
  //     } catch (error) {
  //       console.error('Upload failed:', error);
  //       alert('Upload failed');
  //     }
  //   }
  // };
  const handleUpload = async () => {
    if (videoData) {
      const formData = new FormData();
      formData.append('video', videoData, 'video.webm');
      try {
        const response = await fetch('http://localhost:5000/api/videos/upload', { // Adjust the URL based on your setup
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        console.log(result); // Log the response from the server
        alert('Upload successful');
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed');
      }
    }
  };
  

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} />
      {recording ? (
        <button onClick={handleStopCapture}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCapture}>Start Capture</button>
      )}
      <button onClick={handleUpload} disabled={!videoData}>Upload Video</button>
      {videoURL && <video src={videoURL} controls />}
    </div>
  );
};

export default VideoCapture;
//