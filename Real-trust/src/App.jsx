import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './firebase/AuthProvider';
import AdminPanel from './pages/AdminPanel';
import Home from './pages/Home';
import Login from './pages/Login';
// import AdminButton from './components/AdminButton';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This function simulates login success
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
     
    </Routes>
  </Router>
  );
}

export default App;
