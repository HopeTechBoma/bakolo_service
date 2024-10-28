import React from 'react';

const Service2 = () => {
  return (

    <div class='bac_services service2'>
        <div class="left-side service-child padding_left_el">
        <div class="service-title"><h2>Rapports</h2></div>
        <div className='back_service_overview'>
          <p>
          Nous vous proposons un service sur mesure pour prendre en charge toutes vos tâches de traitement de texte. 
          Que ce soit pour la saisie de données, 
          la mise en page de rapports, 
          la création de tableaux ou la conversion de documents, 
          je m'adapte à vos besoins spécifiques
          </p>
        </div>
            
            <div class="service-text-content">
            <ul>
              <li>Saisie de documents
                <div className='service_description'>
                  <ul>
                    <li>Numérisation de documents manuscrits ou imprimés</li>
                    <li>Saisie de données dans différents formats (Word, Excel, PDF, etc.)</li>
                    <li>Création de tableaux et de graphiques</li>
                  </ul>
                </div>
              </li>
              <li>Mise en forme
              <div className='service_description'>
              <ul>
                    <li>Application de styles et de mises en page personnalisées</li>
                    <li>Insertion d'images, de tableaux et de graphiques</li>
                    <li>Vérification de l'orthographe et de la grammaire</li>
                  </ul>
              </div>
              </li>
              <li>Traitement de données
              <div className='service_description'>
              <ul>
                    <li>Tri et organisation de données</li>
                    <li>Extraction de données</li>
                    <li>Création de bases de données</li>
              </ul>
              </div>
              </li>

            </ul>
            </div>
        </div>
        <div class="left-side service-child saisie_rapport">
        {/* <img src="/images/services2/Reliure-dos-carré-collé-cristal.webp" alt="Portfolio" style={{ width: '100%' }} className="w3-hover-opacity" /> */}
        </div>
    </div>
  );
};

export default Service2;
