import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3">
      <input type="text" placeholder="Recherche ..." className="form-control mb-3" />
      <ul className="list-unstyled">
        <li><Link to="/hospital">Hopital</Link></li>
        <li><Link to="/ecole">Ecole</Link></li>
        <li><Link to="/salle-de-mariage">Salle de Mariage</Link></li>
        {/* Add other menu items */}
      </ul>
    </div>
  );
};

export default Sidebar;
