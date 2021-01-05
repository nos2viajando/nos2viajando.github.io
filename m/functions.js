// Map style

function toggleMapStyle() {
  if (current_map_style == 'light-v10') {
    current_map_style = 'satellite-v9'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', '../icons/map-light.svg');
  } else {
    current_map_style = 'light-v10'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', '../icons/map-satellite.svg');
  }
}


// Markers

function createMarkers(map, places, color, scale) {
  var markers = [];
  for (var i = 0; i < places.length; i++) {
    var text = "<p style=\"text-align:center;font-size:24px;line-height:1.25;margin: 0px 5px -5px 5px;\">" + places[i][2] + "</p>";
    markers[i] = new mapboxgl.Marker({color:color,scale:scale,draggable:false})
    .setLngLat(places[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setHTML(text));
  }
  return markers;
}

function addMarkersToMap(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].addTo(map);
  }
}

function loadMarkersOnMap(map, markers_scale) {
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale);
  accommodations_markers = createMarkers(map, accommodations, '#dec900', markers_scale);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale);
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, accommodations_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}


// Listeners

function addListenerToRegions(item) {
  document.getElementById(getItemId(item[2]))
  .addEventListener('click', function() { flyToCoordinates(map, item[0], 0, 0.01, 10, 1.5) });
}

function addListenerToPlaces(item) {
  document.getElementById(getItemId(item[2]))
  .addEventListener('click', function() { flyToCoordinates(map, item[0], 0, 0.0003, 15, 1.5) });
}

function addListenerToFLags(id) {
  document.getElementById(id).addEventListener('click', function() { fitRegion(map, id) });
}


// Fit/Fly

function fitBoundingBox(map, bbox, x_offset, y_offset, padding, linear) {

  current_coords = [];
  current_bbox = bbox;

  var bounding_box = [];

  bounding_box[0] = bbox[0] + x_offset;
  bounding_box[1] = bbox[1] + y_offset;
  bounding_box[2] = bbox[2] + x_offset;
  bounding_box[3] = bbox[3] + y_offset;

  map.fitBounds(bounding_box, {padding: padding, linear:linear});

}

function fitRegion(map, region) {
  var bbox = countries_bbox[region][1];
  fitBoundingBox(map, bbox, 0, 0, 50, false);
}

function flyToCoordinates(map, coords, x_offset, y_offset, zoom, speed) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  current_bbox = [];
  current_coords = coords;
  map.flyTo({center: [coords[0] + x_offset, coords[1] + y_offset], zoom: zoom, speed:speed});
}


// Getters

function getIconSrc(country_code) {
  return "../icons/flags/".concat(countries_bbox[country_code][0])
    .replace(/\s/g, "-").toLowerCase().concat(".svg");
}

function getItemId(item_name) {
  return item_name.replace(/\s/g, "_").toUpperCase();
}


function getInitialBoundingBox(markers) {

  var west = 180;
  var south = 90;
  var east = -180;
  var north = -90;

  for (var i = 0; i < markers.length; i++) {

    if (markers[i][0][0] < west) {
      west = markers[i][0][0];
    }
    if (markers[i][0][0] > east) {
      east = markers[i][0][0];
    }
    if (markers[i][0][1] < south) {
      south = markers[i][0][1];
    }
    if (markers[i][0][1] > north) {
      north = markers[i][0][1];
    }

    initial_bbox = [west, south, east, north];

  }

  return initial_bbox;

}
