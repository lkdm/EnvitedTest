import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/CreatePage';
import Index from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create" element={<Create />} />
        <Route path="event"  element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
