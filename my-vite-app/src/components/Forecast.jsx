// ── src/components/Forecast.jsx ──
import PropTypes            from 'prop-types';
import Day                  from './Day';
import { parseForecastData } from '../utils/utils.js';
import './Forecast.css';

export default function Forecast({ data }) {
  const days = parseForecastData(data);
  return (
    <div className="forecast">
      {days.map(d => (
        <Day
          key={d.date + d.sunrise}
          date={d.date}
          temperature={d.temperature}
          weather={d.weather}
          description={d.description}
          icon={d.icon}
          sunrise={d.sunrise}
          sunset={d.sunset}
        />
      ))}
    </div>
  );
}

Forecast.propTypes = {
  data: PropTypes.shape({
    list: PropTypes.array.isRequired,
    city: PropTypes.object.isRequired
  }).isRequired
};
