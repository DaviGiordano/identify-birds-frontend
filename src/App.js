import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About'; 
import UploadForms from './components/UploadForms/UploadForms';

function App() {
  // Your existing states and functions

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <UploadForms />
          }/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
