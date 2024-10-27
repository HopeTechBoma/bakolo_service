// import React from 'react';

// const FlyerFairePart = () => {
//   return (

//     <div>
//         <h1>Le contenu est encore de chargement</h1>
//         <h2>Vous pouvez envoyer votre numero discuter d'un besoin spécifique</h2>
//     </div>
//   );
// };

// export default FlyerFairePart;
import React from 'react';
import SiteFooter from '../site_component/SiteFooter';

const FlyerFairePart = () => {

  return (
    <>
    <div class="section7 transition_element t2_control flyers_header_bg">
      <div class="video-bg">
        <div class="vid_text_section"><h1>  </h1>
        </div>
          </div>
      </div>

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
    <SiteFooter /></>
  );
};

export default FlyerFairePart;


