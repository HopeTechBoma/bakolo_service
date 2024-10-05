import React from 'react';
import ItemCarousel from '../Carousel';
import Hospital from '../Hospital';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const MainBack = () => {

  return (
    <div>
        <Sidebar />
       <Routes>
        <Route path="/hospital" element={<Hospital />} />
    </Routes>
    </div>
  );
};

export default MainBack;
