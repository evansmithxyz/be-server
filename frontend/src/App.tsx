import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Homepage />} />
    </Routes>
  );
};

export default App;
