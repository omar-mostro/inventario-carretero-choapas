var map;

function initialize() {


    //locations array
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

    //Map options
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(17.910078, -94.937305),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scaleControl: false,
        mapTypeControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        minZoom: 11
    };

    //map canvas
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    //coordinates por the polyline
    var linePath = [
    {lat: 18.008377, lng: -94.58930800000002},
    {lat: 17.98896299121444, lng: -94.60667119994895},
    {lat: 17.965538646440187, lng: -94.65242716673811},
    {lat: 17.934264179598323, lng: -94.7036612890704},
    {lat: 17.926744166338054, lng: -94.7561779319883},
    {lat: 17.927355391934224, lng: -94.81176028440996},
    {lat: 17.91351415578552, lng: -94.8720895453713},
    {lat: 17.909953, lng: -94.939167}
  ];

    //Polyline Options
    var line = new google.maps.Polyline({
        path: linePath,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeOpacity: 0.8,
        strokeWeight: 8,
        editable: false
    });

    //this for show all the markers and content specified on the locations array
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                //With help of jquery we set the info window to the left side
                jQuery('#infowindow').css('visibility', 'visible');
                jQuery('#infowindow').empty();
                jQuery('#infowindow').append(locations[i][0]);
            }
        })(marker, i));
    }


    //call to the path coordinates function

    line.addListener('click', function () {
        prompt('The declaration of the path', getPathVariableCode(line));
    });

    //set map
    line.setMap(map);
};

//here we call the initialize function which load the map
google.maps.event.addDomListener(window, 'load', initialize);

//function to get the coordinates of the polyline
function getPathVariableCode(line) {
    var codeStr = '  var linePath = [\n';
    var pathArr = line.getPath();
    for (var i = 0; i < pathArr.length; i++) {
        codeStr += '    {lat: ' + pathArr.getAt(i).lat() + ', lng: ' + pathArr.getAt(i).lng() + '}';
        if (i !== pathArr.length - 1) {
            codeStr += ',\n';
        };
    };
    codeStr += '\n  ];';
    return codeStr;
};
