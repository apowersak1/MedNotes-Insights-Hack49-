import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Diagnosis({ diagnosis, isLoading }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
        <Stethoscope className="mr-2" />
        Diagnosis
      </h2>
      {isLoading ? (
        <p className="text-gray-600">Analyzing document...</p>
      ) : diagnosis ? (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="font-semibold text-blue-700">{diagnosis}</p>
        </div>
      ) : (
        <p className="text-gray-600">No diagnosis available. Please upload a document.</p>
      )}
    </div>
  );
}
