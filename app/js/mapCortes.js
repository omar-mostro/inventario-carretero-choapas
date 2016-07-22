
var map;
var gmarkers = [];
var currentScrollPosition;
var infowindow = new google.maps.InfoWindow();

   //locations array, contains the html to dsiplay the total info, the coordinates of all the services, a category to make the filter and a kilometer of the location service to display in the filter
    var locations = [

['<div id="fixedWindow">' +
 '<img src="img/Cortes/1.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 2+120 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">2+166 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">REGULAR INESTABILIDAD.</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 55 03" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 96.2 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910302,
-94.930053,
 'REGULAR INESTABILIDAD.',
' <b>Kilometro: </b> 2+120 <br> <b>Condición:</b> REGULAR INESTABILIDAD.',
'<a class="hvr-bounce-to-right" onClick="justOne( 1 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/2.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 0+970 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+030 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 55 48" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 108.8 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911462,
-94.915663,
 'ESTABLE',
' <b>Kilometro: </b> 0+970 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 2 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/3.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 1+340 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">EL TALUD DEL CORTE PRESENTA INESTABILIDAD.</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 54 56" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.914242,
-94.868175,
 'EL TALUD DEL CORTE PRESENTA INESTABILIDAD.',
' <b>Kilometro: </b> 1+340 <br> <b>Condición:</b> EL TALUD DEL CORTE PRESENTA INESTABILIDAD.',
'<a class="hvr-bounce-to-right" onClick="justOne( 3 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/4.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 7+223 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 51  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 52 05" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.2 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.913003,
-94.891115,
 'ESTABLE',
' <b>Kilometro: </b> 7+223 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 4 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/5.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 5+230 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">5+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">EL TALUD DEL CORTE PRESENTA INESTABILIDAD.</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 47  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 53 28" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 94.5 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.915048,
-94.86408,
 'EL TALUD DEL CORTE PRESENTA INESTABILIDAD.',
' <b>Kilometro: </b> 5+230 <br> <b>Condición:</b> EL TALUD DEL CORTE PRESENTA INESTABILIDAD.',
'<a class="hvr-bounce-to-right" onClick="justOne( 5 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/6.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 8+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">8+050 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 54 54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 51 51" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.6 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.918155,
-94.850573,
 'ESTABLE',
' <b>Kilometro: </b> 8+000 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 6 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/7.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 9+430 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">9+485 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 55 05  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 51 02" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 53.6 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.926867,
-94.808763,
 'ESTABLE',
' <b>Kilometro: </b> 9+430 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 7 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/8.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 14+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">14+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 55 37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 48 32" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.5 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.933085,
-94.705839,
 'ESTABLE',
' <b>Kilometro: </b> 14+000 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 8 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/9.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 25+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">25+120 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 55 59  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 42 21" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.982908,
-94.620398,
 'ESTABLE',
' <b>Kilometro: </b> 25+000 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 9 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/10.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 35+050 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">35+100 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">ESTABLE</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17 58 58  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94 37 13" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.982908,
-94.620398,
 'ESTABLE',
' <b>Kilometro: </b> 35+050 <br> <b>Condición:</b> ESTABLE',
'<a class="hvr-bounce-to-right" onClick="justOne( 10 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],



    ];


function initialize() {

   //Options for the street view
   var panoramaOptions = {
        addressControlOptions : { position : google.maps.ControlPosition.TOP_CENTER },
        enableCloseButton : true,
        visible: false //set to false so streetview is not triggered on the initial map load
    };

    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("map_canvas"), panoramaOptions);

    //Map options
    var mapOptions = {
        zoom:10,
        center: new google.maps.LatLng(17.910078, -94.937305),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scaleControl: false,
        mapTypeControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        minZoom: 9,
        streetView: panorama
    };

    //map canvas
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    //coordinates por the polyline
    var linePath = [
    {lat: 18.008377, lng: -94.58930800000002},
    {lat: 18.00758232358278, lng: -94.59084533988073},
    {lat: 18.00714475598872, lng: -94.59148681367452},
    {lat: 18.00669305569032, lng: -94.59202410220882},
    {lat: 18.00603963392975, lng: -94.59255150035597},
    {lat: 18.003253278219834, lng: -94.59493661202583},
    {lat: 17.998762056578343, lng: -94.59893417847843},
    {lat: 17.994837846327986, lng: -94.60223111389291},
    {lat: 17.99296755584813, lng: -94.60381515402383},
    {lat: 17.992017098909614, lng: -94.60473054257443},
    {lat: 17.991138067056546, lng: -94.60563519285222},
    {lat: 17.990350779792454, lng: -94.60654781833426},
    {lat: 17.98851273086686, lng: -94.60929057713793},
    {lat: 17.987082816102088, lng: -94.61221030958023},
    {lat: 17.98554570807342, lng: -94.61553768175474},
    {lat: 17.98391670219415, lng: -94.61886499423906},
    {lat: 17.981133064102124, lng: -94.62452173852671},
    {lat: 17.9780941332375, lng: -94.63045724138368},
    {lat: 17.976279653735197, lng: -94.63422000119238},
    {lat: 17.971617724254063, lng: -94.64342204315835},
    {lat: 17.97005974196078, lng: -94.64664166488114},
    {lat: 17.96879086653771, lng: -94.6490990322186},
    {lat: 17.968414961693878, lng: -94.64985049989866},
    {lat: 17.96758149667769, lng: -94.6513105031753},
    {lat: 17.966487776008275, lng: -94.65290996436079},
    {lat: 17.962331193281273, lng: -94.65944171495948},
    {lat: 17.961258836205054, lng: -94.66097402871105},
    {lat: 17.96029873240812, lng: -94.66254923993938},
    {lat: 17.958276430166286, lng: -94.66561377899075},
    {lat: 17.952013743227603, lng: -94.67533410302269},
    {lat: 17.950555152917833, lng: -94.67756423024332},
    {lat: 17.949152675203383, lng: -94.67967630466933},
    {lat: 17.94642420005218, lng: -94.68388962426218},
    {lat: 17.943374099356966, lng: -94.68858023987707},
    {lat: 17.940487206879354, lng: -94.69295958088549},
    {lat: 17.937698982519507, lng: -94.69699767995996},
    {lat: 17.936284423082338, lng: -94.69913469969231},
    {lat: 17.935094404853498, lng: -94.70112148537964},
    {lat: 17.934049821412007, lng: -94.7034467123492},
    {lat: 17.9332344367336, lng: -94.70608542416011},
    {lat: 17.932903287816337, lng: -94.70771590632876},
    {lat: 17.93271503210284, lng: -94.70930346843261},
    {lat: 17.931696467027823, lng: -94.71657633722009},
    {lat: 17.929816899561956, lng: -94.72977536871508},
    {lat: 17.926192935639225, lng: -94.75609210129983},
    {lat: 17.926056658527504, lng: -94.75759374543554},
    {lat: 17.926022449789706, lng: -94.75910611695667},
    {lat: 17.9260611724984, lng: -94.76267266474622},
    {lat: 17.926155983712476, lng: -94.7659495340726},
    {lat: 17.92620480353869, lng: -94.76926395747012},
    {lat: 17.92643498200445, lng: -94.77590351553874},
    {lat: 17.926534674919772, lng: -94.77921793527821},
    {lat: 17.92656285604334, lng: -94.78250553455382},
    {lat: 17.926838358658117, lng: -94.79565592874064},
    {lat: 17.92704723439396, lng: -94.80223382412157},
    {lat: 17.92702796513721, lng: -94.80405532553698},
    {lat: 17.927100549491595, lng: -94.8059733870399},
    {lat: 17.92712718448477, lng: -94.80739255773051},
    {lat: 17.927072145592415, lng: -94.80882245702867},
    {lat: 17.926948366624316, lng: -94.81004997311868},
    {lat: 17.926742915387806, lng: -94.81142769049211},
    {lat: 17.924304295576682, lng: -94.8225232859221},
    {lat: 17.923457859931908, lng: -94.82656987715791},
    {lat: 17.92179449719016, lng: -94.83405490930016},
    {lat: 17.92017168250619, lng: -94.84155052722804},
    {lat: 17.916807787818485, lng: -94.85691684701885},
    {lat: 17.915201953038235, lng: -94.86432086012383},
    {lat: 17.91487446222298, lng: -94.86624158171719},
    {lat: 17.914608204420276, lng: -94.86816229687588},
    {lat: 17.914415941688574, lng: -94.86992743932927},
    {lat: 17.914295121319576, lng: -94.87195007050252},
    {lat: 17.91377719669198, lng: -94.87984136887303},
    {lat: 17.91326917367587, lng: -94.88735174464176},
    {lat: 17.912114176645304, lng: -94.90562860956902},
    {lat: 17.909953, lng: -94.939167}
  ];

    //Polyline Options
    var line = new google.maps.Polyline({
        path: linePath,
        geodesic: true,
        strokeColor: '#cf8501',
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

        gmarkers.push(marker); //we pass the marker object to the global markers array which is empty

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                //With help of jquery we set the info window to the left side

            jQuery('#displayInfo').css('visibility', 'visible');
            jQuery('#displayInfo').empty();
            jQuery('#displayInfo').append(locations[i][0]);
            map.setZoom(16);
            map.setCenter(marker.getPosition());
            //this div is to put the scroll bar to the top
            var myDiv = document.getElementById('infowindow');
            myDiv.scrollTop = 0;
            //end





            }
        })(marker, i));

        //function to show info
       google.maps.event.addListener(marker, 'mouseover', (function(marker,i) {
           return function() {
               infowindow.setContent(locations[i][4]);
               infowindow.open(map, marker);
           }
         })(marker, i));

