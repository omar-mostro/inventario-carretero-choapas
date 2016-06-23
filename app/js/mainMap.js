var map;
function initialize() {

    //vars to show the info window of the main page
    var km0 = '<div class="infoWindow"><div class="title"> Inicio de la obra</div><div class="info-image"> <img src="./img/inicioCosoloacaque.jpg" /></div><div class="description"> km 0+000 acayucan cosoleacaque </div></div>'

    var km40Code = '<div class="infoWindow"><div class="title"> Final de la obra </div><div class="info-image"> <img src="./img/finalCosoloacaque.jpg" /></div><div class="description"> Kilometro 40 </div></div>'

    //locations array
    var locations = [
    [km40Code, 18.008377, -94.589308],
    [km0, 17.909953, -94.939167]
    ];

   //Options for the strret view
   var panoramaOptions = {
        addressControlOptions : { position : google.maps.ControlPosition.TOP_CENTER },
        enableCloseButton : true,
        visible: false //set to false so streetview is not triggered on the initial map load
    };

    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("map_canvas"), panoramaOptions);

    //Map options
   var mapOptions = {
	zoom: 11,
    center: new google.maps.LatLng(18.039871, -94.744801),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    scaleControl: false,
    mapTypeControl: false,
    zoomControl: false,
    draggable: false,
    disableDoubleClickZoom: true,
    keyboardShortcuts: false,
    maxZoom: 11,
    minZoom: 11,
    streetView : panorama //this is where we set the panorama object to the map
  }
    //map canvas
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions );
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
for (var i = 0; i < locations.length; i++) {
    //here is where the marker is set
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });
    //here is where we call the content of the info window
    var infowindow = new google.maps.InfoWindow({
        content: locations[i][0]
    });
    infowindow.open(map, marker);
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
function getPathVariableCode(line){
	var codeStr = '  var linePath = [\n';
	var pathArr = line.getPath();
	for (var i = 0; i < pathArr.length; i++){
		codeStr += '    {lat: ' + pathArr.getAt(i).lat() + ', lng: ' + pathArr.getAt(i).lng() + '}' ;
        if (i !== pathArr.length-1) {
			codeStr += ',\n';
		};
	};
	codeStr += '\n  ];';
	return codeStr;
};
