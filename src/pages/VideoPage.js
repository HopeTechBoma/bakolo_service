import React from 'react';
// import ItemCarousel from '../components/Carousel';
import Navbar from '../components/website/Navbar';
import VideoContentPage from './VideoContentPage';
import SiteFooter from './site_component/SiteFooter';

const VideoPage = () => {

  return (
    <>
    <div class="video_main_zone">
        {/* <Navbar /> */}
        <VideoContentPage />
    </div>
    <SiteFooter /></>
  );
};

export default VideoPage;
