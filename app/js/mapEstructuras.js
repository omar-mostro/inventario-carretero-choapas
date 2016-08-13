
var map;
var gmarkers = [];
var currentScrollPosition;
var infowindow = new google.maps.InfoWindow();

   //locations array, contains the html to dsiplay the total info, the coordinates of all the services, a category to make the filter and a kilometer of the location service to display in the filter
    var locations = [
['<div id="fixedWindow">' +
 '<img src="img/Estructuras/1.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+500.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE PIEZAS DE DEFENSA METÁLICA, LIMPIEZA EN CONOS DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°4  5.55"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°14  59.05"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 66.48 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.06820833,
-94.24973611,
 'KM 0+000 AL 5+000',
' <b>Kilómetro: </b> 0+500.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 1 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/2.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 4+040.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE PIEZAS PARA PARAPETO Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18° 2  34.86"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 13  59.37"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 71.36 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.04301667,
-94.23315833,
 'KM 0+000 AL 5+000',
' <b>Kilómetro: </b> 4+040.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 2 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/3.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+030.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 58  29.58"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 11  14.59"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.97488333,
-94.18738611,
 'KM 10+000 AL 15+000',
' <b>Kilómetro: </b> 13+030.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 3 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/4.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+830.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE PIEZAS PARA PARAPETO Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 56  37.47"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 10  18.12"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94374167,
-94.1717,
 'KM 15+000 AL 20+000',
' <b>Kilómetro: </b> 16+830.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 4 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/5.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+480.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN Y MANTENIMIENTO A LOS CONOS DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.S.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 56  18.2"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 10  8.51"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.95 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93838889,
-94.16903056,
 'KM 15+000 AL 20+000',
' <b>Kilómetro: </b> 17+480.00 <br> <b>Tipo:</b> PSV <br> <b>Descripción:</b> P.S.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 5 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/6.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+230.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,  SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 55  56.45"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 9  57.42"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 57.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93234722,
-94.16595,
 'KM 15+000 AL 20+000',
' <b>Kilómetro: </b> 18+230.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 6 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/7.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 21+650.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  30.95"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 8  45.96"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 44.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.90859722,
-94.1461,
 'KM 20+000 AL 25+000',
' <b>Kilómetro: </b> 21+650.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 7 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/8.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 22+490.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  10.29"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 8  27.58"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 43.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.90285833,
-94.14099444,
 'KM 20+000 AL 25+000',
' <b>Kilómetro: </b> 22+490.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 8 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/9.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+150.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A/B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, SUSTITUCIÓN DE PIEZAS DE PARAPETO, SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 53  54.44"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 8  13.32"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 44.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.89845556,
-94.13703333,
 'KM 20+000 AL 25+000',
' <b>Kilómetro: </b> 23+150.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 9 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/10.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+530.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPOSICIÓN DE TERRAPLÉN EN CONO DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 53  20.59"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 7  42.8"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.88905278,
-94.12855556,
 'KM 20+000 AL 25+000',
' <b>Kilómetro: </b> 24+530.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 10 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/11.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+050.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN EN CONO DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 53  5.75"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 7  31.09"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.5 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.88493056,
-94.12530278,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 25+050.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 11 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/12.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+640.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPOSICIÓN DE TERRAPLÉN EN CONO DE DERRAME Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> F.F.C.C. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 52  49.9"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 7  19.96"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.35 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.88052778,
-94.12221111,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 25+640.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> F.F.C.C.',
'<a class="hvr-bounce-to-right" onClick="justOne( 12 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/13.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A/B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE, RELLENO Y COMPACTACIÓN DE TERRAPLÉN EN ACCESOS. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 52  20.13"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 6  58.56"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.35 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.87225833,
-94.11626667,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 26+820.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 13 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/14.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+700.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 51  56.97"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 6  41.96"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.865825,
-94.11165556,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 27+700.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 14 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/15.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 51  44.63"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 6  33.15"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.86239722,
-94.10920833,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 28+180.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 15 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/16.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+240.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 51  17.02"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 6  12.81"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.4 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.85472778,
-94.10355833,
 'KM 25+000 AL 30+000',
' <b>Kilómetro: </b> 29+240.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 16 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/17.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+010.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 50  34.28"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 5  32.09"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.84285556,
-94.09224722,
 'KM 30+000 AL 35+000',
' <b>Kilómetro: </b> 31+010.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 17 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/18.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+260.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 50  5.13"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 5  4.18"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33.75 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.83475833,
-94.08449444,
 'KM 30+000 AL 35+000',
' <b>Kilómetro: </b> 32+260.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 18 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/19.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+900.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A/B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 49  49.8"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 4  49.45"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.8305,
-94.08040278,
 'KM 30+000 AL 35+000',
' <b>Kilómetro: </b> 32+900.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 19 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/20.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 33+850.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN EN CONO DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 49  27.67"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 4  28.53"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 41.6 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.82435278,
-94.07459167,
 'KM 30+000 AL 35+000',
' <b>Kilómetro: </b> 33+850.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 20 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/21.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+730.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 48  6.12"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 3  41.97"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.35 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.8017,
-94.06165833,
 'KM 35+000 AL 40+000',
' <b>Kilómetro: </b> 36+730.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 21 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/22.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+610.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN Y MANTENIMIENTO A LOS CONOS DE DERRAME  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 47  40.95"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 3  28.53"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.79470833,
-94.057925,
 'KM 35+000 AL 40+000',
' <b>Kilómetro: </b> 37+610.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 22 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/23.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 40+000 AL 45+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 40+420.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 46  21.7"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 2  44.62"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.05 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.77269444,
-94.04572778,
 'KM 40+000 AL 45+000',
' <b>Kilómetro: </b> 40+420.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 23 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/24.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 40+000 AL 45+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 40+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> RÍO CICHOAPAN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°46  12.97"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 2  24.03"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.77026944,
-94.04000833,
 'KM 40+000 AL 45+000',
' <b>Kilómetro: </b> 40+820.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> RÍO CICHOAPAN',
'<a class="hvr-bounce-to-right" onClick="justOne( 24 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/25.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 40+000 AL 45+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 41+340.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN DE GRIETAS, REFUERZO DE ESTRUCTURA Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> RÍO CAUCE LAGUNA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 46  7.88"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 2  6.98"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 9.37 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.76885556,
-94.03527222,
 'KM 40+000 AL 45+000',
' <b>Kilómetro: </b> 41+340.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> RÍO CAUCE LAGUNA',
'<a class="hvr-bounce-to-right" onClick="justOne( 25 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/26.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 40+000 AL 45+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 42+640.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,   SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> RÍO CUCHUAPA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 45  55.38"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 1  25.18"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.95 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.76538333,
-94.02366111,
 'KM 40+000 AL 45+000',
' <b>Kilómetro: </b> 42+640.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> RÍO CUCHUAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 26 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/27.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 40+000 AL 45+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 44+890.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPOSICIÓN DE MATERIAL DE TERRAPLÉN EN ACCESOS Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 45  25.87"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 0  15.05"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.5 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.75718611,
-94.00418056,
 'KM 40+000 AL 45+000',
' <b>Kilómetro: </b> 44+890.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 27 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/28.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 45+000 AL 50+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 46+230.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> P.I.V. </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 44  59.88"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 59  39.22"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.74996667,
-93.99422778,
 'KM 45+000 AL 50+000',
' <b>Kilómetro: </b> 46+230.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> P.I.V.',
'<a class="hvr-bounce-to-right" onClick="justOne( 28 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/29.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 45+000 AL 50+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 48+590.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> RÍO PLAYA I </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 44  13.48"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 58  35.89"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.73707778,
-93.97663611,
 'KM 45+000 AL 50+000',
' <b>Kilómetro: </b> 48+590.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> RÍO PLAYA I',
'<a class="hvr-bounce-to-right" onClick="justOne( 29 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/30.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 45+000 AL 50+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 48+770.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA),  LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> RÍO PLAYA II </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 44  10.05"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 58  31.05"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.736125,
-93.97529167,
 'KM 45+000 AL 50+000',
' <b>Kilómetro: </b> 48+770.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> RÍO PLAYA II',
'<a class="hvr-bounce-to-right" onClick="justOne( 30 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],
        
['<div id="fixedWindow">' +
 '<img src="img/Estructuras/31.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 50+000 AL 55+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 54+420.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE,  Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 42  18.44"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 55  58.34"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.65 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.70512222,
-93.93287222,
 'KM 50+000 AL 55+000',
' <b>Kilómetro: </b> 54+420.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 31 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/32.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 55+000 AL 60+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 55+460.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN DE CONO DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 41  57.92"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 55  30.24"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.4 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.69942222,
-93.92506667,
 'KM 55+000 AL 60+000',
' <b>Kilómetro: </b> 55+460.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 32 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/33.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 55+000 AL 60+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 56+350.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL, SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 41  42.29"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 55  4.58"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.69508056,
-93.91793889,
 'KM 55+000 AL 60+000',
' <b>Kilómetro: </b> 56+350.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 33 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/34.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 55+000 AL 60+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 57+660.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 41  25.05"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 54  24.12"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.69029167,
-93.9067,
 'KM 55+000 AL 60+000',
' <b>Kilómetro: </b> 57+660.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 34 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/35.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 55+000 AL 60+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 58+280.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 41  16.83"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 54  5.15"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.68800833,
-93.90143056,
 'KM 55+000 AL 60+000',
' <b>Kilómetro: </b> 58+280.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 35 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/36.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 60+000 AL 65+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 61+530.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 40  24.8"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 52  29.3"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 44.75 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.67355556,
-93.87480556,
 'KM 60+000 AL 65+000',
' <b>Kilómetro: </b> 61+530.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 36 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/37.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 60+000 AL 65+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 62+470.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 40  8.29"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 52  2.52"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 53.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.66896944,
-93.86736667,
 'KM 60+000 AL 65+000',
' <b>Kilómetro: </b> 62+470.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 37 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/38.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 65+000 AL 70+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 65+420.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 39  16.49"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 50  38.03"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 39.75 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.65458056,
-93.84389722,
 'KM 65+000 AL 70+000',
' <b>Kilómetro: </b> 65+420.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 38 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/39.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 65+000 AL 70+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 67+810.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 38  37.86"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 49  28.02"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 42.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.64385,
-93.82445,
 'KM 65+000 AL 70+000',
' <b>Kilómetro: </b> 67+810.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 39 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/40.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 70+000 AL 75+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 71+620.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE, REPARACIÓN DE GRIETAS Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 37  38.27"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 47  34.83"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 36.35 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.62729722,
-93.79300833,
 'KM 70+000 AL 75+000',
' <b>Kilómetro: </b> 71+620.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 40 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/41.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 70+000 AL 75+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 72+030.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 37  32.43"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 47  23.96"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.625675,
-93.78998889,
 'KM 70+000 AL 75+000',
' <b>Kilómetro: </b> 72+030.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 41 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/42.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 75+000 AL 80+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 79+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 35  46.49"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 43  49.76"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.2 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.59624722,
-93.73048889,
 'KM 75+000 AL 80+000',
' <b>Kilómetro: </b> 79+100.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 42 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/43.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 80+000 AL 85+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 82+620.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL, SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 34  32.08"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 42  20.2"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 38.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.57557778,
-93.70561111,
 'KM 80+000 AL 85+000',
' <b>Kilómetro: </b> 82+620.00 <br> <b>Tipo:</b> PIV <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 43 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/44.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 80+000 AL 85+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 80+700.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 35  17.5"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 43  7.11"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.58819444,
-93.71864167,
 'KM 80+000 AL 85+000',
' <b>Kilómetro: </b> 80+700.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 44 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/45.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 85+000 AL 90+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 85+290.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 33  36.31"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 41  13.39"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.05 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.56008611,
-93.68705278,
 'KM 85+000 AL 90+000',
' <b>Kilómetro: </b> 85+290.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 45 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/46.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 85+000 AL 90+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 86+690.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 33  11.21"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 40  31.38"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.25 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.55311389,
-93.67538333,
 'KM 85+000 AL 90+000',
' <b>Kilómetro: </b> 86+690.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 46 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/47.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 85+000 AL 90+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 89+620.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 32  4.99"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 39  20.52"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 49.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.53471944,
-93.6557,
 'KM 85+000 AL 90+000',
' <b>Kilómetro: </b> 89+620.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 47 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/48.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 90+000 AL 95+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 94+330.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PINTURA EN TODO EL PUENTE Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 29  48.05"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 38  12.27"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 55.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.49668056,
-93.63674167,
 'KM 90+000 AL 95+000',
' <b>Kilómetro: </b> 94+330.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 48 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/49.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 95+000 AL 100+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 96+150.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A/B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, PROTECCIÓN EN APOYO INTERMEDIO PARA EVITAR SOCAVACIÓN,  RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 28  52.49"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 37  56.95"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.48124722,
-93.63248611,
 'KM 95+000 AL 100+000',
' <b>Kilómetro: </b> 96+150.00 <br> <b>Tipo:</b> PUENTE <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 49 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/50.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 100+000 AL 105+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 104+090 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 27  32.83"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 36  58.62"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 171.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
 17.415974,
-93.616315,
 'KM 100+000 AL 105+000',
' <b>Kilómetro: </b> 104+090 <br> <b>Tipo:</b> PIV 1 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 50 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/51.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 110+000 AL 115+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 2 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 110+790 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD,  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 21  54.88"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  33.19"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 235.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.36524444,
-93.59255278,
 'KM 110+000 AL 115+000',
' <b>Kilómetro: </b> 110+790 <br> <b>Tipo:</b> PIV 2 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 51 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/52.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 110+000 AL 115+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 3 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 112+830 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 20  53.07"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  9.08"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 167.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.348075,
-93.58585556,
 'KM 110+000 AL 115+000',
' <b>Kilómetro: </b> 112+830 <br> <b>Tipo:</b> PIV 3 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 52 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/53.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 110+000 AL 115+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 113+330 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD,  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 20  34.07"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  5.74"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 146.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.34279722,
-93.58492778,
 'KM 110+000 AL 115+000',
' <b>Kilómetro: </b> 113+330 <br> <b>Tipo:</b> PUENTE 1 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 53 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/54.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 115+000 AL 120+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 4 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 115+370 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 19  36.62"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  30.26"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 229.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.32683889,
-93.59173889,
 'KM 115+000 AL 120+000',
' <b>Kilómetro: </b> 115+370 <br> <b>Tipo:</b> PIV 4 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/55.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 120+000 AL 125+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 124+040 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN EN CONO DE DERRAME  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 15  26.61"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  1.43"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 251.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.25739167,
-93.56706389,
 'KM 120+000 AL 125+000',
' <b>Kilómetro: </b> 124+040 <br> <b>Tipo:</b> PSV 1 <br> <b>Descripción:</b> PSV',
'<a class="hvr-bounce-to-right" onClick="justOne( 55 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/56.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 125+000 AL 130+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 2 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 128+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN, MANTENIMIENTO A LOS CONOS DE DERRAME Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 13  21.01"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 33  17.84"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 87.05 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.22250278,
-93.55495556,
 'KM 125+000 AL 130+000',
' <b>Kilómetro: </b> 128+880 <br> <b>Tipo:</b> PUENTE 2 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 56 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/57.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 130+000 AL 135+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 5 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 134+030 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A/B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 11  11.73"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 33  51.95"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 241.13 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.18659167,
-93.56443056,
 'KM 130+000 AL 135+000',
' <b>Kilómetro: </b> 134+030 <br> <b>Tipo:</b> PIV 5 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 57 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/58.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 135+000 AL 140+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 6 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 137+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 10  17.05"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  56.62"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 208.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.17140278,
-93.58239444,
 'KM 135+000 AL 140+000',
' <b>Kilómetro: </b> 137+200 <br> <b>Tipo:</b> PIV 6 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 58 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/59.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 135+000 AL 140+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 3 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 137+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 10  9.65"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  16.48"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 188.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.16934722,
-93.58791111,
 'KM 135+000 AL 140+000',
' <b>Kilómetro: </b> 137+840 <br> <b>Tipo:</b> PUENTE 3 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 59 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/60.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 140+000 AL 145+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 4 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 140+090 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUPERVISIÓN CONSTANTE DE LA ZONA METÁLICA PARA MONITOREAR CORROCIÓN. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 9  6.33"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  40.04"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 182.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.15175833,
-93.59445556,
 'KM 140+000 AL 145+000',
' <b>Kilómetro: </b> 140+090 <br> <b>Tipo:</b> PUENTE 4 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 60 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/61.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 140+000 AL 145+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 7 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 144+170 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 7  10.17"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  17.63"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 276.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.11949167,
-93.58823056,
 'KM 140+000 AL 145+000',
' <b>Kilómetro: </b> 144+170 <br> <b>Tipo:</b> PIV 7 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 61 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/62.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 145+000 AL 150+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 8 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 146+990 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 5  53.63"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  16.79"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 355.4 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.09823056,
-93.58799722,
 'KM 145+000 AL 150+000',
' <b>Kilómetro: </b> 146+990 <br> <b>Tipo:</b> PIV 8 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 62 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/63.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 145+000 AL 150+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 9 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 148+070 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 5  21.46"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 35  3.9"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 295.85 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.08929444,
-93.58441667,
 'KM 145+000 AL 150+000',
' <b>Kilómetro: </b> 148+070 <br> <b>Tipo:</b> PIV 9 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 63 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/64.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 145+000 AL 150+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV 2 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 149+190 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 4  51.98"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  43.1"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 256.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.08110556,
-93.57863889,
 'KM 145+000 AL 150+000',
' <b>Kilómetro: </b> 149+190 <br> <b>Tipo:</b> PSV 2 <br> <b>Descripción:</b> PSV',
'<a class="hvr-bounce-to-right" onClick="justOne( 64 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/65.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 145+000 AL 150+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 10 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 150+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 4  22.44"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  32.92"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 251 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.0729,
-93.57581111,
 'KM 145+000 AL 150+000',
' <b>Kilómetro: </b> 150+000 <br> <b>Tipo:</b> PIV 10 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 65 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/66.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 150+000 AL 155+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 150+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 3  51.83"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  28.75"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 269.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.06439722,
-93.57465278,
 'KM 150+000 AL 155+000',
' <b>Kilómetro: </b> 150+930 <br> <b>Tipo:</b> PIV 1 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 66 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/67.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 150+000 AL 155+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 152+450 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 3  16.96"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 34  3.11"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 221.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.05471111,
-93.56753056,
 'KM 150+000 AL 155+000',
' <b>Kilómetro: </b> 152+450 <br> <b>Tipo:</b> PUENTE 1 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 67 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/68.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 150+000 AL 155+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV 1 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 154+780 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN EN CONO DE DERRAME  Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 2  27.65"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 33  9.64"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 236.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.04101389,
-93.55267778,
 'KM 150+000 AL 155+000',
' <b>Kilómetro: </b> 154+780 <br> <b>Tipo:</b> PSV 1 <br> <b>Descripción:</b> PSV',
'<a class="hvr-bounce-to-right" onClick="justOne( 68 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/69.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 155+000 AL 160+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 2 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 155+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 2  14.75"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 32  57.1"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 258.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.03743056,
-93.54919444,
 'KM 155+000 AL 160+000',
' <b>Kilómetro: </b> 155+160 <br> <b>Tipo:</b> PIV 2 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 69 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/70.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 155+000 AL 160+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 3 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 156+040 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 2  0.62"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 32  28.86"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 269.5 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.03350556,
-93.54135,
 'KM 155+000 AL 160+000',
' <b>Kilómetro: </b> 156+040 <br> <b>Tipo:</b> PIV 3 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 70 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/71.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 155+000 AL 160+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 2 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 159+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, RETIRO DE VEGETACIÓN   Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 1  29.33"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 31  8.5"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 340.1 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.02481389,
-93.51902778,
 'KM 155+000 AL 160+000',
' <b>Kilómetro: </b> 159+080 <br> <b>Tipo:</b> PUENTE 2 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 71 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/72.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 160+000 AL 165+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 4 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 160+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 1  8.82"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 30  42.55"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 404.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.01911667,
-93.51181944,
 'KM 160+000 AL 165+000',
' <b>Kilómetro: </b> 160+080 <br> <b>Tipo:</b> PIV 4 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 72 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/73.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 155+000 AL 160+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 5 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 163+420 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 59  42.84"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 29  41.22"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 606.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.99523333,
-93.49478333,
 'KM 155+000 AL 160+000',
' <b>Kilómetro: </b> 163+420 <br> <b>Tipo:</b> PIV 5 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 73 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/74.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 165+000 AL 170+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV 3 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 166+410 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 58  21.06"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 28  55.16"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 658.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.97251667,
-93.48198889,
 'KM 165+000 AL 170+000',
' <b>Kilómetro: </b> 166+410 <br> <b>Tipo:</b> PSV 3 <br> <b>Descripción:</b> PSV',
'<a class="hvr-bounce-to-right" onClick="justOne( 74 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/75.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 165+000 AL 170+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 6 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 168+530 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 57  16.26"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 28  43.71"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 740.95 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.95451667,
-93.47880833,
 'KM 165+000 AL 170+000',
' <b>Kilómetro: </b> 168+530 <br> <b>Tipo:</b> PIV 6 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 75 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/76.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 170+000 AL 175+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PSV 4 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 173+100 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PSV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 55  20.07"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 27  10.57"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 877.15 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.922242,
-93.452936,
 'KM 170+000 AL 175+000',
' <b>Kilómetro: </b> 173+100 <br> <b>Tipo:</b> PSV 4 <br> <b>Descripción:</b> PSV',
'<a class="hvr-bounce-to-right" onClick="justOne( 76 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/77.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 175+000 AL 180+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 7 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 177+460 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 53  39.45"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 25  50.81"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 938.7 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.89429167,
-93.43078056,
 'KM 175+000 AL 180+000',
' <b>Kilómetro: </b> 177+460 <br> <b>Tipo:</b> PIV 7 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 77 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/78.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 175+000 AL 180+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 8 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 178+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 53  11.38"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 25  20.08"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 904.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.88649444,
-93.42224444,
 'KM 175+000 AL 180+000',
' <b>Kilómetro: </b> 178+760 <br> <b>Tipo:</b> PIV 8 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 78 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/79.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 180+000 AL 185+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 9 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 180+990 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 52  7.7"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 24  50.57"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 888.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.86880556,
-93.41404722,
 'KM 180+000 AL 185+000',
' <b>Kilómetro: </b> 180+990 <br> <b>Tipo:</b> PIV 9 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 79 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/80.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 180+000 AL 185+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PUENTE 3 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 181+110 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 52  3.6"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 24  49.67"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 882.65 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.86766667,
-93.41379722,
 'KM 180+000 AL 185+000',
' <b>Kilómetro: </b> 181+110 <br> <b>Tipo:</b> PUENTE 3 <br> <b>Descripción:</b> PUENTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 80 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/81.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 180+000 AL 185+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 10 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 181+910 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 51  48.87"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 24  28.52"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 924.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.863575,
-93.40792222,
 'KM 180+000 AL 185+000',
' <b>Kilómetro: </b> 181+910 <br> <b>Tipo:</b> PIV 10 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 81 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/82.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 180+000 AL 185+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 11 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 182+550 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 51  39.86"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 24  8.23"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 938.35 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.86107222,
-93.40228611,
 'KM 180+000 AL 185+000',
' <b>Kilómetro: </b> 182+550 <br> <b>Tipo:</b> PIV 11 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 82 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/83.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 185+000 AL 190+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 12 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 186+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 50  1.63"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 22  53.91"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 979.25 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.83378611,
-93.38164167,
 'KM 185+000 AL 190+000',
' <b>Kilómetro: </b> 186+380 <br> <b>Tipo:</b> PIV 12 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 83 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/84.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 185+000 AL 190+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 13 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 189+750 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 48  33.62"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 21  50.01"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 1080.3 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.80933889,
-93.36389167,
 'KM 185+000 AL 190+000',
' <b>Kilómetro: </b> 189+750 <br> <b>Tipo:</b> PIV 13 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 84 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/85.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 195+000 AL 197+500 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV 14 </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 196+690 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">ÚNICO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">16° 46  8.4"N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 93° 18  57.5"W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 1077.55 </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
16.769,
-93.31597222,
 'KM 195+000 AL 197+500',
' <b>Kilómetro: </b> 196+690 <br> <b>Tipo:</b> PIV 14 <br> <b>Descripción:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 85 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],
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
        zoom:9,
        center: new google.maps.LatLng(17.519428, -93.848432),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scaleControl: false,
        mapTypeControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        minZoom: 5,
        streetView: panorama
    };

    //map canvas
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    //coordinates por the polyline
   var linePath = [
    {lat: 18.068652, lng: -94.25055299999997},
    {lat: 18.068286631177894, lng: -94.2498601190211},
    {lat: 18.067554067943473, lng: -94.24916724237386},
    {lat: 18.066088935355175, lng: -94.24821065528113},
    {lat: 18.054223330517928, lng: -94.24131966320505},
    {lat: 18.04862056393551, lng: -94.23745460471594},
    {lat: 18.039998173270387, lng: -94.23084338793717},
    {lat: 18.026139781555205, lng: -94.22045458106913},
    {lat: 18.019108367807036, lng: -94.21513205324527},
    {lat: 18.011729937188697, lng: -94.20953100064378},
    {lat: 18.00906987971749, lng: -94.20748381615806},
    {lat: 18.00653586212296, lng: -94.20583799513571},
    {lat: 18.00212440036227, lng: -94.20329103448273},
    {lat: 17.992151349932342, lng: -94.19756671671792},
    {lat: 17.981749530502192, lng: -94.19149975529422},
    {lat: 17.97654855211571, lng: -94.18840216429237},
    {lat: 17.9713883521169, lng: -94.18577680997595},
    {lat: 17.95032862956103, lng: -94.17511611018034},
    {lat: 17.93979855487754, lng: -94.16982961760641},
    {lat: 17.934513050652125, lng: -94.16710077273274},
    {lat: 17.92945208471737, lng: -94.16454373879003},
    {lat: 17.927025923494455, lng: -94.16279312964082},
    {lat: 17.924354744484987, lng: -94.16037738800378},
    {lat: 17.88389266290509, lng: -94.12372936490056},
    {lat: 17.85565087066235, lng: -94.10519426522961},
    {lat: 17.822737806541422, lng: -94.07292937601778},
    {lat: 17.772986973671298, lng: -94.0461716474012},
    {lat: 17.76145442130673, lng: -94.01043296475945},
    {lat: 17.727352138337746, lng: -93.96234534904124},
    {lat: 17.696146178744165, lng: -93.92063261505405},
    {lat: 17.68275881670568, lng: -93.889743907803},
    {lat: 17.650324523048788, lng: -93.83686144032544},
    {lat: 17.64880778952793, lng: -93.83429606605279},
    {lat: 17.647454602274788, lng: -93.83155907265359},
    {lat: 17.644257349770623, lng: -93.82539859117259},
    {lat: 17.63843488039634, lng: -93.81372192894969},
    {lat: 17.63238681244171, lng: -93.80208896172564},
    {lat: 17.625969985059005, lng: -93.79071428201757},
    {lat: 17.612897562356903, lng: -93.7608889580988},
    {lat: 17.592123624592542, lng: -93.72280499664663},
    {lat: 17.566272004734184, lng: -93.69605601856472},
    {lat: 17.56260160189792, lng: -93.69117076121597},
    {lat: 17.55267066964117, lng: -93.67457025881686},
    {lat: 17.54284125843732, lng: -93.66404334605033},
    {lat: 17.532602105928845, lng: -93.65368925067497},
    {lat: 17.525751696620937, lng: -93.64968035229043},
    {lat: 17.51905278564816, lng: -93.64776218838063},
    {lat: 17.50956112431913, lng: -93.64316265140565},
    {lat: 17.50015119451819, lng: -93.6378769833305},
    {lat: 17.48930847779957, lng: -93.63503788814728},
    {lat: 17.478261055335395, lng: -93.6315983619445},
    {lat: 17.47709703014295, lng: -93.6317252553165},
    {lat: 17.472903852370955, lng: -93.63374039230757},
    {lat: 17.47099145671139, lng: -93.63410421033018},
    {lat: 17.4682603477176, lng: -93.63386721191608},
    {lat: 17.46626609252123, lng: -93.63444559347397},
    {lat: 17.464695849696426, lng: -93.63593640675555},
    {lat: 17.4626211902102, lng: -93.63640285621511},
    {lat: 17.46038278043903, lng: -93.63549601987341},
    {lat: 17.458594856005792, lng: -93.63431351996098},
    {lat: 17.45598152990436, lng: -93.63406568283932},
    {lat: 17.452996455087234, lng: -93.63295476480027},
    {lat: 17.450152989801364, lng: -93.63274272190228},
    {lat: 17.436530637213764, lng: -93.62843104521437},
    {lat: 17.43283841796011, lng: -93.62752490151172},
    {lat: 17.429064304522154, lng: -93.62627547915713},
    {lat: 17.42327669765926, lng: -93.6208156553987},
    {lat: 17.422732292081555, lng: -93.62022663331135},
    {lat: 17.421334060268705, lng: -93.61919183213104},
    {lat: 17.418748350740433, lng: -93.61710565191765},
    {lat: 17.416920162125333, lng: -93.61634995630203},
    {lat: 17.408704065318364, lng: -93.61593761555184},
    {lat: 17.40491070098355, lng: -93.61501052532378},
    {lat: 17.401335129003435, lng: -93.61330253927866},
    {lat: 17.396680775500084, lng: -93.61292073068745},
    {lat: 17.394435587322874, lng: -93.6120432598421},
    {lat: 17.38876718020907, lng: -93.6069268036349},
    {lat: 17.385998563476406, lng: -93.6053687957583},
    {lat: 17.38322993940074, lng: -93.60449747014542},
    {lat: 17.380313858845717, lng: -93.60249742064622},
    {lat: 17.375492934326118, lng: -93.59853588816014},
    {lat: 17.371163437749225, lng: -93.5957761532581},
    {lat: 17.366059679894786, lng: -93.59293716333434},
    {lat: 17.359022754301638, lng: -93.59070243346645},
    {lat: 17.350507048580656, lng: -93.5870639829908},
    {lat: 17.346497165268268, lng: -93.58514233619314},
    {lat: 17.34584915915974, lng: -93.58475021976642},
    {lat: 17.344668624643955, lng: -93.58457268290005},
    {lat: 17.34332564364503, lng: -93.58475750103452},
    {lat: 17.342289893008456, lng: -93.58519980707774},
    {lat: 17.339656518741464, lng: -93.58727287782978},
    {lat: 17.337350847144386, lng: -93.58895965988575},
    {lat: 17.336600454260758, lng: -93.58953303843492},
    {lat: 17.335645231792395, lng: -93.58980600564217},
    {lat: 17.334481437737793, lng: -93.58999612374942},
    {lat: 17.331801891076896, lng: -93.5900145782964},
    {lat: 17.329675404166686, lng: -93.59041925146988},
    {lat: 17.326912007610275, lng: -93.59180174097389},
    {lat: 17.325366434397374, lng: -93.59219256514325},
    {lat: 17.324778004422058, lng: -93.59236651721216},
    {lat: 17.323902795737467, lng: -93.59236880720175},
    {lat: 17.322950278514686, lng: -93.59202283588684},
    {lat: 17.319460299216132, lng: -93.59006958146614},
    {lat: 17.317551423064117, lng: -93.58900715006217},
    {lat: 17.316791590721497, lng: -93.58871197575615},
    {lat: 17.316031758114658, lng: -93.58854554939137},
    {lat: 17.315500525261836, lng: -93.58837365146064},
    {lat: 17.314886661143756, lng: -93.58833061851749},
    {lat: 17.313903713838037, lng: -93.5884163906511},
    {lat: 17.31247008741686, lng: -93.5886738219055},
    {lat: 17.308200325273827, lng: -93.58981086441133},
    {lat: 17.30720464437056, lng: -93.58992346538253},
    {lat: 17.3060450742974, lng: -93.58982148957023},
    {lat: 17.304896810677285, lng: -93.58950227924743},
    {lat: 17.3024374103967, lng: -93.58785271256374},
    {lat: 17.30010654666892, lng: -93.58697431880148},
    {lat: 17.29785762883214, lng: -93.58695424185873},
    {lat: 17.296264344374308, lng: -93.58663379960461},
    {lat: 17.2932550600641, lng: -93.5842849106383},
    {lat: 17.29151931961003, lng: -93.58351531224673},
    {lat: 17.289701626692977, lng: -93.58343236759299},
    {lat: 17.28655794677334, lng: -93.58172156429475},
    {lat: 17.284312474684743, lng: -93.58010121178944},
    {lat: 17.280731072297414, lng: -93.57899068845131},
    {lat: 17.27967799375617, lng: -93.57804924810137},
    {lat: 17.277266431710068, lng: -93.57453155983995},
    {lat: 17.275814757149305, lng: -93.57298733988864},
    {lat: 17.274248832151738, lng: -93.57202213020588},
    {lat: 17.272191148907368, lng: -93.57165774926085},
    {lat: 17.26892340212221, lng: -93.57243762217138},
    {lat: 17.265322439899524, lng: -93.57278463723696},
    {lat: 17.26368588659575, lng: -93.57231441965973},
    {lat: 17.261885401752725, lng: -93.57107174185228},
    {lat: 17.260068484419772, lng: -93.56888422109978},
    {lat: 17.25842232075715, lng: -93.56770468904148},
    {lat: 17.25604186717485, lng: -93.56715787358928},
    {lat: 17.253294249783927, lng: -93.56216381048773},
    {lat: 17.25243271186551, lng: -93.56052513665583},
    {lat: 17.25118224724333, lng: -93.559491232097},
    {lat: 17.24993178026379, lng: -93.55914398240651},
    {lat: 17.24727505476622, lng: -93.55961821501512},
    {lat: 17.24320064494161, lng: -93.56084235664599},
    {lat: 17.241862576389718, lng: -93.56220470637464},
    {lat: 17.240794569561015, lng: -93.56360015388418},
    {lat: 17.23887425290745, lng: -93.5647429860627},
    {lat: 17.237278786975594, lng: -93.56486378304362},
    {lat: 17.235601345365883, lng: -93.56472708809997},
    {lat: 17.2331526472638, lng: -93.5649883109761},
    {lat: 17.225129404472945, lng: -93.55958485415107},
    {lat: 17.223168074845596, lng: -93.55692610391907},
    {lat: 17.221739556354002, lng: -93.55289412132697},
    {lat: 17.219529378968197, lng: -93.55117891628117},
    {lat: 17.21701008598961, lng: -93.5517804561178},
    {lat: 17.214848620406702, lng: -93.55268203487935},
    {lat: 17.210637548746593, lng: -93.55130911992279},
    {lat: 17.20490059224877, lng: -93.55448543985841},
    {lat: 17.203117909524273, lng: -93.55487175660983},
    {lat: 17.1984655367107, lng: -93.55397062198415},
    {lat: 17.18803241796405, lng: -93.55577313163258},
    {lat: 17.18707966626206, lng: -93.55663142113366},
    {lat: 17.186208905357912, lng: -93.55817634431389},
    {lat: 17.186641693236574, lng: -93.56732729616988},
    {lat: 17.185967379183992, lng: -93.56883929104646},
    {lat: 17.184496967705776, lng: -93.56976449728654},
    {lat: 17.17957975939431, lng: -93.57048457424446},
    {lat: 17.177059656196203, lng: -93.57080167756573},
    {lat: 17.17552357720992, lng: -93.57180541006392},
    {lat: 17.174388655404076, lng: -93.5740488433758},
    {lat: 17.173007682471816, lng: -93.5775367827805},
    {lat: 17.171237108271686, lng: -93.58287001001605},
    {lat: 17.170474771691612, lng: -93.58603010482307},
    {lat: 17.169591300551794, lng: -93.58772815825853},
    {lat: 17.16825678556006, lng: -93.58921161594662},
    {lat: 17.161451868002572, lng: -93.59521163099748},
    {lat: 17.15942270033769, lng: -93.59696895243349},
    {lat: 17.15748550265525, lng: -93.59746135969652},
    {lat: 17.15579930604276, lng: -93.59714966321383},
    {lat: 17.15429763429542, lng: -93.59632299158147},
    {lat: 17.152698848962036, lng: -93.59512021263987},
    {lat: 17.149879845854134, lng: -93.59334936323478},
    {lat: 17.146814785944997, lng: -93.5917931432702},
    {lat: 17.145974876825324, lng: -93.5917814204804},
    {lat: 17.131099014934662, lng: -93.59525169720678},
    {lat: 17.12780319082937, lng: -93.59614986000167},
    {lat: 17.12691401088933, lng: -93.59636289705975},
    {lat: 17.12499297340063, lng: -93.59612609165038},
    {lat: 17.123564088466363, lng: -93.59530992950408},
    {lat: 17.122050835899888, lng: -93.5938815246941},
    {lat: 17.12074051758795, lng: -93.59207301007223},
    {lat: 17.120207866513237, lng: -93.5909664309309},
    {lat: 17.119798249382477, lng: -93.58964528121749},
    {lat: 17.119388624412718, lng: -93.58768042237068},
    {lat: 17.11848681481691, lng: -93.58588723814779},
    {lat: 17.117186634312112, lng: -93.58494287861777},
    {lat: 17.11634892105177, lng: -93.58461023744877},
    {lat: 17.11551120762806, lng: -93.58457800533222},
    {lat: 17.114179779555865, lng: -93.584304396596},
    {lat: 17.11280733636835, lng: -93.58437411209502},
    {lat: 17.11106578796197, lng: -93.58467985305742},
    {lat: 17.106708646075248, lng: -93.58603434080146},
    {lat: 17.103443124447452, lng: -93.58709779300568},
    {lat: 17.10222053894068, lng: -93.58760804931688},
    {lat: 17.100300651366883, lng: -93.58796809620958},
    {lat: 17.09795913777238, lng: -93.58798939372411},
    {lat: 17.096398733681816, lng: -93.58742069994389},
    {lat: 17.094377715697533, lng: -93.58579526620736},
    {lat: 17.093377473381405, lng: -93.58520788700957},
    {lat: 17.09209165706283, lng: -93.584825008797},
    {lat: 17.08953422010055, lng: -93.58444213848117},
    {lat: 17.087181873964347, lng: -93.58408073658825},
    {lat: 17.085280756768732, lng: -93.58266792288487},
    {lat: 17.08238561383322, lng: -93.57977132480926},
    {lat: 17.079449413014913, lng: -93.57726104938484},
    {lat: 17.077643075165717, lng: -93.5765672706334},
    {lat: 17.069314573362426, lng: -93.5754264717774},
    {lat: 17.063673382982934, lng: -93.57462008387262},
    {lat: 17.060945035832262, lng: -93.57359916021642},
    {lat: 17.054513823765294, lng: -93.56734132946121},
    {lat: 17.051421264523874, lng: -93.5645774030964},
    {lat: 17.043671840676666, lng: -93.55966792329065},
    {lat: 17.042317601457672, lng: -93.55841194235057},
    {lat: 17.041558387036165, lng: -93.55589580330843},
    {lat: 17.04085041278419, lng: -93.55244917530581},
    {lat: 17.039675639299908, lng: -93.55068308947625},
    {lat: 17.03679041468109, lng: -93.54877019176843},
    {lat: 17.03547086855484, lng: -93.54759936302406},
    {lat: 17.034605907479705, lng: -93.54637031017273},
    {lat: 17.033763064019762, lng: -93.5423226238093},
    {lat: 17.03276703553908, lng: -93.53811021817825},
    {lat: 17.032145791941073, lng: -93.53630454229506},
    {lat: 17.03052205813143, lng: -93.53454345168768},
    {lat: 17.02708399068767, lng: -93.53259010400456},
    {lat: 17.025118719033586, lng: -93.53148481123355},
    {lat: 17.024177101854985, lng: -93.53024558382845},
    {lat: 17.02352161227253, lng: -93.52848874743665},
    {lat: 17.023598836249683, lng: -93.52491137355526},
    {lat: 17.023688718256548, lng: -93.5231012273183},
    {lat: 17.024065829590757, lng: -93.5213769073597},
    {lat: 17.024622436153855, lng: -93.51973308044523},
    {lat: 17.02495333615538, lng: -93.51774592089077},
    {lat: 17.024463506159986, lng: -93.51642397015974},
    {lat: 17.023912126669234, lng: -93.51546690111638},
    {lat: 17.017631396381038, lng: -93.51081564428807},
    {lat: 17.016029982230354, lng: -93.50937019208385},
    {lat: 17.012059179999685, lng: -93.50458133329653},
    {lat: 17.010022488214666, lng: -93.50297038381245},
    {lat: 17.008675865867108, lng: -93.50216500078744},
    {lat: 16.999794719850957, lng: -93.500431981828},
    {lat: 16.99777558405638, lng: -93.4993081634318},
    {lat: 16.996191453060778, lng: -93.49677219504844},
    {lat: 16.995235212356846, lng: -93.49490344927119},
    {lat: 16.99403886258836, lng: -93.49353995372024},
    {lat: 16.993153397898443, lng: -93.4927723975535},
    {lat: 16.98950938510523, lng: -93.49120845913484},
    {lat: 16.987913104813313, lng: -93.490319224438},
    {lat: 16.986563075313178, lng: -93.48880773171413},
    {lat: 16.984110400195704, lng: -93.48624158519004},
    {lat: 16.982760989143078, lng: -93.48547363228857},
    {lat: 16.981028148762423, lng: -93.48530312434872},
    {lat: 16.97945948550976, lng: -93.48564759900921},
    {lat: 16.97776778486422, lng: -93.4854342024176},
    {lat: 16.976470483103306, lng: -93.48511295137064},
    {lat: 16.97368748984009, lng: -93.48276366559776},
    {lat: 16.971967666267155, lng: -93.48154619353784},
    {lat: 16.970018993725258, lng: -93.48089851873584},
    {lat: 16.96807032059583, lng: -93.4808516659615},
    {lat: 16.959636067996733, lng: -93.48093358680774},
    {lat: 16.95679406330928, lng: -93.48018064644327},
    {lat: 16.95395205079457, lng: -93.47839777616889},
    {lat: 16.94714343424775, lng: -93.4742987038772},
    {lat: 16.943357961652204, lng: -93.46917563699049},
    {lat: 16.940562012473485, lng: -93.46719354075145},
    {lat: 16.93751972765197, lng: -93.46546899409952},
    {lat: 16.934000971187746, lng: -93.46000334077576},
    {lat: 16.93199531331936, lng: -93.45716347706326},
    {lat: 16.930898566671008, lng: -93.45600291119331},
    {lat: 16.92495725493409, lng: -93.45441325612893},
    {lat: 16.92336793035985, lng: -93.45381074903088},
    {lat: 16.91920657279512, lng: -93.45059127341733},
    {lat: 16.91679742350602, lng: -93.44880993160962},
    {lat: 16.914716758397198, lng: -93.44844483510178},
    {lat: 16.910289523699653, lng: -93.44913288458218},
    {lat: 16.908527577521017, lng: -93.44853280288618},
    {lat: 16.907522511685794, lng: -93.4475030174255},
    {lat: 16.906517437803004, lng: -93.44595826156171},
    {lat: 16.904507251732305, lng: -93.44235381786638},
    {lat: 16.900333332095645, lng: -93.43304467127888},
    {lat: 16.899611733016847, lng: -93.43193111654654},
    {lat: 16.8983152602291, lng: -93.43116089464706},
    {lat: 16.89591012236089, lng: -93.43099161682443},
    {lat: 16.892818718907026, lng: -93.43047789295463},
    {lat: 16.89176586273281, lng: -93.43000655069625},
    {lat: 16.89017179236479, lng: -93.42839762998392},
    {lat: 16.888964124319873, lng: -93.42476084413829},
    {lat: 16.88745683564326, lng: -93.42294258183904},
    {lat: 16.881980681430555, lng: -93.41872904360116},
    {lat: 16.87895515793999, lng: -93.41653660683505},
    {lat: 16.875964000665146, lng: -93.4151400428297},
    {lat: 16.8683492746156, lng: -93.41401264245087},
    {lat: 16.866894802825108, lng: -93.41331447396885},
    {lat: 16.86594048377627, lng: -93.41264630005571},
    {lat: 16.86492159044643, lng: -93.41089139021346},
    {lat: 16.86410802909563, lng: -93.40900775197753},
    {lat: 16.859379900309314, lng: -93.39854591650277},
    {lat: 16.85855182893657, lng: -93.39732497383454},
    {lat: 16.857723752230545, lng: -93.39644736311106},
    {lat: 16.85284347054467, lng: -93.39344767148742},
    {lat: 16.811701037243207, lng: -93.36796849522034},
    {lat: 16.80994340322775, lng: -93.36542361708513},
    {lat: 16.80655853285278, lng: -93.35621191561171},
    {lat: 16.80461943749361, lng: -93.35036165651837},
    {lat: 16.802762379123344, lng: -93.34682893695702},
    {lat: 16.785103810458562, lng: -93.33046716812134},
    {lat: 16.77684931960097, lng: -93.32207283060154},
    {lat: 16.771776918006093, lng: -93.31817634314086},
    {lat: 16.766951, lng: -93.31531000000001}
  ];
 
    //Polyline Options
    var line = new google.maps.Polyline({
        path: linePath,
        geodesic: true,
        strokeColor: '#6E0000',
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
             fullList += "<div class='squareInfo borderSquareInfoEstructuras'>"+ "<div class ='titleSquareInfo'>"+"Puente # "+servicesCounter + "</div>" + "Kilómetro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
             map.setZoom(9);

        } else if (category == "all") {

            marker.setVisible(true);
            fullList += "<div class='squareInfo borderSquareInfoEstructuras'>"+ "<div class ='titleSquareInfo'>"+"Puente # "+servicesCounter + "</div>" + "Kilómetro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
            map.setZoom(9);
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
            map.setZoom(9);

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

            fullList += "<div class='squareInfo borderSquareInfoEstructuras'>"+ "<div class ='titleSquareInfo'>"+"Puente # "+servicesCounter + "</div>" + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
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
    map.setZoom(9);


    for (i = 0; i < locations.length; i++) {
        if (locations[i][3] == selectValue) {

            fullList += "<div class='squareInfo borderSquareInfoEstructuras'>" + "<div class ='titleSquareInfo'>" +"Puente # "+servicesCounter + "</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;
        }
        //this else is to show all the info
        else if (selectValue == "all"){

            fullList += "<div class='squareInfo borderSquareInfoEstructuras'>" + "<div class ='titleSquareInfo'>" +"Puente # "+servicesCounter +"</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;

        }
    }


    $('#displayInfo').html(fullList);
    $( "#infowindow" ).scrollTop( currentScrollPosition );
    currentScrollPosition = 0;


}


