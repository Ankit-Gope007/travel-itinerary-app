import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Homepage';
import Add from './pages/AddTrip/Add';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;