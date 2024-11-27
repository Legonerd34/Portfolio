import React, { useState } from 'react';
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import '../index.css';
import Highlight from 'react-highlight'
import Typography from '@mui/joy/Typography';

function Weather(){
    const code = `
const card = document.getElementById("card");
const error = document.getElementById("error");
const form = document.querySelector("form");
const input = document.getElementById("input");
const cityDisplay = document.getElementById("city");
const tempDisplay = document.getElementById("temp");
const descriptionDisplay = document.getElementById("description");
const humidityDisplay = document.getElementById("humidity");
const emojiDisplay = document.getElementById("emoji");
const timeDisplay = document.getElementById("time");

const API_KEY = "YOUR_API_KEY";

form.addEventListener("submit", async event => {
    event.preventDefault();
    console.log("submitted");
    cityName = input.value;

    if (cityName) {
        try {
            const weatherData = await getWeatherData(cityName);
            displayWeatherData(weatherData);
        }
        catch (error) {
            showErrorMessage(error);
        }
    }
    else {
        showErrorMessage("Please enter a valid city use capital letter eg: London.");
        console.error("no city entered");
    }
});

async function getWeatherData(cityName) {
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${cityName}&appid=\${API_KEY}\`;
    const response = await fetch(url);

    console.log(response);

    if (response.status !== 200) {
        showErrorMessage("Please enter a valid city use capital letter eg: London.");
        console.error("status was not 200");
        return;
    }

    return await response.json();
}

function displayWeatherData(data) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }],
        timezone: secondOffset } = data;

    const time = new Date().toUTCString();
    const utc = new Date(time);
    const localTimestamp = utc.getTime() + (secondOffset * 1000);
    const localDate = new Date(localTimestamp);
    const hours = localDate.getUTCHours().toString().padStart(2, '0');
    const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
    const formattedTime = \`\${hours}:\${minutes}\`;

    error.textContent = "";

    cityDisplay.style.display = "flex";
    cityDisplay.textContent = String(city);
    tempDisplay.style.display = "flex";
    tempDisplay.textContent = \`\${String((temp - 273.15).toFixed(1))}°C\`;
    humidityDisplay.style.display = "flex";
    humidityDisplay.textContent = \`Humidity: \${String(humidity)}%\`;
    descriptionDisplay.style.display = "flex";
    descriptionDisplay.textContent = String(description);
    emojiDisplay.style.display = "flex";
    emojiDisplay.textContent = getEmoji(id);
    timeDisplay.style.display = "flex";
    timeDisplay.textContent = \`Current time: \${formattedTime}\`;
    card.style.display = "flex";

    console.log("done");
    console.log(String(temp));
    console.log(data);

    console.log(cityDisplay.textContent);
}

function getEmoji(weatherID) {
    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return "⛈";
        case (weatherID >= 300 && weatherID < 400):
            return "🌧";
        case (weatherID >= 500 && weatherID < 600):
            return "🌦";
        case (weatherID >= 600 && weatherID < 700):
            return "🌨";
        case (weatherID >= 700 && weatherID < 800):
            return "🌫";
        case (weatherID === 800):
            return "☀️";
        case (weatherID >= 801 && weatherID <= 803):
            return "⛅️";
        case (weatherID >= 804 && weatherID < 810):
            return "☁️";
        default:
            return "︖";
    }
}

function showErrorMessage(message) {
    cityDisplay.style.display = "";
    cityDisplay.textContent = "";
    tempDisplay.style.display = "";
    tempDisplay.textContent = \`\`;
    humidityDisplay.style.display = "";
    humidityDisplay.textContent = \`\`;
    descriptionDisplay.style.display = "";
    descriptionDisplay.textContent = "";
    emojiDisplay.style.display = "";
    emojiDisplay.textContent = "";
    timeDisplay.style.display = "";
    timeDisplay.textContent = \`\`;
    card.style.display = "";

    error.textContent = message;
    error.style.display = "flex";
    card.style.display = "flex";
}
`;

const [city, setCity] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState("");

const API_KEY = "e11bebee015afc5c2fb1efe3e378509a";

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!city) {
    setError("Please enter a valid city. Use capital letters, e.g., London.");
    return;
  }

  try {
    const data = await getWeatherData(city);
    if (data) {
      setWeatherData(data);
      setError("");
    }
  } catch (err) {
    setError("Error fetching weather data. Please try again.");
  }
};

const getWeatherData = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid city name or API error");
  }

  return await response.json();
};

const getEmoji = (weatherID) => {
  switch (true) {
    case weatherID >= 200 && weatherID < 300:
      return "⛈";
    case weatherID >= 300 && weatherID < 400:
      return "🌧";
    case weatherID >= 500 && weatherID < 600:
      return "🌦";
    case weatherID >= 600 && weatherID < 700:
      return "🌨";
    case weatherID >= 700 && weatherID < 800:
      return "🌫";
    case weatherID === 800:
      return "☀️";
    case weatherID >= 801 && weatherID <= 803:
      return "⛅️";
    case weatherID >= 804 && weatherID < 810:
      return "☁️";
    default:
      return "︖";
  }
};

const formatTime = (timezone) => {
  const utc = new Date();
  const localTime = new Date(utc.getTime() + timezone * 1000);
  const hours = localTime.getUTCHours().toString().padStart(2, "0");
  const minutes = localTime.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

return (
    <div className="content app-body">
      <div className="app" id="app-weather">
        <Typography level="h2">Weather App</Typography>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Please enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {error && <p id="error" style={{ display: "flex", color: "red" }}>{error}</p>}

        {weatherData && (
          <div id="card" style={{ display: "flex", flexDirection: "column" }}>
            <h1 id="city">{weatherData.name}</h1>
            <p id="temp">{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
            <p id="humidity">Humidity: {weatherData.main.humidity}%</p>
            <p id="description">{weatherData.weather[0].description}</p>
            <p id="emoji">{getEmoji(weatherData.weather[0].id)}</p>
            <p id="time">Current time: {formatTime(weatherData.timezone)}</p>
          </div>
        )}
      </div>

      <div className="code">
        <Highlight className="language-javascript">{code}</Highlight>
      </div>
    </div>
  );
}

export default Weather;