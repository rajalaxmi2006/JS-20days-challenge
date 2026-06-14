const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

// Replace with your API Key
const apiKey = "";

// Fetch Weather
async function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Display Weather

function displayWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  wind.textContent = `Wind: ${data.wind.speed} km/h`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Event
searchBtn.addEventListener("click", getWeather);
