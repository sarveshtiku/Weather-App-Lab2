import PropTypes from 'prop-types';
import Day        from './Day';
import { parseForecastData } from '../utils/utils';
import './Forecast.css';

export default function Forecast({ data, sunrise, sunset }) {
  // parse & group into 1 card per calendar day
  const raw = parseForecastData(data);
  const byDate = Object.values(
    raw.reduce((acc, entry) => {
      const day = entry.date;          // e.g. "Mon, Jun 16"
      if (!acc[day]) acc[day] = { ...entry };
      return acc;
    }, {})
  );

  return (
    <div className="forecast">
      {byDate.map((d, i) => (
        <Day
          key={d.date}
          date={d.date}
          temperature={d.temperature}
          weather={d.weather}
          description={d.description}
          icon={d.icon}
          sunrise={sunrise}
          sunset={sunset}
          animationDelay={`${i * 100}ms`}
        />
      ))}
    </div>
  );
}

Forecast.propTypes = {
  data:    PropTypes.object.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset:  PropTypes.string.isRequired,
};
