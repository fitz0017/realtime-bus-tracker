const tomorrowUrl =
  "https://api.tomorrow.io/v4/timelines?location=41.230698,-73.064034&fields=temperature&timesteps=1h&units=metric&apikey=";
var lat = ``;
var long = ``;
var fields = "temperature&timesteps=1hr&units=metric";

async function getWeather(location) {
  let url = `${tomorrowUrl}&location=${location}&fields=${fields}apiKey=${}`;
  const wx = await fetch(url);
}
