// src/App.jsx
import './App.css';
import { useState } from 'react';

import Header      from './components/Header';
import Navigation  from './components/Navigation';
import MainContent from './components/MainContent';
import SearchForm  from './components/SearchForm';
import SunMoon     from './components/SunMoon';
import Forecast    from './components/Forecast';
import Footer      from './components/Footer';

import { formatTime }             from './utils/utils';
import { parseForecastData }      from './utils/utils'; // you'll pass raw data here

export default function App() {
  const [forecastData, setForecastData] = useState(null);
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState('');

  async function handleSearch(city) {
    if (!city) return;
    setError('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const url    = `https://api.openweathermap.org/data/2.5/forecast`
                   + `?q=${encodeURIComponent(city)}`
                   + `&appid=${apiKey}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      setForecastData(data);
      document.getElementById('forecast')
    } catch (err) {
      console.error(err);
      setError('❌ Could not load weather. Try another city?');
    } finally {
      setLoading(false);
    }
  }

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
        <section id="home" className="home-section">
          <h2>Welcome to Weather Report</h2>
          <p>Enter a city name above and click <em>Search</em> to see the 5-day forecast.</p>
        </section>

        {/* FORECAST */}
        <section id="forecast" className="forecast-section">
          <SearchForm onSearch={handleSearch} />

          {loading && <p className="loading">Loading…</p>}
          {error   && <p className="error">{error}</p>}

          {forecastData && (
            <>
              <h3 className="forecast-title">
                Forecast for {forecastData.city.name}, {forecastData.city.country}
              </h3>
              <SunMoon sunrise={sunrise} sunset={sunset} />
              <Forecast data={forecastData} />
            </>
          )}
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <h2>About This App</h2>
          <p>Built with React and the OpenWeatherMap 5-day/3-hour forecast API.</p>
        </section>
      </MainContent>

      <Footer />
    </div>
    
    
  );
}
