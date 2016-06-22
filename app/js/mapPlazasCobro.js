var locations = [
    ['<div id="fixedWindow">' +
     '<img src="img/PlazasCobro/1.JPG" alt="plaza de cobro">' +
     '<h4 class="fixedWindowTitle">PLAZA DE COBRO 119 ACAYUCAN: TRAMO ISLA: ACAYUCAN - COSOLEACAQUE 0+200.</h4>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 0+200 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> Ambos </p>' +
     '<h5 class="subTitle"> NÚMERO DE CABINAS </h5> <p class="description"> 5 </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> BUENA, SE REQUIERE REFORZAR CON SEÑALAMIENTO VERTICAL Y HORIZONTAL. </p>' +
     '<h5 class="subTitle"> LATITUD </h5> <p class="description"> 7º 54 35.97 </p>' +
     '<h5 class="subTitle"> LONGITUD </h5> <p class="description"> -94º 56 16.03 </p>' +
     '<h5 class="subTitle"> LONGITUD </h5> <p class="description"> 65.8 m.s.n.m. </p>' +
     '</div>', 17.909992, -94.937786]

    ];


var usRoadMapType = new google.maps.StyledMapType([
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#152f60'
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

var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 13,
    center: new google.maps.LatLng(17.910078, -94.937305),
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Cosoleacaque']
    },
    scaleControl: false,
    mapTypeControl: false,
    zoomControl: false,
    disableDoubleClickZoom: true,
    keyboardShortcuts: false,
    minZoom: 11
});

//Set map type road.highway
map.mapTypes.set('Cosoleacaque', usRoadMapType);
map.setMapTypeId('Cosoleacaque');
var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            jQuery('#infowindow').css('visibility', 'visible');
            jQuery('#infowindow').empty();
            jQuery('#infowindow').append(locations[i][0]);
        }
    })(marker, i));
}
