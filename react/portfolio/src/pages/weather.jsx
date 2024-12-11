import React, { useState } from "react";
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import "../index.css";
import Highlight from "react-highlight";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";


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

return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography level="h1" sx={{ textAlign: "center", marginBottom: 2, color: "white", }}>
          Weather App
        </Typography>
        <Typography level="body-lg" sx={{ textAlign: "center", color: "lightgray", }}>
          This project demonstrates a weather application built using modern
          JavaScript. Enter a city name to get the current weather data,
          including temperature, humidity, and a description.
        </Typography>
      </Box>

      {/* Two-Column Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {/* Left Column: Weather App */}
        <Card
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit">Submit</Button>
          </form>

          {error && (
            <Typography
              level="body-sm"
              color="danger"
              sx={{ textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          {weatherData && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                padding: 2,
                backgroundColor: "neutral.100",
                borderRadius: "sm",
              }}
            >
              <Typography level="h2" sx={{ textAlign: "center" }}>
                {getEmoji(weatherData.weather[0].id)} {weatherData.name}
              </Typography>
              <Divider />
              <Typography level="body-lg">
                <strong>Temperature:</strong>{" "}
                {(weatherData.main.temp - 273.15).toFixed(1)}°C
              </Typography>
              <Typography level="body-lg">
                <strong>Humidity:</strong> {weatherData.main.humidity}%
              </Typography>
              <Typography level="body-lg">
                <strong>Description:</strong> {weatherData.weather[0].description}
              </Typography>
            </Box>
          )}
        </Card>

        {/* Right Column: Code Snippet */}
        <Box
              sx={{
                flex: 1,
                backgroundColor: "#282c34",
                borderRadius: "md",
                padding: 2,
                boxShadow: "sm",
                maxHeight: "1000px",
                overflow: "auto",
              }}
            >
                
              <Highlight className="language-javascript">{code}</Highlight>
        </Box>
      </Box>
    </Box>
  );
}

export default Weather;