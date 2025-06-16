// src/components/SearchForm.jsx
import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const [city, setCity] = useState('');

  return (
    <form
      className="search-form"
      onSubmit={e => {
        e.preventDefault();
        onSearch(city.trim());
      }}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
