// import React from 'react';
// import Navbar from '../components/website/Navbar';

// const SitePageContent = () => {
//   return (
//     <div className="w3-main" style={{ marginLeft: '300px' }}>
//       <header id="portfolio">
//         <a href="#">
//           <img
//             src="/w3images/avatar_g2.jpg"
//             style={{ width: '65px' }}
//             className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
//             alt="Avatar"
//           />
//         </a>
//         <span
//           className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
//           onClick={() => {/* Add w3_open function here */}}
//         >
//           <i className="fa fa-bars"></i>
//         </span>
//         <div className="w3-container">
//           <h1><b>My Portfolio</b></h1>
//           <div className="w3-section w3-bottombar w3-padding-16">
//             <span className="w3-margin-right">Filter:</span>
//             <button className="w3-button w3-black">ALL</button>
//             <button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
//             <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
//             <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
//           </div>
//         </div>
//       </header>

//       <div className="w3-row-padding">
//         {[
//             "/images/services/business-card-design-professional-minimalist-600nw-2476884681.webp", 
//             "/images/services/flyers_elements.webp", 
//             "/images/services/montage_video.jpg"
//         ].map((src, index) => (
//           <div className="w3-third w3-container w3-margin-bottom" key={index}>
//             <img src={src} alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" />
//             <div className="w3-container w3-white">
//               <p><b>Carte de Visites</b></p>
//               <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Repeat the above block for other sections */}

//       <div className="w3-center w3-padding-32">
//         <div className="w3-bar">
//           <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
//           <a href="#" className="w3-bar-item w3-black w3-button">1</a>
//           <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
//           <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
//           <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
//           <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
//         </div>
//       </div>

//       <div className="w3-row-padding w3-padding-16" id="about">
//         <div className="w3-col m6">
//           <img src="/w3images/avatar_g.jpg" alt="Me" style={{ width: '100%' }} />
//         </div>
//         <div className="w3-col m6">
//           <img src="/w3images/me2.jpg" alt="Me" style={{ width: '100%' }} />
//         </div>
//       </div>

//       <div className="w3-container w3-padding-large" style={{ marginBottom: '32px' }}>
//         <h4><b>About Me</b></h4>
//         <p>Just me, myself and I, exploring the universe of unknownment...</p>
//         <hr />
//         <h4>Technical Skills</h4>
//         {/* Skills section */}
//         <p>Photography</p>
//         <div className="w3-grey">
//           <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: '95%' }}>95%</div>
//         </div>
//         <p>Web Design</p>
//         <div className="w3-grey">
//           <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: '85%' }}>85%</div>
//         </div>
//         <p>Photoshop</p>
//         <div className="w3-grey">
//           <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: '80%' }}>80%</div>
//         </div>
//         <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
//           <i className="fa fa-download w3-margin-right"></i>Download Resume
//         </button>
//         <hr />
//         <h4>How much I charge</h4>
//         {/* Pricing section */}
//       </div>

//       <div className="w3-container w3-padding-large w3-grey">
//         <h4 id="contact"><b>Contact Me</b></h4>
//         <div className="w3-row-padding w3-center w3-padding-24" style={{ margin: '0 -16px' }}>
//           <div className="w3-third w3-dark-grey">
//             <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
//             <p>email@email.com</p>
//           </div>
//           <div className="w3-third w3-teal">
//             <p><i className="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
//             <p>Chicago, US</p>
//           </div>
//           <div className="w3-third w3-dark-grey">
//             <p><i className="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
//             <p>512312311</p>
//           </div>
//         </div>
//         <hr className="w3-opacity" />
//         <form action="/action_page.php" target="_blank">
//           <div className="w3-section">
//             <label>Name</label>
//             <input className="w3-input w3-border" type="text" name="Name" required />
//           </div>
//           <div className="w3-section">
//             <label>Email</label>
//             <input className="w3-input w3-border" type="text" name="Email" required />
//           </div>
//           <div className="w3-section">
//             <label>Message</label>
//             <input className="w3-input w3-border" type="text" name="Message" required />
//           </div>
//           <button type="submit" className="w3-button w3-black w3-margin-bottom">
//             <i className="fa fa-paper-plane w3-margin-right"></i>Send Message
//           </button>
//         </form>
//       </div>

//       <div className="w3-container w3-padding-32 w3-dark-grey">
//         <div className="w3-row-padding">
//           <div className="w3-third">
//             <h3>FOOTER</h3>
//             <p>Praesent tincidunt sed tellus ut rutrum...</p>
//             <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
//           </div>
//           {/* Other footer sections */}
//         </div>
//       </div>

//       <div className="w3-black w3-center w3-padding-24">
//         Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" rel="noopener noreferrer" className="w3-hover-opacity">w3.css</a>
//       </div>
//     </div>
//   );
// };

// export default SitePageContent;
