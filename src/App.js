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
import CarteVisite from './pages/site_pages/CarteVisite';
import FlyerFairePart from './pages/site_pages/FlyerFairePart';
import Presentations from './pages/site_pages/Presentations';
import SiteWeb from './pages/site_pages/SiteWeb';
import TraitementDeText from './pages/site_pages/TraitementDeText';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <div>
        {/* <Sidebar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<SitePage />} />
          <Route path="/main_back" element={<MainBack />} />
          <Route path="/carte_visite" element={<CarteVisite />} />
          <Route path="/flyerfairepart" element={<FlyerFairePart />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/siteweb" element={<SiteWeb />} />
          <Route path="/traitement_textes" element={<TraitementDeText />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
