const apiKey = '80809ad02cfaa5c4c28f6dbdeba15d5b';
 // Replace with your OpenWeatherMap API Key

function fetchWeather() {
  const city = document.getElementById('city').value;

  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.cod === '404') {
      alert('City not found');
      return;
    }

    // Update UI with weather data
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${data.wind.speed} m/s`;
    
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    alert(`There was an error fetching the weather data: ${error.message}`);
  });}
