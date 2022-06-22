import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';

function Weather() {
  const countries = useSelector((state) => state.weather);

  return (
    <>
      {countries.map((country) => (
        <Card
          key={country.id}
          country={country.country}
          region={country.region}
        />
      ))}
    </>
  );
}

export default Weather;
