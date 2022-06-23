import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Weather() {
  const countries = useSelector((state) => state.weather);
  const navigate = useNavigate();

  function navigateToDetails() {
    console.log('hello');
    navigate('/weatherdetails');
  }

  return (
    <>
      {countries.map((country) => (
        <Card
          key={country.id}
          country={country.country}
          region={country.region}
          onClick={() => navigateToDetails()}
          onKeyDown={() => navigateToDetails()}
        />
      ))}
    </>
  );
}

export default Weather;
