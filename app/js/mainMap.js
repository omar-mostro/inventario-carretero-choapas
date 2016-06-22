var km0 = '<div class="infoWindow"><div class="title"> Inicio de la obra</div><div class="info-image"> <img src="./img/inicioCosoloacaque.jpg" /></div><div class="description"> km 0+000 acayucan cosoleacaque </div></div>'

var km40Code = '<div class="infoWindow"><div class="title"> Final de la obra </div><div class="info-image"> <img src="./img/finalCosoloacaque.jpg" /></div><div class="description"> Kilometro 40 </div></div>'

//locations array
var locations = [
    [km40Code, 18.008377, -94.589308],
      [km0, 17.909953, -94.939167]
    ];


//highway map type configrations
var usRoadMapType = new google.maps.StyledMapType([
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#981d1d'
            },
            {
                saturation: 80
            },
            {
                lightness: -2
            }
        ]
      }, {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off'
            },
            {
                saturation: 98
            }
        ]
      }
    ], {
    name: 'Cosoleacaque'
});

//main map
var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 11,
    center: new google.maps.LatLng(18.039871, -94.744801),
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Cosoleacaque']
    },
    scaleControl: false,
    mapTypeControl: false,
    zoomControl: false,
    draggable: false,
    disableDoubleClickZoom: true,
    keyboardShortcuts: false,
    maxZoom: 11,
    minZoom: 11


});
//Set map type road.highway
map.mapTypes.set('Cosoleacaque', usRoadMapType);
map.setMapTypeId('Cosoleacaque');

//this for show all the markers and content specified on the locations array
for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: locations[i][0]
    });
    infowindow.open(map, marker);
}
