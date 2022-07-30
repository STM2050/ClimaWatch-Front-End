let search_button = document.querySelector("#search_button");
let api;

search_button.addEventListener("click", () => {
  let city = document.querySelector("#city").value;
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e572668bb21fee7042efec77137cc15c`;
});

search_button.addEventListener("click", fetch_weather);

async function fetch_weather() {
  try {
    let res = await fetch(api);
    console.log(res);
    let data = await res.json();
    if (res.status == 200) {
      let icon = data.weather[0].icon;
      let description = data.weather[0].description;
      let temp = data.main.temp;
      let feels_like = data.main.feels_like;
      let temp_min = data.main.temp_min;
      let temp_max = data.main.temp_max;
      console.log(icon, description, temp, feels_like, temp_min, temp_max);
    }
  } catch {}
}
