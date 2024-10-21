import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export default function UploadDocument({ onUploadComplete, isLoading }) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUploadComplete(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onUploadComplete(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">Upload Medical Document</h2>
      <form
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
      >
        <div
          className={`flex items-center justify-center w-full ${
            dragActive ? 'border-blue-600' : 'border-blue-300'
          } border-2 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-300 ease-in-out`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-blue-400" />
              <p className="mb-2 text-sm text-blue-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-blue-500">PDF, DOC, DOCX or TXT (MAX. 10MB)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleChange}
              disabled={isLoading}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>
        {isLoading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-blue-600">Analyzing document...</p>
          </div>
        )}
      </form>
    </div>
  );
}
