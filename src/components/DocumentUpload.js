import React, { useState } from 'react';

function DocumentUpload({ onUploadComplete }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    // Simulate file upload and analysis
    setTimeout(() => {
      const mockResult = {
        diagnosis: 'Hypertension',
        treatments: ['Lisinopril', 'Hydrochlorothiazide', 'Low-sodium diet']
      };
      onUploadComplete(mockResult);
    }, 2000);
  };

  return (
    <div className="upload-container">
      <h2>Upload Medical Document</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt" required />
        <button type="submit" disabled={!file}>Analyze Document</button>
      </form>
    </div>
  );
}

export default DocumentUpload;