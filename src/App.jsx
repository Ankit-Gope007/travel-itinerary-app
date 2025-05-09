import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Homepage';
import Add from './pages/AddTrip/Add';
import Footer from './pages/Home/components/Footer';
import ProfilePage from './pages/Profile/ProfilePage';
import WeatherSearch from './pages/Search/WeatherSearch';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<WeatherSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;