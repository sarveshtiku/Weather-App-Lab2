Weather Report App

A simple React application that displays a 5-day weather forecast (3-hour intervals) for any city using the OpenWeatherMap API. Built as part of the CodePath SITE Summer Internship Weather Report lab, it demonstrates:

State management in React (lifting JSON into state)

Props to pass data between components

Helper utilities for parsing and formatting data

API integration with OpenWeatherMap

Responsive UI components: forecast cards, sunrise/sunset display, navigation

Demo



Table of Contents

Features

Tech Stack

Getting Started

Prerequisites

Installation

Environment Variables

Running the App

Project Structure

Usage

Future Enhancements

License

Features

City Search: Type any city name and fetch live 5-day forecast

Forecast Cards: Displays date, condition icon, temperature (°F)

Sun & Moon: Shows sunrise 🌅 and sunset 🌇 times for the selected city

Navigation: Smooth scroll to Home, Forecast, and About sections

Error Handling: User-friendly message on invalid city or network errors

Loading State: Indicator while fetching data

Tech Stack

React (Vite) for UI and state management

OpenWeatherMap API for live forecast data

JavaScript (ES6+), CSS Modules for styling

PropTypes for component prop validation

Getting Started

Prerequisites

Node.js (v14+)

npm or yarn

Installation

Clone the repository

git clone https://github.com/<your-username>/weather-report.git
cd weather-report

Install dependencies

npm install
# or
yarn install

Environment Variables

Create a .env file in the project root and add your OpenWeatherMap API key:

VITE_APP_API_KEY=your_api_key_here

Note: The .env file is included in .gitignore by default to keep your API key secure.

Running the App

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to view the app.

Project Structure

src/
├── components/
│   ├── Header.jsx       # App header
│   ├── Navigation.jsx   # Nav bar with section links
│   ├── SearchForm.jsx   # City input & search button
│   ├── SunMoon.jsx      # Sunrise/sunset display
│   ├── Forecast.jsx     # Forecast container (maps to Day)
│   ├── Day.jsx          # Single day card
│   └── Footer.jsx       # App footer
├── data/                # (Part 2) static sample data
│   └── data.js
├── utils/
│   └── utils.js         # Helper functions (parsing, formatting)
├── App.jsx              # Main component with state & fetch logic
├── App.css              # Global styles
└── main.jsx             # Vite entry point

Usage

Enter a city name (e.g. Atlanta, Bangalore) and click Search.

Watch the loading indicator briefly.

View the 5-day forecast cards, each showing:

Date (Tue, Mar 12)

Weather icon (☀️, ☁️, 🌧️, etc.)

Temperature in Fahrenheit

Sunrise and sunset times 🌅 🌇

Use the Home, Forecast, and About links to jump between page sections.

Future Enhancements

Hourly View: Show more granular hourly forecast in a separate view.

Unit Toggle: Switch between °F, °C, and K.

Geolocation: Auto-detect user’s location on load.

Caching: Store recent searches in LocalStorage or IndexedDB.

UI Polish: Add animations, transitions, and responsive design tweaks.

License

This project is licensed under the MIT License. See LICENSE for details.

