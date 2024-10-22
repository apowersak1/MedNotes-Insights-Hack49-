import React, { useState } from "react";
import UploadDocument from "./components/UploadDocument";
import Diagnosis from "./components/Diagnosis";
import Cart from "./components/Cart";
import Auth from "./components/auth";

export default function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUploadComplete = async (file) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock response
      const mockResult = {
        diagnosis: {
          diagnosis: "Suspected upper respiratory infection",
          treatments: [
            "Acetaminophen 500mg",
            "Ibuprofen 400mg",
            "Nasal decongestant spray",
            "Throat lozenges",
            "Hydration solution",
          ],
        },
      };

      setResult(mockResult);
    } catch (error) {
      console.error("Error during analysis:", error);
      setError("An error occurred during the analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Medical AI Assistant
        </h1>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <UploadDocument
              onUploadComplete={handleUploadComplete}
              isLoading={isLoading}
            />
            <Diagnosis diagnosis={result?.diagnosis} isLoading={isLoading} />
          </div>
          <Cart
            recommendations={result?.diagnosis?.treatments || []}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}
