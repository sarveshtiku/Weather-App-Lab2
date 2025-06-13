# Weather Report App

A simple React application that displays a 5-day weather forecast (3-hour intervals) for any city using the OpenWeatherMap API. Built as part of the CodePath SITE Summer Internship **Weather Report** lab, it demonstrates:

- **State management** in React (lifting JSON into state)
- **Props** to pass data between components
- **Helper utilities** for parsing and formatting data
- **API integration** with OpenWeatherMap
- **Responsive UI** components: forecast cards, sunrise/sunset display, navigation

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Environment Variables](#environment-variables)  
   - [Running the App](#running-the-app)  
4. [Project Structure](#project-structure)  

---

## Features

- **City Search**: Type any city name and fetch live 5-day forecast  
- **Forecast Cards**: Displays date, condition icon, temperature (°F)  
- **Sun & Moon**: Shows sunrise 🌅 and sunset 🌇 times for the selected city  
- **Navigation**: Smooth scroll to Home, Forecast, and About sections  
- **Error Handling**: User-friendly message on invalid city or network errors  
- **Loading State**: Indicator while fetching data  

---

## Tech Stack

- **React** (Vite) for UI and state management  
- **OpenWeatherMap API** for live forecast data  
- **JavaScript** (ES6+), **CSS Modules** for styling  
- **PropTypes** for component prop validation  

---

## Getting Started

### Prerequisites

- Node.js (v14+)  
- npm or yarn  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/weather-report.git
   cd weather-report
2. **Install dependencies**  
   ```bash
   npm install
---

## Demo
 <img width="583" alt="Screenshot 2025-06-13 at 14 46 37" src="https://github.com/user-attachments/assets/87dc2eea-da2b-439f-bf67-b4a977e7e480" />

---

## Project Structure  

```markdown
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


## Demo
