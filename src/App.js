import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Weather from './pages/Weather';
import Pollution from './pages/Pollution';
import WeatherMap from './pages/WeatherMap';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/pollution" element={<Pollution />} />
        <Route path="/map" element={<WeatherMap />} />
      </Routes>
    </>
  );
}

export default App;
