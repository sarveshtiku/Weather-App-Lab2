// src/utils/utils.js

/**
 * Convert Kelvin to Fahrenheit, rounded to two decimals.
 * @param {number} k Kelvin temperature
 * @returns {string} Fahrenheit string, e.g. "68.00"
 */
export function kelvinToFahrenheit(k) {
  const f = 1.8 * (k - 273.15) + 32;
  return f.toFixed(2);
}

/**
 * Format an ISO date string (e.g. "2024-03-12 18:00:00")
 * into "Mon, Mar 12".
 * @param {string} isoString
 * @returns {string}
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month:   'short',
    day:     'numeric'
  });
}

/**
 * Convert a UNIX timestamp (in seconds) to "HH:MM AM/PM"
 * @param {number} ts Unix time in seconds
 * @returns {string} e.g. "08:45 PM"
 */
export function formatTime(ts) {
  const d = new Date(ts * 1000);
  return d.toLocaleTimeString('en-US', {
    hour:   '2-digit',
    minute: '2-digit',
  });
}

/**
 * From the full OWM 5-day/3-hour payload, pick only the
 * entries at 12:00:00 for the next five days, and shape
 * them into the props our UI needs.
 *
 * @param {object} data  Full JSON from OpenWeatherMap
 * @returns {Array<object>}
 */
export function parseForecastData(data) {
  return data.list
    .filter(e => e.dt_txt.endsWith("12:00:00"))
    .slice(0, 5)
    .map((entry) => {
      const {
        dt_txt,
        main: { temp },
        weather: [w],
      } = entry;

      return {
        date:        formatDate(dt_txt),
        temperature: parseFloat(kelvinToFahrenheit(temp)),
        weather:     w.main,
        description: w.description,
        icon:        w.icon,
      };
    });
}