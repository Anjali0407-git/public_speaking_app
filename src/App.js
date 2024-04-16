import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecordSessionPage from './components/RecordSessionPage';
import HomePage from './components/HomePage';

function App() {
  return (
    // <Router>
    //   {/* <div className="App">
    //     <header className="App-header">
    //       <Link to="/record-session" className="App-link">Record a Session</Link>
    //     </header>
    //     <Route path="/record-session" component={RecordSessionPage} />
    //   </div> */}
    //   {/* <div className="App"> */}
    //     {/* Define the route for the homepage */}
    //     <Route exact path="/" component={HomePage} />
        
    //     {/* Define the route for the "Record Session" page */}
    //     <Route path="/record-session" component={RecordSessionPage} />
    //   {/* </div> */}
    // </Router>
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the homepage */}
          <Route exact path="/" element={<HomePage />} />
          
          {/* Define the route for the "Record Session" page */}
          <Route path="/record-session" element={<RecordSessionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
