import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecordSessionPage from './components/RecordSessionPage';
import HomePage from './components/HomePage';
import VideosPage from './components/VideosPage';
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/record-session" element={<RecordSessionPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
