// ── src/components/Day.jsx ──
import PropTypes from 'prop-types';
import SunMoon   from './SunMoon';
import './Day.css';

export default function Day({

  date,
  temperature,
  weather,
  description,
  icon,
  sunrise,
  sunset
}) {
  const tempClass = temperature < 60 ? 'cold' : 'hot';

  return (
    <div className="day-card">
      <h3>{date}</h3>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>{weather}</p>
      <p className={tempClass}>{temperature}°</p>

      {/* sunrise & sunset for this “day” */}
      <SunMoon sunrise={sunrise} sunset={sunset} />
    </div>
  );
}

Day.propTypes = {
  date:        PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon:        PropTypes.string.isRequired,
  weather:     PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sunrise:     PropTypes.string.isRequired,
  sunset:      PropTypes.string.isRequired
};
