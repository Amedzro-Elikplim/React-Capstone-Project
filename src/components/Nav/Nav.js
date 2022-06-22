import './nav.css';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

function Nav() {
  return (
    <nav className="nav">
      <span
        type="button"
        className="navbar-toggler button-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
      >
        <FiMenu />
      </span>
      <div className="collapse navbar-collapse nav-content" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">Weather</li>
          <li className="nav-item">Pollution per country</li>
          <li className="nav-item">Weather maps</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
