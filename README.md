# Forecast

Forecast is a Vue 3 application that provides current weather details for any city using data from the OpenWeatherMap API (version 2.5).

## Features

- **Search for weather information by city name.**
- **Displays:**
   - Current temperature.
   - Weather condition (e.g., clear sky, rain).
   - Wind speed and direction.
   - Pressure and humidity levels.
   - Sunrise and sunset times.
- **Clean and responsive UI.**

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/varlog762/forecast.git

2. Navigate to the project directory:
   ```bash
   cd forecast

3. Install dependencies:
   ```bash
   npm install

4. Set up environment variables (see below).
5. Run the development server:
   ```bash
   npm run dev

The app will be available at http://localhost:5173.

## Environment Variables

To run this project, you need an API key from [OpenWeatherMap](https://openweathermap.org/).
1. Create a ***.env*** file in the root of the project.
2. Add your API key:
   ```bash
   VITE_API_KEY=your_openweathermap_api_key

### Usage

1. Enter the name of a city in the search bar.
2. View detailed weather information for the selected city.

### Development Scripts

- ***npm run dev:*** Start the development server.
- ***npm run build:*** Build the project for production.
- ***npm run preview:*** Preview the built project.
- ***npm run lint:*** Run ESLint to check and fix code style issues.
- ***npm run format:*** Format code using Prettier.

### Technologies Used

- **Framework:** Vue.js 3
- **Build Tool:** Vite
- **Styling:** Scss
- **Linting and Formatting:** ESLint, Prettier

### API Reference

This app uses the OpenWeatherMap API. Check out the documentation here:  
[https://openweathermap.org/api](https://openweathermap.org/api)
