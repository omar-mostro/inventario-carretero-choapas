
var map;
var gmarkers = [];
var currentScrollPosition;
var infowindow = new google.maps.InfoWindow();

   //locations array, contains the html to dsiplay the total info, the coordinates of all the services, a category to make the filter and a kilometer of the location service to display in the filter
    var locations = [
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/1.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description">  INFORMATIVA DE IDENTIFICACIÓN (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REQUIERE LIMPIEZA, ENDerechaESAR Y CAMBIO DE ROTULO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.11  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 19.84  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 77.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90975278,
-94.93884444,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+000 <br> <b>Tipo:</b>  INFORMATIVA DE IDENTIFICACIÓN (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 1 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/2.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO (SID-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description">  ELEVADA TIPO DOBLE BANDerechaA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+100 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.63  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 17.31  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 74.4m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90989722,
-94.93814167,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+100 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO (SID-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 2 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/3.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL INFORMATIVA (INFORMACIÓN GENERAL) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+110 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA (MALESA) </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 16.31  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 70.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90987222,
-94.93786389,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+110 <br> <b>Tipo:</b> SEÑAL INFORMATIVA (INFORMACIÓN GENERAL) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 3 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/4.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL INFORMATIVA DE DESTINO (SID) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Ambos Lados </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.71  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 15.57  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 71.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90991944,
-94.93765833,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+180 <br> <b>Tipo:</b> SEÑAL INFORMATIVA DE DESTINO (SID) <br> <b>Lado:</b> Ambos Lados',
'<a class="hvr-bounce-to-right" onClick="justOne( 4 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Ambos Lados' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/5.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO (SID-11) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+350 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 35.96  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 11.03  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 73.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90998889,
-94.93639722,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+350 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO (SID-11) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 5 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/6.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+370 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 3612  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 10.02  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 76.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91003333,
-94.93611667,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+370 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 6 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/7.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SOPORTES DE SEÑAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+400 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 8.17  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 74.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91010278,
-94.93560278,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+400 <br> <b>Tipo:</b> SOPORTES DE SEÑAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 7 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/8.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO             (SIS-23,SIS-26) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+440 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 5.61  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 73.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91011667,
-94.93489167,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+440 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO             (SIS-23,SIS-26) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 8 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/9.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO (SIS-51) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+460 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.67  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 3.35  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 71.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91018611,
-94.93426389,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+460 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO (SIS-51) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 9 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/10.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO (SIS-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+560 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.45  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 0.02  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910125,
-94.93333889,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+560 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO (SIS-8) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 10 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/11.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+660 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.90  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55´56.05"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 68.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91026944,
-94.93223611,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+660 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 11 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/12.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA     (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+690 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.97  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 55  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 75.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91026944,
-94.93194444,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+690 <br> <b>Tipo:</b> SEÑAL PREVENTIVA     (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 12 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/13.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 36.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°56 20.58  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 75.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91001944,
-94.93905,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+920 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 13 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/14.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+940 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 37.19  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 32.16  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 75.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91033056,
-94.90893333,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+940 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 14 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/15.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+960 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 37.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -944°55 51.08  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 72.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91039444,
-94.93085556,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+960 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 15 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/16.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE ENDerechaESAR Y DESDOBLAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 37.52  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 47.78  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 64.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91042222,
-94.92993889,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 16 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/17.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+720 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 30.09  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 49.69  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.90835833,
-94.93046944,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+720 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 17 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/18.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  39.27" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94° 55  19.03" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91090833,
-94.92195278,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+860 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 18 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/19.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 39.4  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 16.57  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67.9m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91094444,
-94.92126944,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+920 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 19 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/20.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+980 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 39.54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 14.61  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 54.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91098333,
-94.920725,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+980 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 20 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/21.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 39.55  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 49.99  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 56.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91098611,
-94.93055278,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 21 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/22.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO           (SIS-17, SIS-16, SIS-14, TEL) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+050 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 39.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 10.96  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 57.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91099167,
-94.91971111,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+050 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO           (SIS-17, SIS-16, SIS-14, TEL) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 22 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/23.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+890 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 41.43  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 45.68  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 54.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91150833,
-94.91268889,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+890 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 23 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/24.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+940 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL ESTADO, OXIDADA Y DESPINTADA, SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 41.49  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 43.08  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 56.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911525,
-94.91196667,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+940 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 24 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/25.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 41.65  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 39.84  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91156944,
-94.91106667,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 25 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/26.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVAS   (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+230 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.11  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 33.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91169722,
-94.90928889,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+230 <br> <b>Tipo:</b> SEÑAL PREVENTIVAS   (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 26 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/27.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO               (SIS-23, SIS-11)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+280 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 29.98  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 59.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91175,
-94.90832778,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+280 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO               (SIS-23, SIS-11)  <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 27 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/28.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+320 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 40.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 29.8  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91119444,
-94.90827778,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+320 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 28 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/29.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+321 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.49  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 28.6  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91180278,
-94.90794444,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+321 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 29 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/30.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+400 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.72  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 23.13  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 69.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91186667,
-94.906425,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+400 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 30 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/31.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO (SIS-22) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+420 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.82  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 20.3  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 70.25 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91189444,
-94.90563889,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+420 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO (SIS-22) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 31 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/32.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 43.3"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 31.13  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 64.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91202778,
-94.90864722,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+880 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 32 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/33.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                        (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 4+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 43.87  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 6.12  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91218611,
-94.9017,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 4+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                        (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 33 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/34.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 4+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 45.39  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°53 41  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 49.7m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91260833,
-94.89472222,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 4+860 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 34 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/35.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA                  (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  45.89" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94° 53  33.66" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 55.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91274722,
-94.89268333,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 5+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA                  (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 35 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],

['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/36.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  45.89" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94° 53  33.66" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 55.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91274722,
-94.89268333,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 36 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/37.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+480 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  46.8" </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 53  18.17" </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.913,
-94.88838056,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+480 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 37 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/38.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 47.24  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°53 12.49  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 69.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91312222,
-94.88680278,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+600 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 38 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/39.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA   (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 47.52  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°53 12.39  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 71.0 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9132,
-94.886775,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+620 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA   (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 39 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/40.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 47.77  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°53 5.42  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 68.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91326944,
-94.88483889,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 40 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/41.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 48.2  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 58.5  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 70.21 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91338889,
-94.88291667,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 41 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/42.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA   (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+520 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 48.92  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 45.92  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 59.7 M.SN.M </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91358889,
-94.87942222,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+520 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA   (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 42 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/43.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 49.42"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 40"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 54.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91372778,
-94.87777778,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+740 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 43 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/44.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 49.63  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 34.97  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 51.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91378611,
-94.87638056,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 44 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/45.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  50.26" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 52  24.74" W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 45.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91396111,
-94.87353889,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 45 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/46.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 50.52  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 20.56  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91403333,
-94.87237778,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+200 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 46 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/47.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 50.89  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 16.23  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91413611,
-94.871175,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+380 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 47 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/48.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+480 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 51.43  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 9.7  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91428611,
-94.86936111,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+480 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 48 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/49.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+495 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 51.71  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°52 8.17  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 38 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91436389,
-94.86893611,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+495 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 49 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/50.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULA, RAYADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 54.16  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°51 50.81  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91504444,
-94.86411389,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 50 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/51.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+580 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  36.52" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°51 10.81  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33.89 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91014444,
-94.85300278,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+580 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 51 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/52.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 54  59.41" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94° 51  26.87" W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91650278,
-94.85746389,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+740 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 52 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/53.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+750 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 59.51  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°51 26.35  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91653056,
-94.85731944,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+750 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 53 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/54.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17° 55  2.64" N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94° 51  12.74" W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.25 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.9174,
-94.85353889,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+160 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/55.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA REQUIERE LIMPEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 6.91  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°50 52.65  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91858611,
-94.84795833,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+880 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 55 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/56.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 8.66  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°50 44.6"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91907222,
-94.84572222,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 10+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 56 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ],

['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/57.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA  Y  CAMBIO DE ROTULO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.2736"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  19.7988"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910076,
-94.938833,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 57 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/58.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-11)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+020.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE REUBICACIÓN YA QUE LO CUBRE OTRA SEÑAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.3492"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  18.7224"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 58.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910097,
-94.938534,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+020.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-11)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 58 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/59.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-11)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+023.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.414"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  18.549"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910115,
-94.93848583,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+023.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-11)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 59 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/60.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+040.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.4356"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  18.1026"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 69.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910121,
-94.93836183,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+040.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 60 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/61.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+060.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.4392"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  17.3616"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 67.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910122,
-94.938156,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+060.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 61 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/62.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-15)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Ambos Lados </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.6582"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  13.3692"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 72.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91018283,
-94.937047,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+180.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-15)  <br> <b>Lado:</b> Ambos Lados',
'<a class="hvr-bounce-to-right" onClick="justOne( 62 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Ambos Lados' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/63.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+280.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.8604"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  9.8664"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 70.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910239,
-94.936074,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+280.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 63 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/64.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-8)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+320.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  36.9504"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  8.5806"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 66.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910264,
-94.93571683,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+320.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-8)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 64 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/65.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIOS              (SIS-23 Y 26) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+635.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  37.818"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 56  0.7692"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 65.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910505,
-94.933547,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+635.00 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIOS              (SIS-23 Y 26) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 65 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/66.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-15)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+650.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  37.4898"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  59.8944"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91041383,
-94.933304,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+650.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-15)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 66 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/67.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-15)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 0+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA,  DAÑADA POR VIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  37.8576"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  55.9122"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 63.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910516,
-94.93219783,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 0+820.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-15)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 67 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/68.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.3184"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  50.034"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910644,
-94.930565,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+000.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 68 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/69.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+070.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.6202"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  45.4974"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 52.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91072783,
-94.92930483,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+070.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 69 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/70.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.754"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  43.4562"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910765,
-94.92873783,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+100.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 70 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/71.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL INFORMATIVA DE SERVICIOS </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+115.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.988"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  42.654"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 52.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91083,
-94.928515,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+115.00 <br> <b>Tipo:</b> SEÑAL INFORMATIVA DE SERVICIOS <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 71 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/72.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+130.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  39.009"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  41.9448"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 55.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91083583,
-94.928318,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+130.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 72 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/73.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIOS                    (IAVE) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+150.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.8044"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  40.821"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 59.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.910779,
-94.92800583,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+150.00 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIOS                    (IAVE) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 73 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/74.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  38.9802"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  39.414"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 54.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91082783,
-94.927615,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+180.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 74 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/75.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-10) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+520.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  52.8516"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  27.7674"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.914681,
-94.92437983,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+520.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-10) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 75 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/76.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFOMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+950.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  40.5936"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  15.7398"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 46 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911276,
-94.92103883,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+950.00 <br> <b>Tipo:</b> INFOMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 76 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/77.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACION GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+980.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  40.4676"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  14.541"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 47.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911241,
-94.92070583,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+980.00 <br> <b>Tipo:</b> INFORMACION GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 77 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/78.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  40.554"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  13.8894"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 46.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.911265,
-94.92052483,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 78 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/79.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-09) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+040.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  40.8126"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  11.82"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 44.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91133683,
-94.91995,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+040.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-09) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 79 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/80.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-8)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+140.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  41.0466"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  8.2272"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91140183,
-94.918952,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+140.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-8)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 80 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/81.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 2+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  41.097"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  7.3128"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 49 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91141583,
-94.918698,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 2+160.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 81 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/82.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  42.5874"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 54  39.6714"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 45.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91182983,
-94.91101983,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 82 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/83.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  43.2468"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 54  32.4966"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 57.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.912013,
-94.90902683,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+180.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 83 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/84.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA        (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+321.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  43.3692"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 54  27.6408"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.912047,
-94.907678,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+321.00 <br> <b>Tipo:</b> RESTRICTIVA        (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 84 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/85.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 3+340.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  43.4838"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 54  27.4608"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 56.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.91207883,
-94.907628,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 3+340.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 85 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/86.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 4+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  44.874"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 54  6.0762"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 53.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.912465,
-94.90168783,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 4+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 86 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/87.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 4+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, REQUIERE MANTENIMIENTO, LIMPIEZA Y ENDEREZAMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  45.2232"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 53  59.0958"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 43.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>',
17.912562,
-94.89974883,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 4+160.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 87 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ],

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
        strokeColor: '#5d276a',
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

            jQuery('#displayInfo-2').css('visibility', 'visible');
            jQuery('#displayInfo-2').empty();
            jQuery('#displayInfo-2').append(locations[i][0]);
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
         marker.setVisible(false);


        if (locations[i][3] == category && category.length != 0) {
            marker.setVisible(true);
             fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>"+ "<div class ='titleSquareInfo'>"+"Señalamiento # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
             map.setZoom(10);

        } else if (category == "all") {

            marker.setVisible(true);
            fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>"+ "<div class ='titleSquareInfo'>"+"Señalamiento # "+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
            map.setZoom(10);
        }

        else {

            fullList += "";
        }
    }

    //siempre se ejecuta la función lados para aplicar el segundo filtro
    $( "#infowindow" ).scrollTop( 0 );
    lados();

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

    $('#displayInfo-2').html(fullList);
    currentScrollPosition = scrollPosition;
    //console.log(scrollPosition);
}


