// ── src/App.jsx ──
import './App.css';
import { useState }    from 'react';

import Header          from './components/Header';
import Navigation      from './components/Navigation';
import MainContent     from './components/MainContent';
import SearchForm      from './components/SearchForm';
import Forecast        from './components/Forecast';
import Footer          from './components/Footer';

import { parseForecastData } from './utils/utils.js';

function App() {
  const [forecastData, setForecastData] = useState(null);
  const [loading,       setLoading]      = useState(false);
  const [error,         setError]        = useState('');

  const handleSearch = async city => {
    if (!city) return;
    setError('');
    setLoading(true);

    try {
      const key = import.meta.env.VITE_APP_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&appid=${key}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setForecastData(json);
      // scroll to forecast section once data arrives
      document.querySelector('#forecast').scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      console.error(e);
      setError('Could not load weather. Try another city?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="root">
      <Header />
      <Navigation />

      <MainContent>
        {/* HOME Section */}
        <section id="home" style={{ padding: '2rem 0' }}>
          <h2>Welcome to Weather Report</h2>
          <p>Type a city name above and hit “Search” to see the 5-day forecast.</p>
        </section>

        {/* FORECAST Section */}
        <section id="forecast" style={{ padding: '2rem 0' }}>
          <SearchForm onSearch={handleSearch} />
          {loading && <p>Loading…</p>}
          {error   && <p style={{ color: 'red' }}>{error}</p>}
          {forecastData && <Forecast data={forecastData} />}
        </section>

        {/* ABOUT Section */}
        <section id="about" style={{ padding: '2rem 0' }}>
          <h2>About This App</h2>
          <p>
            Built with React and the OpenWeatherMap 5-day/3-hour forecast API.
            Displays temperature, conditions, and local sunrise/sunset times.
          </p>
        </section>
      </MainContent>

      <Footer />
    </div>
  );
}

export default App;
