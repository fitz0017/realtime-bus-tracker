const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
const markers = [];

const tomorrowUrl =
  "https://api.tomorrow.io/v4/weather/realtime?location=41.230698,-73.064034&fields=temperature&timesteps=1h&units=metric&apikey=";
var lat = ``;
var long = ``;

var fields = "temperature&timesteps=1hr&units=metric";

async function getWeather(apiKey) {
  const res = await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=41.230698,-73.064034&apikey=${apiKey}`
  );
  const wx = await res.json();
  console.log(wx["data"]);
  // let url = `https://api.tomorrow.io/v4/timelines?&location=41.230698,-73.064034&fields=temperature&timesteps=1hr&units=metric&apiKey=`;
  // let headers = {
  //   accept: "application/json",
  //   method: "GET",
  // };
  // const wx = await fetch(url, headers);
  // return wx;
}

async function load() {
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);

  for (let i = 0; i < locations.length; i++) {
    let latlng = new google.maps.LatLng(
      locations[i]["attributes"]["latitude"],
      locations[i]["attributes"]["longitude"]
    );
    let marker = new google.maps.Marker({
      position: latlng,
      title: `Bus ${i}`,
    });
    markers.push(marker);
  }
}

async function getBusLocations() {
  const res = await fetch(url);
  const busses = await res.json();
  return busses.data;
}

async function move() {
  const updatedLocations = await getBusLocations();
  for (let i = 0; i < updatedLocations.length; i++) {
    markers[i].setMap(null);
    let latlng = new google.maps.LatLng(
      updatedLocations[i]["attributes"]["latitude"],
      updatedLocations[i]["attributes"]["longitude"]
    );
    markers[i]["position"] = latlng;
    let location = `${updatedLocations[i]["attributes"]["latitude"]},${updatedLocations[i]["attributes"]["longitude"]}`;
    // console.log(getWeather(`41.230698,-73.064034`));
    markers[i].setMap(map);
  }
  setTimeout(move, 15000);
}

// load();
// move();
