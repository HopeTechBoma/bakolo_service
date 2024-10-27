// import React from 'react';

// const Service4 = () => {
//   return (

//     <div class='bac_servicesservice4'>
//         <div class="left-side service-child">
//         <div class="service-title"><h2>Montage Video</h2></div>
//             <div class="service-text-content">
//             Complete protection
// Each Kaspersky plan uses cutting-edge AI technology to detect and stop any type of online threat – even ones that haven’t been seen before. So every time you connect to the internet, we:
// Protect your privacy by blocking unauthorized attempts to access your webcam or track your activity on websites.
// Secure your payments in a hacker-proof Protected Browser when you shop or bank online.
// Keep intruders out of your network and check websites and emails are safe for you to open.
//             </div>
//         </div>
//         <div class="left-side service-child">
//         <img src="/images/services2/Meilleur-logiciel-de-montage-video.webp" alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" />
//         </div>
//     </div>
//   );
// };

// export default Service4;

import React from 'react';

const Service4 = () => {
  return (

    <div class='bac_services service2'>
        <div class="left-side service-child padding_left_el">
        <div class="service-title"><h2>Montage videos</h2></div>
        <div className='back_service_overview'>
          <p>
          Complete protection
Each Kaspersky plan uses cutting-edge AI technology to detect and stop any type of online threat – even ones that haven’t been seen before. So every time you connect to the internet, we:
Protect your privacy by blocking unauthorized attempts to access your webcam or track your activity on websites.
Secure your payments
          </p>
        </div>
            
            <div class="service-text-content">
            <ul>
              <li>Complete protection
Each Kaspersky plan uses cutting-edge AI technology</li>
<li>Complete protection
Each Kaspersky plan uses cutting-edge AI technology</li>
<li>Complete protection
Each Kaspersky plan uses cutting-edge AI technology</li>
<li>Complete protection
Each Kaspersky plan uses cutting-edge AI technology</li>
<li>Complete protection
Each Kaspersky plan uses cutting-edge AI technology</li>
            </ul>
            </div>
        </div>
        <div class="left-side service-child">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          controls
          loop
          playsInline
          id="myVideo2"
          className='background_video'
        >
          <source src="/videos/montage_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video autoplay loop muted playsinline class="background-video">
        <source src="/videos//montage_video.mp4" type="video/mp4" />

    </video> */}
        {/* <img src="/images/services2/Meilleur-logiciel-de-montage-video.webp" alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" /> */}
        {/* <img src="/images/services2/Reliure-dos-carré-collé-cristal.webp" alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" /> */}
        </div>
    </div>
  );
};

export default Service4;

