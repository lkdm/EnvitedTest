import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/CreatePage';
import Index from './pages/IndexPage';
import Layout from './components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create" element={<Create />} />
        <Route path="event"  element={<Index />} />
      </Routes>
    </Layout>
  );
}

export default App;
