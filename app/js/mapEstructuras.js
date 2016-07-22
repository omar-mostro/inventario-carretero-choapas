
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
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+010 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCION DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.75   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 24.09   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 68.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90993,
-94.94003,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+010 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 1 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/2.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+010 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.70   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 21.03   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 68.39 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90992,
-94.93918,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+010 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 2 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/3.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.60   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 22.28   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90989,
-94.93952,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+140 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 3 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/4.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.01   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 19.14   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 66.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91,
-94.93865,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+140 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 4 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/5.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV RANCHO GRANDE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN DE GRIETAS Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 37.42   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 52.99   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 65.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91039444,
-94.93138611,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+920 <br> <b>Tipo:</b> PIV RANCHO GRANDE',
'<a class="hvr-bounce-to-right" onClick="justOne( 5 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/6.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV RANCHO GRANDE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, REPARACIÓN DE GRIETAS Y RETIRO DE VEGETACIÓN EN EL CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 37.74   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 47.96   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 66.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91048333,
-94.92998889,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 0+920 <br> <b>Tipo:</b> PIV RANCHO GRANDE',
'<a class="hvr-bounce-to-right" onClick="justOne( 6 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/7.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV OLUTA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+321 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.75   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°54 30.96   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911875,
-94.9086,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 3+321 <br> <b>Tipo:</b> PIV OLUTA',
'<a class="hvr-bounce-to-right" onClick="justOne( 7 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/8.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV OLUTA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+321 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.88   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°54 25.86   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 68.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91191111,
-94.90718333,
 'KM 0+000 AL 5+000',
' <b>Kilometro: </b> 3+321 <br> <b>Tipo:</b> PIV OLUTA',
'<a class="hvr-bounce-to-right" onClick="justOne( 8 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/9.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV OLUTA II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 47.44   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 13.74   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 61.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91318,
-94.88715,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 5+620 <br> <b>Tipo:</b> PIV OLUTA II',
'<a class="hvr-bounce-to-right" onClick="justOne( 9 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/10.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV OLUTA II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 47.72   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 08.33   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 66.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91326,
-94.88565,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 5+620 <br> <b>Tipo:</b> PIV OLUTA II',
'<a class="hvr-bounce-to-right" onClick="justOne( 10 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/11.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPEC </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+495 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 51.50   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 10.65   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91431,
-94.86963,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 7+495 <br> <b>Tipo:</b> PIV TEXISTEPEC',
'<a class="hvr-bounce-to-right" onClick="justOne( 11 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/12.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPEC </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+495 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 52.16   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 05.67   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91449,
-94.86824,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 7+495 <br> <b>Tipo:</b> PIV TEXISTEPEC',
'<a class="hvr-bounce-to-right" onClick="justOne( 12 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/13.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPEC II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 59.74   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 27.65   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91659,
-94.85768,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 8+800 <br> <b>Tipo:</b> PIV TEXISTEPEC II',
'<a class="hvr-bounce-to-right" onClick="justOne( 13 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/14.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPEC II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 00.97   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 21.96   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91694,
-94.8561,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 8+800 <br> <b>Tipo:</b> PIV TEXISTEPEC II',
'<a class="hvr-bounce-to-right" onClick="justOne( 14 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/15.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE ARROYO SECO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, COLOCAR PROTECCIÓN CONTRA SOCAVACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 02.36   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 11.06   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91732,
-94.85307,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 9+180 <br> <b>Tipo:</b> PTE ARROYO SECO',
'<a class="hvr-bounce-to-right" onClick="justOne( 15 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/16.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE ARROYO SECO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, COLOCAR PROTECCIÓN CONTRA SOCAVACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 03.15   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 11.54   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91754,
-94.85321,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 9+180 <br> <b>Tipo:</b> PTE ARROYO SECO',
'<a class="hvr-bounce-to-right" onClick="justOne( 16 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/17.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE ARROYO SECO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, COLOCAR PROTECCIÓN CONTRA SOCAVACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 03.16   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 12.17   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91754,
-94.85338,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 9+180 <br> <b>Tipo:</b> PTE ARROYO SECO',
'<a class="hvr-bounce-to-right" onClick="justOne( 17 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/18.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE ARROYO SECO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, COLOCAR PROTECCIÓN CONTRA SOCAVACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 03.81   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 11.57   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91773,
-94.85321,
 'KM 5+000 AL 10+000',
