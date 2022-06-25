import './weather.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FiCloudDrizzle, FiSun, FiCloud, FiArrowLeft,
} from 'react-icons/fi';
import { FETCHTHUNK } from '../../redux/Weather/ActionCreators';

function WeatherDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.state;

  useEffect(() => {
    dispatch(FETCHTHUNK(id));
  }, []);

  function moveBack() {
    navigate(-1);
  }

  const details = useSelector((state) => state.weather);

  return (
    <>
      <div className="icon-container">
        <FiArrowLeft className="icon-left" onClick={() => moveBack()} />
      </div>
      <div className="container-fluid container-parent d-flex justify-content-center align-items-center">
        <div className="card card-container p-2 m-2">
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex gap-1 align-items-center justify-content-center">
              <h1>
                {details.name}
                ,
              </h1>
            </div>
            <FiCloud />
            <FiCloudDrizzle />
            <FiSun />
          </div>

          <div className="d-flex gap-2">
            <div>
              <p>latitude</p>
              <p className="details">{details.lat}</p>
            </div>
            <div>
              <p>longitude</p>
              <p className="details">{details.log}</p>
            </div>
            <div>
              <p>temp</p>
              <p className="details">{details.temp}</p>
            </div>
            <div>
              <p>humid</p>
              <p className="details">{details.humidity}</p>
            </div>
            <div>
              <p>pressure</p>
              <p className="details">{details.pressure}</p>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <p>wind speed</p>
              <p className="details">{details.wind_speed}</p>
            </div>
            <div>
              <p>sunrise</p>
              <p className="details">{details.sunrise}</p>
            </div>
            <div>
              <p>sunset</p>
              <p className="details">{details.sunset}</p>
            </div>
            <div>
              <p>feels_like</p>
              <p className="details">{details.humidity}</p>
            </div>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <h3>Description</h3>
            {details.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDetails;
