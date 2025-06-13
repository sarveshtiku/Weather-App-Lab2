// ── src/utils/utils.js ──
/**
 * Convert Kelvin to Fahrenheit, return a string with 2 decimals
 */
export function kelvinToFahrenheit(kelvin) {
  const f = 1.8 * (kelvin - 273) + 32;
  return f.toFixed(2);
}

/**
 * Format an ISO date string ("2024-03-12 18:00:00") to "Tue, Mar 12"
 */
export function formatDate(isoString) {
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', opts);
}

/**
 * Given a UNIX timestamp (seconds since epoch), returns "HH:MM AM/PM"
 */
export function formatTime(unixSeconds) {
  return new Date(unixSeconds * 1000).toLocaleTimeString(undefined, {
    hour:   '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Pull out only the fields our UI needs, and convert temp/icon/date,
 * and attach the city‐level sunrise/sunset (formatted).
 */
export function parseForecastData(raw) {
  const citySunrise = formatTime(raw.city.sunrise);
  const citySunset  = formatTime(raw.city.sunset);

  return raw.list.map(entry => {
    const { dt_txt, main, weather } = entry;
    const { temp } = main;
    const { main: cond, description, icon } = weather[0];

    return {
      date:        formatDate(dt_txt),
      temperature: parseFloat(kelvinToFahrenheit(temp)),
      weather:     cond,
      description,
      icon,
      sunrise:     citySunrise,
      sunset:      citySunset
    };
  });
}
