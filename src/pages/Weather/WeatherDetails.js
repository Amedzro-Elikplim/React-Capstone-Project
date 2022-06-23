import React from 'react';
import { useLocation } from 'react-router-dom';

function WeatherDetails() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}

export default WeatherDetails;
