import React, { useState } from 'react';
import Auth from './components/Auth';
import DocumentUpload from './components/DocumentUpload';
import Diagnosis from './components/Diagnosis';
import Cart from './components/Cart';
import './styles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const handleUploadComplete = (result) => {
    setDiagnosis(result);
    setCart(result.treatments);
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Medical Analyzer</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <main>
        {!diagnosis && <DocumentUpload onUploadComplete={handleUploadComplete} />}
        {diagnosis && <Diagnosis diagnosis={diagnosis} />}
        <Cart items={cart} setItems={setCart} />
      </main>
    </div>
  );
}

export default App;