//        google.maps.event.addListener(marker, 'mouseout', (function(marker,i) {
//           return function() {
//               infowindow.close();
//           }
//         })(marker, i));

    }


    //call to the path coordinates function

    line.addListener('click', function () {
     getPathVariableCode(line);
 });

    //set map
    line.setMap(map);
};

//here we call the initialize function which load the map
google.maps.event.addDomListener(window, 'load', initialize);

//function to get all the coordinates of the polyline
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

    //the coordinates path it´s print on the console of the browser

    console.log (codeStr);
    console.log(pathArr.length);

};

//function to make the filter
function filterMarkers(category) {
    infowindow.close();
    var fullList = "";
    var servicesCounter = 1;

    for (i = 0; i < locations.length; i++) {
        marker = gmarkers[i]; //here we pass all the markers then we only show the selected one
        // If is same category or category not picked
        // console.log(gmarkers[i]);


        if (locations[i][3] == category && category.length != 0) {
            marker.setVisible(true);
             fullList += "<div class='squareInfo borderSquareInfoCortes'>"+ "<div class ='titleSquareInfo'>"+"Corte # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
             map.setZoom(10);

        } else if (category == "all") {

            marker.setVisible(true);
            fullList += "<div class='squareInfo borderSquareInfoCortes'>"+ "<div class ='titleSquareInfo'>"+"Corte # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
            map.setZoom(10);
        }

        else {
            marker.setVisible(false);
            fullList += "";
        }
    }

     //console.log(category);
    //console.log(fullList);

    $('#displayInfo').html(fullList);
    $( "#infowindow" ).scrollTop( 0 );

}

