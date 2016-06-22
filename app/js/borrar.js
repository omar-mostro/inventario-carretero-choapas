function initMap() {
  var usRoadMapType = new google.maps.StyledMapType([
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {hue: '#ff0022'},
          {saturation: 60},
          {lightness: -20}
        ]
      }, {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          {hue: '#2200ff'},
          {lightness: -40},
          {visibility: 'simplified'},
          {saturation: 30}
        ]
      }, {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          {hue: '#f6ff00'},
          {saturation: 50},
          {gamma: 0.7},
          {visibility: 'simplified'}
        ]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {saturation: 40},
          {lightness: 40}
        ]
      }, {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          {visibility: 'on'},
          {saturation: 98}
        ]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [
          {hue: '#0022ff'},
          {saturation: 50},
          {lightness: -10},
          {gamma: 0.90}
        ]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {hue: '#ff0000'},
          {visibility: 'on'},
          {lightness: -70}
        ]
      }
    ], {name: 'US Road Atlas'});

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 41.85, lng: -87.65},
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
    }
  });

  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');
}
