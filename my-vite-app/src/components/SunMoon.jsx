// src/components/SunMoon.jsx
import PropTypes from 'prop-types';
import './SunMoon.css';

export default function SunMoon({ sunrise, sunset }) {
  return (
    <div className="sunmoon">
      <div className="sun">
        <span role="img" aria-label="sunrise">🌅</span>
        <small>{sunrise}</small>
      </div>
      <div className="moon">
        <span role="img" aria-label="sunset">🌇</span>
        <small>{sunset}</small>
      </div>
    </div>
  );
}

SunMoon.propTypes = {
  sunrise: PropTypes.string.isRequired,
  sunset:  PropTypes.string.isRequired,
};
