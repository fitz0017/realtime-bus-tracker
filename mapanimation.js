const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";

const markers = [];

async function load() {
  const locations = await getBusLocations();
  const wx = await getWeather();
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
    markers[i].setMap(map);
  }
  setTimeout(move, 15000);
}

load();
move();
