import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FETCHTHUNK } from '../../redux/Weather/ActionCreators';

function WeatherDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.state;

  useEffect(() => {
    dispatch(FETCHTHUNK(id));
  }, []);

  const details = useSelector((state) => state.weather);
  console.log(details);
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}

export default WeatherDetails;
