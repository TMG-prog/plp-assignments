const API_KEY = "e22b476318664228965163848250202";
const loadingElement = document.querySelector('.loading');
const weatherCard = document.getElementById('weather-card');


weatherCard.style.display = "none";

function showLoading(show = true) {
    loadingElement.style.display = show ? 'block' : 'none';
}

function displayWeather(data) {
    if (data.error) {
        weatherCard.style.display = "none";
        alert("Error: " + data.error.message);
        return;
    }

   
    document.getElementById("city-name").textContent = "🌎 " + data.location.name;
    document.getElementById("temperature").textContent = data.current.temp_c + "°C";
    document.getElementById("condition").textContent = "🌥️ " + data.current.condition.text;
    document.getElementById("humidity").textContent = "💧 Humidity: " + data.current.humidity + "%";
    document.getElementById("wind-speed").textContent = "🌬️ Wind Speed: " + data.current.wind_kph + " kph";

    weatherCard.style.display = "block"; 
}

function fetchWeather(url) {
    showLoading(true);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            showLoading(false);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            showLoading(false);
            alert("Failed to retrieve weather data.");
        });
}

// Fetch weather when user enters a city
function fetchWeatherByCity(event) {
    event.preventDefault(); 
    const city = document.getElementById("city-input").value;
    if (!city) return;
    fetchWeather(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
}

// Fetch weather using user's location
function fetchWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`);
        }, error => {
            console.error("Geolocation error:", error);
            alert("Location access denied. Please enter a city manually.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Auto-fetch user location weather on page load
window.onload = function() {
    fetchWeatherByLocation();
};