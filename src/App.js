import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Weather from './pages/Weather/Weather';
import Pollution from './pages/Pollution';
import WeatherMap from './pages/WeatherMap';
import WeatherDetails from './pages/Weather/WeatherDetails';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/pollution" element={<Pollution />} />
        <Route path="/map" element={<WeatherMap />} />
        <Route path="/weatherdetails" element={<WeatherDetails />} />
      </Routes>
    </>
  );
}

export default App;
