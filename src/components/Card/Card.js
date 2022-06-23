import './card.css';
import React from 'react';
import {
  FiCloudLightning,
  FiCloudDrizzle,
  FiSun,
  FiCloud,
  FiSunrise,
  FiThermometer,
  FiDroplet,
} from 'react-icons/fi';
import PropTypes from 'prop-types';

function Card({
  country, region, onClick, onKeyDown,
}) {
  return (
    <div className="card m-3" aria-hidden="true" onClick={onClick} onKeyDown={onKeyDown}>
      <div className="card-body d-flex justify-content-center card-body-container">
        <div>
          <div className="d-flex align-items-center">
            <h3 className="card-title">
              {country}
              ,
            </h3>
            <p className="card-subtitle">{region}</p>
          </div>

          <div className="d-flex icon-container">
            <FiCloudLightning />
            <FiCloudDrizzle />
            <FiSun />
            <FiCloud />
            <FiSunrise />
          </div>
        </div>
        <div className="info">
          <p className="info-text">o3, no2, co2</p>
          <span>
            <FiThermometer />
            <FiDroplet className="droplet" />
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Card;
