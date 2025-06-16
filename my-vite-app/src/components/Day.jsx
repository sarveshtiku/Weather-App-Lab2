import PropTypes from 'prop-types';
import './Day.css';
import SunMoon   from './SunMoon';

export default function Day({
  date,
  temperature,
  weather,
  description,
  icon,
  sunrise,
  sunset,
  animationDelay = '0ms'
}) {
  const tempClass = temperature < 60 ? 'cold' : 'hot';

  return (
    <div
      className="day-card"
      style={{ animationDelay }}
    >
      <h3>{date}</h3>

      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <p className="weather">{weather}</p>
      <p className={`temp ${tempClass}`}>{temperature.toFixed(1)}°</p>
      <p className="desc">{description}</p>

      <SunMoon sunrise={sunrise} sunset={sunset} />
    </div>
  );
}

Day.propTypes = {
  date:         PropTypes.string.isRequired,
  temperature:  PropTypes.number.isRequired,
  weather:      PropTypes.string.isRequired,
  description:  PropTypes.string.isRequired,
  icon:         PropTypes.string.isRequired,
  sunrise:      PropTypes.string.isRequired,
  sunset:       PropTypes.string.isRequired,
  animationDelay: PropTypes.string,
};
