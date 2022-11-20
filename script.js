let city = "Tokyo";
const apiKey = "5aa02f3e0c65f5a7a0b03250ae2d078e";

const form = document.getElementById("form");
const search = document.getElementById("search");

function setData() {
  showWeather();
}
async function showWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.log(error);
  }
}
function showData(data) {
  console.log(data);
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const weather = document.getElementById("weather");
  const status = document.getElementById("status");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  city.innerText = data.name;
  state.innerText = data.sys.country;
  weather.children[0].innerHTML =
    calculate(parseInt(data.main.temp)) + "    C&deg;";
  weather.children[1].innerHTML =
    "min :   " +
    calculate(parseInt(data.main.temp_min)) +
    "    C&deg;" +
    "          max :   " +
    calculate(parseInt(data.main.temp_max)) +
    "    C&deg;";
  status.innerText = data.weather[0].main;
  humidity.innerText = "Humidity:" + data.main.humidity;
  wind.innerText = "Wind Speed:" + data.wind.speed;
}
function calculate(k) {
  return k - 273;
}

function callDataAPI(e) {
  e.preventDefault();
  city = search.value;
  showWeather();
}
form.addEventListener("submit", callDataAPI);
setData();
