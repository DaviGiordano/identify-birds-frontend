import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      setSelectedFile(null);
      setFileName('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your file upload logic here,
    // using Fetch API, Axios, or another suitable method
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Replace with your backend endpoint and error handling
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then(() => {
          console.log('File uploaded successfully!');
          setSelectedFile(null);
          setFileName('');
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          // Display an error message to the user
        });
    }
  };

  return (
    <div className="file-uploader">
      <h1 className="title">Bird Identifier</h1>
      <p>Need to identify a bird?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">
          <input
            id="file-input"
            type="file"
            accept=".jpg,.jpeg,.png" // Add desired image types
            onChange={handleChange}
          />
          {/* {selectedFile && <span className="filename">{fileName}</span>} */}
        </label>
        <button type="submit">Choose and Upload Image</button>

      </form>
    </div>
  );
}

export default FileUploader;
