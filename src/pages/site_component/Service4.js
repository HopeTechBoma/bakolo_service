

import React from 'react';

const Service4 = () => {
  return (

    <div class='bac_services service2'>
        <div class="left-side service-child padding_left_el">
        <div class="service-title"><h2>Montage videos</h2></div>
        <div className='back_service_overview'>
          <p>
          Vous cherchez à donner vie à vos vidéos et à créer un impact durable auprès de votre audience
          En tant que monteur vidéo expérimenté, je suis là pour transformer vos séquences brutes en véritables chefs-d'œuvre audiovisuels.
          </p>
        </div>
            
            <div class="service-text-content">
            <ul>
              <li>Vidéos de présentation d'entreprise 
                <div className='service_description'> Pour présenter l'histoire, les valeurs, les produits ou les services d'une entreprise.</div>
              </li>

              <li>Spots publicitaires
                <div className='service_description'> Pour promouvoir un produit ou un service de manière courte et percutante.</div>
              </li>

              <li>Vidéos de démonstration
                <div className='service_description'> Pour montrer les avantages d'un produit en situation réelle.</div>
              </li>

              <li>Reportages vidéo 
                <div className='service_description'> Pour couvrir un événement (conférence, séminaire, lancement de produit) et en créer un souvenir.</div>
              </li>

              <li>Vidéos pour les réseaux sociaux
                <div className='service_description'> 
                Stories : Des vidéos courtes et créatives pour les réseaux sociaux comme Instagram et Snapchat.

                <div>
                Reels : Des vidéos courtes et divertissantes pour TikTok et Instagram.
                Lives : Des vidéos en direct pour interagir avec la communauté.
                </div>
                </div>
              </li>

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

