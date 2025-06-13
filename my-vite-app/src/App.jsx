// src/App.jsx
import './App.css';
import { useState } from 'react';

import Header       from './components/Header';
import Navigation   from './components/Navigation';
import MainContent  from './components/MainContent';
import SearchForm   from './components/SearchForm';
import SunMoon      from './components/SunMoon';
import Forecast     from './components/Forecast';
import Footer       from './components/Footer';

import { parseForecastData, formatTime } from './utils/utils.js';

export default function App() {
  // 1️⃣ Start with no data
  const [forecastData, setForecastData] = useState(null);
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState('');

  // 2️⃣ On search, fetch live data
  const handleSearch = async city => {
    if (!city) return;

    console.log('Searching for ▶️', city);
    setError('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const url    = `https://api.openweathermap.org/data/2.5/forecast`
                   + `?q=${encodeURIComponent(city)}`
                   + `&appid=${apiKey}`;  // no units → temp in K
      console.log('Fetch URL:', url);

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const json = await res.json();
      console.log('📡 Received:', json);

      setForecastData(json);
      // scroll to forecast section automatically
      document.getElementById('forecast').scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setError('❌ Could not load weather. Try another city?');
    } finally {
      setLoading(false);
    }
  };

  // 3️⃣ Format sunrise/sunset once we have data
  const sunrise = forecastData?.city
    ? formatTime(forecastData.city.sunrise)
    : '--:--';
  const sunset  = forecastData?.city
    ? formatTime(forecastData.city.sunset)
    : '--:--';

  return (
    <div id="root">
      <Header />
      <Navigation />

      <MainContent>
        {/* HOME */}
        <section id="home" style={{ padding: '2rem 0' }}>
          <h2>Welcome to Weather Report</h2>
          <p>Enter a city name above and click “Search” to see the 5-day forecast.</p>
        </section>

        {/* FORECAST */}
        <section id="forecast" style={{ padding: '2rem 0' }}>
          <SearchForm onSearch={handleSearch} />

          {loading && <p>Loading…</p>}
          {error   && <p style={{ color: 'red' }}>{error}</p>}

          {forecastData && (
            <>
              <h3>Forecast for {forecastData.city.name}, {forecastData.city.country}</h3>
              <SunMoon sunrise={sunrise} sunset={sunset} />
              <Forecast data={forecastData} />
            </>
          )}
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: '2rem 0' }}>
          <h2>About This App</h2>
          <p>
            Built with React and the OpenWeatherMap 5-day/3-hour forecast API.
          </p>
        </section>
      </MainContent>

      <Footer />
    </div>
  );
}
