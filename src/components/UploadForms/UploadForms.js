import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './UploadForms.css';

function UploadForms() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState('');
  const [uploadResult, setUploadResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewSrc(URL.createObjectURL(file));
      setUploadResult('');
      setIsLoading(false); // Start loading

    }
  };

  const handleUpload = async () => {
  const formData = new FormData();
  formData.append('file', selectedFile);
  setIsLoading(true); // Start loading

  try {
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Update the uploadResult state based on the response
    if (data.result === true) {
      setUploadResult("Yep, that's a bird!");
    } else {
      setUploadResult("Nope, not a bird...");
    }
    setIsLoading(false); // Stop loading once the response is received

  } catch (error) {
    console.error('Upload Error:', error);
    setUploadResult("Error in processing the file.");
  }
};

  
  return (
    <div className="App">
      <div className="App-body">
        <h1 className="title">Bird Identifier v1</h1>
        <h2 className='subtitle'>Need to identify a bird?</h2>
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose Image
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} style={{display: 'none'}} accept="image/*" />
        {previewSrc && <img src={previewSrc} alt="Preview" className="image-preview" />}
        {selectedFile && <p className="file-name">{selectedFile.name}</p>}
        <button onClick={handleUpload}>Analyze</button>
        {isLoading && <div className="loader"></div>}
        {uploadResult && (
          <p className="result-message" style={{ color: uploadResult.includes("Yep") ? "#4CAF50" : "#f44336" }}>
            {uploadResult}
          </p>
        )}
        {uploadResult && <Link className='link-to-about' to="/about">About</Link>}


      </div>
    </div>
  );
}

export default UploadForms;
