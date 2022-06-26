import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { FILTER } from '../../redux/Weather/ActionCreators';

function Weather() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navigateToDetails(id) {
    navigate('/weatherdetails', { state: id });
  }
  const countries = useSelector((state) => state.countries);

  function handleChange(e) {
    const { value } = e.target;
    if (value === '') {
      return dispatch({ type: 'NO_FILTER' });
    }
    const mtc = countries.filter((cou) => cou.country.toLowerCase().includes(value.toLowerCase()));
    dispatch(FILTER(mtc));

    return true;
  }

  return (
    <div>
      <input aria-hidden="true" onChange={handleChange} placeholder="Search..." />
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
    </div>
  );
}

export default Weather;
