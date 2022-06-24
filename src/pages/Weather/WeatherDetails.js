import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FETCHTHUNK } from '../../redux/Weather/ActionCreators';

function WeatherDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.state;
  console.log(id);

  const details = useSelector((state) => state.weather);
  console.log(details);

  useEffect(() => {
    dispatch(FETCHTHUNK(id));
  }, []);

  return (
    <div>
      <h1>{details.base}</h1>
    </div>
  );
}

export default WeatherDetails;
