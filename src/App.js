import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Weather from './pages/Weather/Weather';
import WeatherDetails from './pages/Weather/WeatherDetails';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weatherdetails" element={<WeatherDetails />} />
      </Routes>
    </>
  );
}

export default App;
