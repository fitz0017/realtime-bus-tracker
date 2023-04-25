const tomorrowUrl =
  "https://api.tomorrow.io/v4/timelines?location=41.230698,-73.064034&fields=temperature&timesteps=1h&units=metric&apikey=ognXDdNVoElqST4Uok8jClJ6XW9EGThB";
var lat = ``;
var long = ``;
tomorrowKey = ``;
fields = "temperature&timesteps=1hr&units=metric";

async function getWeather() {
  let url = `${tomorrowUrl}&location=${location}&fields=${fields}apiKey=${apiKey}`;
  const wx = await fetch(url);
}
