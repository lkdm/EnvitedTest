import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/CreatePage';
import Index from './pages/IndexPage';
import Layout from './components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import EventPage from './pages/EventPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="create" element={<Layout><Create /></Layout>} />
        <Route path="event"  element={<EventPage />} />
      </Routes>
  );
}

export default App;
