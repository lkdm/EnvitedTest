import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="create" />
        <Route path="event" />
      </Routes>
    </div>
  );
}

export default App;
