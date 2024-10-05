import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hospital from './pages/Hospital';
import Ecole from './pages/Ecole';
import SitePage from './pages/SitePage';
import SalleDeMariage from './pages/SalleDeMariage';
import MainBack from './pages/backend/MainBack';
import firebase from './firebase';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <div>
        <SitePage />
        <Routes>
          <Route path="/main_back" element={<MainBack />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
