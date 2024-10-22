import React from "react";

const Diagnosis = ({ diagnosis, isLoading }) => {
  if (isLoading) {
    return <div>Loading diagnosis...</div>;
  }

  if (!diagnosis) {
    return <div>No diagnosis available</div>;
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Diagnosis</h2>
      <p>{diagnosis.diagnosis}</p>
      {diagnosis.treatments && diagnosis.treatments.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mt-4 mb-2">
            Recommended Treatments
          </h3>
          <ul className="list-disc pl-5">
            {diagnosis.treatments.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diagnosis;
