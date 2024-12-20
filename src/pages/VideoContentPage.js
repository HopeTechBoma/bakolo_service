import React from 'react';
import Navbar from '../components/website/Navbar';

const VideoContentPage = () => {
  return (
    <>
    <div class="section7 transition_element t2_control">
      <div class="video-bg">
        <div class="vid_text_section"><h1>NOUS CREONS LES VIDEOS </h1>
        </div><div class="overlaybd"></div>
          <div>
          <video
          width="100%"
          height="100%"
          autoPlay
          muted
          controls
          loop
          playsInline
          id="myVideosd"
        >
          <source src="/videos/vid_transition1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              
              </div></div></div>
    <div className="w3-main test_class" style={{ width: '90%' }}>
    
      <div className="w3-row-padding">
        {[
            "/images/services/business-card-design-professional-minimalist-600nw-2476884681.webp", 
            "/images/services/flyers_elements.webp", 
            "/images/services/montage_video.jpg"
        ].map((src, index) => (
          <div className="w3-third w3-container w3-margin-bottom" key={index}>
            <img src={src} alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" />
            <div className="w3-container w3-white">
              <p><b>Carte de Visites</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default VideoContentPage;
