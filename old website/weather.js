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

const API_KEY = "e11bebee015afc5c2fb1efe3e378509a"

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
            showErrorMessage(error)
        }
    }
    else {
        showErrorMessage("Please enter a valid city use capital letter eg: London.")
        console.error("no city entered")
    }
});

async function getWeatherData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const response = await fetch(url);

    console.log(response);

    if (response.status !== 200) {
        showErrorMessage("Please enter a valid city use capital letter eg: London.")
        console.error("status was not 200")
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
    const formattedTime = `${hours}:${minutes}`;

    error.textContent = "";

    cityDisplay.style.display = "flex";
    cityDisplay.textContent = String(city);
    tempDisplay.style.display = "flex";
    tempDisplay.textContent = `${String((temp - 273.15).toFixed(1))}°C`;
    humidityDisplay.style.display = "flex";
    humidityDisplay.textContent = `Humidity: ${String(humidity)}%`
    descriptionDisplay.style.display = "flex";
    descriptionDisplay.textContent = String(description);
    emojiDisplay.style.display = "flex";
    emojiDisplay.textContent = getEmoji(id);
    timeDisplay.style.display = "flex";
    timeDisplay.textContent = `Current time: ${formattedTime}`;
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
    tempDisplay.textContent = ``;
    humidityDisplay.style.display = "";
    humidityDisplay.textContent = ``
    descriptionDisplay.style.display = "";
    descriptionDisplay.textContent = "";
    emojiDisplay.style.display = "";
    emojiDisplay.textContent = "";
    timeDisplay.style.display = "";
    timeDisplay.textContent = ``;
    card.style.display = "";

    error.textContent = message;
    error.style.display = "flex";
    card.style.display = "flex";


}