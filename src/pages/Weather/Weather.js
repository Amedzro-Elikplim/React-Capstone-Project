import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Weather() {
  const navigate = useNavigate();

  function navigateToDetails(id) {
    navigate('/weatherdetails', { state: id });
  }
  const countries = useSelector((state) => state.countries);

  return (
    <>
      <div className="grid-container">
        {countries.map((country) => (
          <Card
            key={country.id}
            country={country.country}
            region={country.region}
            onClick={() => navigateToDetails(country.id)}
            onKeyDown={() => navigateToDetails()}
          />
        ))}
      </div>
    </>
  );
}

export default Weather;
