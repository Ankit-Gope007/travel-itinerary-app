import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Homepage';
import Add from './pages/AddTrip/Add';
import Footer from './pages/Home/components/Footer';
import ProfilePage from './pages/Profile/ProfilePage';
import WeatherSearch from './pages/Search/WeatherSearch';
import LikePage from './pages/Like/LikePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<WeatherSearch />} />
        <Route path="/like" element={<LikePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;