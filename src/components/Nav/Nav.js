import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <ul className="navbar-nav links">
          <Link to="/" className="nav-item item">Weather</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
