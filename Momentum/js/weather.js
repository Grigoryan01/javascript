async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=942b79c4b0b02adc4b32d8ed79c13661&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windElement.textContent=`Wind speed: ${data.wind.speed} m/s`;
    humidityElement.textContent=`Humidity: ${data.main.humidity}%`;
    //weatherIcon.className = 'weather-icon owf';
   
  }
  getWeather();
  async function getWeatherInMyTown() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&lang=en&appid=942b79c4b0b02adc4b32d8ed79c13661&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windElement.textContent=`Wind speed: ${data.wind.speed} m/s`;
    humidityElement.textContent=`Humidity: ${data.main.humidity}%`;
    //weatherIcon.className = 'weather-icon owf';
   
  }
  getWeatherInMyTown();

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windElement=document.querySelector('.wind');
const humidityElement=document.querySelector('.humidity');
const townElement=document.getElementById('city');
console.log(townElement);

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=942b79c4b0b02adc4b32d8ed79c13661&units=metric`;