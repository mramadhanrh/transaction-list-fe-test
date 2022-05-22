import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TransactionDetail from './pages/TransactionDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<TransactionDetail />} />
    </Routes>
  );
}

export default App;