' <b>Kilometro: </b> 9+180 <br> <b>Tipo:</b> PTE ARROYO SECO',
'<a class="hvr-bounce-to-right" onClick="justOne( 18 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/19.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 10.44   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°50 41.66   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91957,
-94.84491,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+140 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 19 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/20.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 09.59   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°50 43.36   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91933,
-94.84538,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+140 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 20 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/21.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 09.47   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°50 43.11   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9193,
-94.84531,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+140 <br> <b>Tipo:</b> PTE ',
'<a class="hvr-bounce-to-right" onClick="justOne( 21 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/22.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+140 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD, Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 10.68   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°50 41.76   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91963,
-94.84493,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+140 <br> <b>Tipo:</b> PTE ',
'<a class="hvr-bounce-to-right" onClick="justOne( 22 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/23.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPE III </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 24.63   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 33.46   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92351,
-94.82596,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+220 <br> <b>Tipo:</b> PIV TEXISTEPE III',
'<a class="hvr-bounce-to-right" onClick="justOne( 23 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/24.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPE III </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE EN ZONAS CON IMPACTO DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 25.71   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 28.38   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.87 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92381,
-94.82455,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+220 <br> <b>Tipo:</b> PIV TEXISTEPE III',
'<a class="hvr-bounce-to-right" onClick="justOne( 24 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/25.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPE IV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+040 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y REPARACIÓN DE CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 30.67   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 05.96   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92519,
-94.81832,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+040 <br> <b>Tipo:</b> PIV TEXISTEPE IV',
'<a class="hvr-bounce-to-right" onClick="justOne( 25 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/26.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV TEXISTEPE IV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+040 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y REPARACIÓN DE CONO DE DERRAME. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 31.59   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 00.96   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92544,
-94.81693,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+040 <br> <b>Tipo:</b> PIV TEXISTEPE IV',
'<a class="hvr-bounce-to-right" onClick="justOne( 26 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/27.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE FERROCARRIL </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.68   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 04.31   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9263,
-94.8012,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+840 <br> <b>Tipo:</b> PTE FERROCARRIL',
'<a class="hvr-bounce-to-right" onClick="justOne( 27 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/28.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE FERROCARRIL </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 37.41   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 01.38   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92706,
-94.80038,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+840 <br> <b>Tipo:</b> PTE FERROCARRIL',
'<a class="hvr-bounce-to-right" onClick="justOne( 28 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/29.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE FERROCARRIL </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.49   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 02.44   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9268,
-94.80068,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+840 <br> <b>Tipo:</b> PTE FERROCARRIL',
'<a class="hvr-bounce-to-right" onClick="justOne( 29 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/30.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE FERROCARRIL </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 39.37   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°47 59.18   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9276,
-94.79977,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+840 <br> <b>Tipo:</b> PTE FERROCARRIL',
'<a class="hvr-bounce-to-right" onClick="justOne( 30 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/31.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV JALTIPAN </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.75   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°45 56.87   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92604,
-94.7658,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+620 <br> <b>Tipo:</b> PIV JALTIPAN',
'<a class="hvr-bounce-to-right" onClick="justOne( 31 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/32.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV JALTIPAN </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTAS DE DILATACIÓN, LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.71   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°45 52.48   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92603,
-94.76458,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+620 <br> <b>Tipo:</b> PIV JALTIPAN',
'<a class="hvr-bounce-to-right" onClick="justOne( 32 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/33.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE APEPECHO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+360 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.45   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 56.89   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92679,
-94.74914,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+360 <br> <b>Tipo:</b> PTE APEPECHO',
'<a class="hvr-bounce-to-right" onClick="justOne( 33 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/34.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE APEPECHO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+360 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 37.22   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 57.55   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92701,
-94.74932,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+360 <br> <b>Tipo:</b> PTE APEPECHO',
'<a class="hvr-bounce-to-right" onClick="justOne( 34 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/35.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE APEPECHO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+360 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,   SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.45   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 56.89   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92679,
-94.74914,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+360 <br> <b>Tipo:</b> PTE APEPECHO',
'<a class="hvr-bounce-to-right" onClick="justOne( 35 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/36.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE APEPECHO </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+360 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,   SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 37.22   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 57.55   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92701,
-94.74932,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+360 <br> <b>Tipo:</b> PTE APEPECHO',
'<a class="hvr-bounce-to-right" onClick="justOne( 36 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/37.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE PETAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+540 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,   SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), RESANE DE ELEMENTOS DE CONCRETO, PINTURA PARA TODO EL PUENTE,   LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 39.07   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 49.14   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92752,
-94.74698,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+540 <br> <b>Tipo:</b> PTE PETAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 37 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/38.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE PETAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+540 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,   SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), RESANE DE ELEMENTOS DE CONCRETO, PINTURA PARA TODO EL PUENTE,   LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 37.94   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 48.83   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92721,
-94.7469,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+540 <br> <b>Tipo:</b> PTE PETAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 38 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/39.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE PETAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+540 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), RESANE DE ELEMENTOS DE CONCRETO, PINTURA PARA TODO EL PUENTE,   LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 38.31   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 48.92   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92731,
-94.74692,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+540 <br> <b>Tipo:</b> PTE PETAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 39 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/40.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE PETAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+540 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), RESANE DE ELEMENTOS DE CONCRETO, PINTURA PARA TODO EL PUENTE,   LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 39.21   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 49.07   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92756,
-94.74696,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+540 <br> <b>Tipo:</b> PTE PETAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 40 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/41.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 38.31   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 50.61   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.61 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92731,
-94.74739,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+600 <br> <b>Tipo:</b> PIV ',
'<a class="hvr-bounce-to-right" onClick="justOne( 41 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/42.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 38.89   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°44 45.89   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.65 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.92747,
-94.74608,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+600 <br> <b>Tipo:</b> PIV ',
'<a class="hvr-bounce-to-right" onClick="justOne( 42 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/43.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 50.19   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 23.28   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93061,
-94.72313,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+200 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 43 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/44.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 51.11   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 18.66   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93086,
-94.72185,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+200 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 44 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/45.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV LOMAS DE TECAMICHAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+090 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, ASÍ COMO LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 54.62   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 53.66   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93184,
-94.71491,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+090 <br> <b>Tipo:</b> PIV LOMAS DE TECAMICHAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 45 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/46.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV LOMAS DE TECAMICHAPA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+090 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, ASÍ COMO LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 55.08   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 53.66   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93197,
-94.71491,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+090 <br> <b>Tipo:</b> PIV LOMAS DE TECAMICHAPA',
'<a class="hvr-bounce-to-right" onClick="justOne( 46 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/47.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV RANCHO GANADERO II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 17.05   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 46.87   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93807,
-94.69635,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+200 <br> <b>Tipo:</b> PIV RANCHO GANADERO II',
'<a class="hvr-bounce-to-right" onClick="justOne( 47 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/48.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV RANCHO GANADERO II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 19.53   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 42.86   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.93876,
-94.69524,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+200 <br> <b>Tipo:</b> PIV RANCHO GANADERO II',
'<a class="hvr-bounce-to-right" onClick="justOne( 48 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/49.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COACOTLA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+510 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 40.88   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 10.99   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94469,
-94.68639,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+510 <br> <b>Tipo:</b> PIV COACOTLA',
'<a class="hvr-bounce-to-right" onClick="justOne( 49 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/50.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COACOTLA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+510 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 43.52   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 06.78   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94542,
-94.68522,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+510 <br> <b>Tipo:</b> PIV COACOTLA',
'<a class="hvr-bounce-to-right" onClick="justOne( 50 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/51.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 53.94   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 49.62   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.42 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94832,
-94.68045,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+160 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 51 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/52.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 54.83   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 51.03   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94856,
-94.68084,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+160 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 52 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/53.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 54.18   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 50.25   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94838,
-94.68063,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+160 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 53 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/54.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 54.83   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 51.03   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.94856,
-94.68084,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+160 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/55.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+440 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 16.13   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 16.31   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.95448,
-94.6712,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+440 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 55 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/56.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+440 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 18.62   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°40 12.49   N</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.95517,
-94.67014,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+440 <br> <b>Tipo:</b> PIV',
'<a class="hvr-bounce-to-right" onClick="justOne( 56 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/57.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COACOTLA II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+830 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 41.37   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°39 37.54   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96149167,
-94.66042778,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+830 <br> <b>Tipo:</b> PIV COACOTLA II',
'<a class="hvr-bounce-to-right" onClick="justOne( 57 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/58.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COACOTLA II </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+830 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 44.12   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°39 33.33   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96225556,
-94.65925833,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+830 <br> <b>Tipo:</b> PIV COACOTLA II',
'<a class="hvr-bounce-to-right" onClick="justOne( 58 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/59.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV ZARAGOZA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+980 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 02.66   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°39 04.92   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96740556,
-94.65136667,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+980 <br> <b>Tipo:</b> PIV ZARAGOZA',
'<a class="hvr-bounce-to-right" onClick="justOne( 59 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/60.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV ZARAGOZA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+980 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE SUSTITUCIÓN DE JUNTA DE DILATACIÓN, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 04.96   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°39 00.79   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96804444,
-94.65021944,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+980 <br> <b>Tipo:</b> PIV ZARAGOZA',
'<a class="hvr-bounce-to-right" onClick="justOne( 60 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/61.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 07.78   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 55.01   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96882778,
-94.64861389,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+260 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 61 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/62.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 08.14   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 55.27   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96892778,
-94.64868611,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+260 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 62 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/63.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 08.05   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 55.32   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96890278,
-94.6487,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+260 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 63 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/64.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA EN TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 08.05   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 55.32   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.96890278,
-94.6487,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+260 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 64 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/65.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COSOLEACAQUE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 33+230 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 22.20   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 27.01   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.02 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.97283333,
-94.64083611,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+230 <br> <b>Tipo:</b> PIV COSOLEACAQUE',
'<a class="hvr-bounce-to-right" onClick="justOne( 65 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/66.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV COSOLEACAQUE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 33+230 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 24.52   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°38 22.59   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.97347778,
-94.63960833,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+230 <br> <b>Tipo:</b> PIV COSOLEACAQUE',
'<a class="hvr-bounce-to-right" onClick="justOne( 66 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/67.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV LA COLMENA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y REPARACIÓN DE GRIETAS.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 36.14   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 58.75   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.97670556,
-94.63298611,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+180 <br> <b>Tipo:</b> PIV LA COLMENA',
'<a class="hvr-bounce-to-right" onClick="justOne( 67 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/68.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV LA COLMENA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD, SUSTITUCIÓN DE JUNTA DE DILATACIÓN Y REPARACIÓN DE GRIETAS.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 38.38   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 54.53   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.97732778,
-94.63181389,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+180 <br> <b>Tipo:</b> PIV LA COLMENA',
'<a class="hvr-bounce-to-right" onClick="justOne( 68 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

