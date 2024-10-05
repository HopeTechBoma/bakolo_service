import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-light p-3 d-flex justify-content-between">
      <div>
        <span>16h30 min Libreville</span>
        <span className="ml-3">BIENVENUE SUR ???.COM</span>
      </div>
      <div>
        <button className="btn btn-outline-primary">Nos Formations</button>
        <button className="btn btn-outline-primary">Nos Applications</button>
        <button className="btn btn-outline-primary">Compte</button>
        <button className="btn btn-outline-primary">Nos Services</button>
      </div>
    </div>
  );
};

export default Navbar;
