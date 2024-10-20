import React from 'react';
import ItemCarousel from '../Carousel';
import Hospital from '../Hospital';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import VideoPage from '../VideoPage';

const MainBack = () => {

  return (
    <div>
        {/* <Sidebar /> */}
        <VideoPage />
       <Routes>
        <Route path="/hospital" element={<Hospital />} />
    </Routes>
    </div>
  );
};

export default MainBack;
