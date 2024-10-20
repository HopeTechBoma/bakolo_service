import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav class="nav">
      <div class="container">
      <Link to="/" class="logo_name">Bakolo</Link>
        <ul>
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/main_back">Video Shop</Link></li>
          <li><Link to="/carte_visite">Carte De Visite</Link></li>
          <li><Link to="/presentations">Présentations</Link></li>
          <li><Link to="/flyerfairepart">Flyers & Faire Part</Link></li>
          <li><Link to="/siteweb">Site Web</Link></li>
          {/* <li><Link to="/traitement_textes">Traitement de Texte</Link></li> */}
          {/* <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