//this function is to show all the mas información buttons when the page loads
function start(){
    var fullList = "";
    var servicesCounter = 1;

    for (i = 0; i < locations.length; i++) {

            fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>"+ "<div class ='titleSquareInfo'>"+"Señalamiento # "+servicesCounter + "</div>" + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
    }


    $('#displayInfo-2').html(fullList);


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

            fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" +"Señalamiento # "+servicesCounter + "</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;
        }
        //this else is to show all the info
        else if (selectValue == "all"){

            fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" +"Señalamiento # "+servicesCounter +"</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;

        }
    }


   $('#displayInfo-2').html(fullList);
   $( "#infowindow" ).scrollTop( currentScrollPosition );
    currentScrollPosition = 0;
    lados();


}

function lados() {

    infowindow.close();
    var valor = $('#multipleSelect').val(); //obtenemos el valor del filtro
    var category=$('#singleSelect').val(); //obtenemos la categoria para solo mostrar los kilometros que se seleccionen

    var count = 0;
    var servicesCounter = 1;
    var fullList = "";

  //console.log(category);//km 5 + 10
  //console.log(valor);//centro

    if (valor != "" ) {//caso 1, cuando se selecciono algo del select multiple

        for (var j = 0; j < locations.length; j++) {//recorremos el arreglo de donde esta toda la información
            marker = gmarkers[j];
            marker.setVisible(false);

            for (var i = 0; i < valor.length; i++) {//recorremos el arreglo que nos devuelve el select multple el cual contiene los lados

                if (valor[i] == locations[j][6] && category==locations[j][3]) {//comparamos la categoria por los kilometros que queremos que muestre + el lado especificado

                    marker.setVisible(true);

                    fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" + "Señalamiento # " + servicesCounter + "</div>" + locations[j][4] + "<br>" + locations[j][5] + "</div>";

                    servicesCounter++;
                }
                else if(valor[i] == locations[j][6] && category == "all"){//cuando la categoria es todos

                    marker.setVisible(true);

                    fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" + "Señalamiento # " + servicesCounter + "</div>" + locations[j][4] + "<br>" + locations[j][5] + "</div>";

                    servicesCounter++;
                }


            }

        }
    }
    else {//caso 2 cuando no se selecciono nada del select multiple para mostrar todos los lados
        for (var j = 0; j < locations.length; j++) {

            if (category ==  locations[j][3]){//mostramos todos los lados con el kilometro seleccionado

                marker = gmarkers[j];
                marker.setVisible(true);
                fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" + "Señalamiento # " + servicesCounter + "</div>" + "" + locations[j][4] + "<br>" + locations[j][5] + "</div>";
                servicesCounter++;

            }

            else if (category ==  "all"){//mostramos de nuevo todo

                marker = gmarkers[j];
                marker.setVisible(true);
                fullList += "<div class='squareInfo borderSquareInfoSenalamientos'>" + "<div class ='titleSquareInfo'>" + "Señalamiento # " + servicesCounter + "</div>" + "" + locations[j][4] + "<br>" + locations[j][5] + "</div>";
                servicesCounter++;
            }
        }
    }
    $('#displayInfo-2').html(fullList);
};


