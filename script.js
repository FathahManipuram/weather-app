const apiKey = "ead37358ab20cb4caef667aec2ff1b35";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&APPID=ead37358ab20cb4caef667aec2ff1b35&units=metric&q=";
const btn = document.querySelector(".btn");
const cityName = document.querySelector("input");
const image = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  const data = await response.json();
  console.log(data);
  if (data.cod == "400") {
    alert("Please enter a city Name");
  } else if (data.cod == "404") {
    alert("City not found");
  }

  console.log(data.weather[0].main);
  if (data.weather[0].main == "Clouds") {
    image.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "./images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "./images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "./images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    image.src = "./images/snow.png";
  }

  document.querySelector(".weather-box").style.display = "block";
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
}

btn.addEventListener("click", () => {
  checkWeather(cityName.value);
});
