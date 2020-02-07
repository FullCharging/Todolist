const weather = document.querySelector(".js-weather");

API_KEY = "dfa996392602f373302b505ec1862d38";

function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
    `)
    .then(function(respon) {
      return respon.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const city = json.name;
      weather.innerText = `${temp}℃ @ ${city}`;
    });
}

function saveCoords(coord) {
  localStorage.setItem("coords", JSON.stringify(coord));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const obj = {
    latitude,
    longitude
  };
  saveCoords(obj);
  getWeather(latitude, longitude);
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function handleGeoError() {
  alert("Can't acess");
}

function loadCoords() {
  const loadedCoords = localStorage.getItem("coords");
  if (loadedCoords === null) {
    askCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