['<div id="fixedWindow">' +
 '<img src="img/Estructuras/69.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV SAN PEDRO MARTIR  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+190 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 51.39   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 28.59   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.98094,
-94.62461,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+190 <br> <b>Tipo:</b> PIV SAN PEDRO MARTIR ',
'<a class="hvr-bounce-to-right" onClick="justOne( 69 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/70.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV SAN PEDRO MARTIR  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+190 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> ACEPTABLE,  SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 52.80   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 25.34   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.98133,
-94.62371,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+190 <br> <b>Tipo:</b> PIV SAN PEDRO MARTIR ',
'<a class="hvr-bounce-to-right" onClick="justOne( 70 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/71.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV MINATITLÁN </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,   SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL, LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 38.92   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36 09.70   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.99414,
-94.60269,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+930 <br> <b>Tipo:</b> PIV MINATITLÁN',
'<a class="hvr-bounce-to-right" onClick="justOne( 71 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/72.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PIV MINATITLÁN </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AMBOS </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,   SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL, LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE INFERIOR VEHICULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 41.73   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36 06.97   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.99493,
-94.60194,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+930 <br> <b>Tipo:</b> PIV MINATITLÁN',
'<a class="hvr-bounce-to-right" onClick="justOne( 72 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/73.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 10.66   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 40.51   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00296,
-94.59459,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+180 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 73 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/74.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE.  </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 11.02   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 42.05   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00306,
-94.59501,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+180 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 74 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/75.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,  SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL,  LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 11.64   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 41.40   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00323,
-94.59483,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+180 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 75 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/76.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,  SE REQUIERE RESANE DE ELEMENTOS DE CONCRETO, ELEVAR LA SUPERESTRUCTURA PARA AUMENTAR EL GALIBO VERTICAL,  LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD Y PINTURA PARA TODO EL PUENTE. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 12.42   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 43.00   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00345,
-94.59528,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+180 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 76 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/77.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,  SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA PARA TODO EL PUENTE, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 20.01   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 33.51   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.15 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00556,
-94.59264,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 77 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/78.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,  SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA PARA TODO EL PUENTE, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE  </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 20.03   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 34.44   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00556,
-94.5929,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 78 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/79.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA PARA TODO EL PUENTE, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 19.81   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 34.41   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.00 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.0055,
-94.59289,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 79 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Estructuras/80.JPG" alt="Imagen de Estructuras">' +
'<h4 class="fixedWindowTitle titleStructuras">Relación de Estructuras Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, SE REQUIERE LIMPIEZA EN JUNTAS DE DILATACIÓN (RETIRAR CARPETA ASFÁLTICA), SUSTITUCIÓN DE PIEZAS DE PARAPETO Y PINTURA PARA TODO EL PUENTE, LIMPIEZA EN CABEZALES  Y LOSA POR MANCHAS DE HUMEDAD. </p>' +
'<h5 class="subTitle"> Descripción </h5> <p class="description"> PUENTE </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°00 20.19   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 35.23   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
18.00561,
-94.59312,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> PTE',
'<a class="hvr-bounce-to-right" onClick="justOne( 80 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ]

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
             fullList += "<div class='squareInfo borderSquareInfoEstructuras'>"+ "<div class ='titleSquareInfo'>"+"Puente # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
             map.setZoom(10);

        } else if (category == "all") {

            marker.setVisible(true);
            fullList += "<div class='squareInfo borderSquareInfoEstructuras'>"+ "<div class ='titleSquareInfo'>"+"Puente # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
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
    map.setZoom(10);


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