//this function is to display the info from the mas información button display on the checkList of only one element
function justOne(pos, scrollPosition) {

    infowindow.close();
    //this div is to put the scroll bar to the top
    var myDiv = document.getElementById('infowindow');
    myDiv.scrollTop = 0;
    //end

    var fullList = "";
    //console.log(pos);
    for (i = 0; i < locations.length; i++) {
        marker = gmarkers[i];

        if (i == pos - 1) {
            marker.setVisible(true);
            fullList += locations[i][0] + " " + "<br>" + "<br>";
            map.setCenter(marker.getPosition());
            map.setZoom(10);

        } else {
            marker.setVisible(false);

        }


    }
    //console.log(fullList);

    $('#displayInfo').html(fullList);
    currentScrollPosition = scrollPosition;
    console.log(scrollPosition);
}


//this function is to show all the mas información buttons when the page loads
function start(){
    var fullList = "";
    var servicesCounter = 1;

    for (i = 0; i < locations.length; i++) {

            fullList += "<div class='squareInfo borderSquareInfoCortes'>"+ "<div class ='titleSquareInfo'>"+"Corte # "+servicesCounter + "</div>" + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
    }


    $('#displayInfo').html(fullList);


}


function back() {
    var fullList = "";
    var servicesCounter = 1;

    //this div is to put the scroll bar to the top
    //var myDiv = document.getElementById('infowindow');
    console.log(currentScrollPosition);
    //myDiv.scrollTop = 60000;

    //end

    //this section is to get the selected option from the select
    var e = document.getElementById("singleSelect");
    var selectValue = e.options[e.selectedIndex].value;
    //end

    //console.log(selectValue);
    map.setZoom(10);


    for (i = 0; i < locations.length; i++) {
        if (locations[i][3] == selectValue) {

            fullList += "<div class='squareInfo borderSquareInfoCortes'>" + "<div class ='titleSquareInfo'>" +"Corte # "+servicesCounter + "</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;
        }
        //this else is to show all the info
        else if (selectValue == "all"){

            fullList += "<div class='squareInfo borderSquareInfoCortes'>" + "<div class ='titleSquareInfo'>" +"Corte # "+servicesCounter +"</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;

        }
    }


    $('#displayInfo').html(fullList);
    $( "#infowindow" ).scrollTop( currentScrollPosition );
    currentScrollPosition = 0;


}


