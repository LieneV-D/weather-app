function displayChangedTempAndCity(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let city = searchInput.value;
  let apiKey = "23e75f7acb80e43d1aa43c2eod7017bt";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayChangedTempAndCity);
}
let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", searchCity);

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
let time = `${hours}:${minutes}`;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

const timeDateElement = document.querySelector("#current-date-time");
timeDateElement.innerHTML = `It is <strong>${day}</strong>, current time is <strong>${time}</strong>`;
