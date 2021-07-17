// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function.

function createMap(bikeStations){


  // Create the tile layer that will be the background of our map.


  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
}
// Create the createMarkers function.
function createMarkers(response){

  // Pull the "stations" property from response.data.
  console.log(response);

  // stations is an array of station objects
  let stations = response.data.stations;

  // Initialize an array to hold the bike markers.
  let bikeMarkers = []

  // Loop through the stations array.
  stations.forEach(station => {
    // For each station, create a marker, and bind a popup with the station's name.
    bikeMarkers.push(
    // Add the marker to the bikeMarkers array.
      L.marker([station.lat, station.lon])
      .bindPopup(`Station Name: ${station.name}`)
    );
  })
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  console.log(bikeMarkers);
}

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);