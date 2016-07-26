
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
'<h5 class="subTitle"> Condición </h5> <p class="description"> REQUIERE LIMPIEZA, ENDERESAR Y CAMBIO DE ROTULO </p>' +
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
'<h5 class="subTitle"> Tipo </h5> <p class="description">  ELEVADA TIPO DOBLE BANDERA </p>' +
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
17.910309,
-94.930986,
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
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE ENDERESAR Y DESDOBLAR </p>' +
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
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 38.44  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 29.53  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.910677,
-94.924869,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+500 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
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
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 39.48  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°55 14.21  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 56.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.910967,
-94.920615,
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
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°54 42.28  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°54 29  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 62.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.911745,
-94.908202,
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
'<a class="hvr-bounce-to-right" onClick="justOne( 36 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/37.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 37 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/38.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 38 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/39.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 39 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/40.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 40 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/41.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 41 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Ambos Lados' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/42.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 42 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/43.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 43 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/44.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 44 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/45.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 45 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/46.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 46 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/47.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 47 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/48.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 48 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/49.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 49 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/50.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 50 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/51.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 51 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/52.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 52 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/53.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 53 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/54.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 0+000 AL 5+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-10) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 1+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  52.8516"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 55  27.7674"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 48.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.910976,
-94.924375,
'KM 0+000 AL 5+000',
'<b>Kilometro: </b> 1+600 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-10) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/55.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 55 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/56.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 56 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/57.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 57 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/58.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 58 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/59.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 59 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/60.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 60 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/61.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 61 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/62.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 62 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/63.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 63 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/64.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 64 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/65.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 65 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/66.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 66 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/67.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 67 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/68.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 68 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/69.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 69 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/70.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 70 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/71.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 71 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/72.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 72 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/73.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 73 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/74.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 74 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/75.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 75 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/76.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 76 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/77.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 77 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/78.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 78 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/79.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 79 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/80.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 80 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/81.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 81 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/82.JPG" alt="Imagen de Señalamientos">' +
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
17.916108,
-94.859238,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+580 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 82 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/83.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 83 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/84.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 84 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/85.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 85 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/86.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 86 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/87.JPG" alt="Imagen de Señalamientos">' +
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
'<a class="hvr-bounce-to-right" onClick="justOne( 87 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/88.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+140.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  47.3826"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 53  24.9864"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 58.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91316183,
-94.890274,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+140.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 88 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/89.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+620.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  48.12"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 53  10.98"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 69.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.913367,
-94.886383,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+620.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 89 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/90.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+650.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  48.3906"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 53  9.7794"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 64.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91344183,
-94.88604983,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+650.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 90 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/91.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-37) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  48.76"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94° 53  4.36"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91354444,
-94.88454444,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+800.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-37) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 91 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/92.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 5+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  48.7866"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 53  4.02"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 55.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91355183,
-94.88445,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 5+820.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 92 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/93.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  49.2618"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  58.0938"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 70.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91368383,
-94.88280383,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 93 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/94.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  49.7046"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  51.3912"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 61.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91380683,
-94.880942,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+160.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 94 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/95.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+480.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  50.2632"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  41.448"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 53.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.913962,
-94.87818,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+480.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 95 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/96.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 6+880.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  51.0552"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  28.6212"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 38.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914182,
-94.874617,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 6+880.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 96 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/97.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  51.732"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  24.1926"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91437,
-94.87338683,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 97 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/98.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+495.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  52.8186"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  5.736"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 42.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91467183,
-94.86826,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+495.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 98 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/99.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+580.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  53.5428"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 52  3.9792"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914873,
-94.867772,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+580.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 99 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/100.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 7+700.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  53.48"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94º 52  0.03"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91485556,
-94.866675,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 7+700.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 100 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/101.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  55.4148"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  50.8746"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 36.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.915393,
-94.86413183,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 101 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/102.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-6)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+003.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  55.4256"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  50.8464"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 38.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.915396,
-94.864124,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+003.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-6)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 102 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/103.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+220.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 54  57.33"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  42.1266"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.915925,
-94.86170183,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+220.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 103 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/104.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 8+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  0.72"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94º 51  23.81"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91688611,
-94.85661389,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 8+800.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 104 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/105.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+880.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  2.0928"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  20.4834"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.917248,
-94.85568983,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+880.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 105 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/106.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+920.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  2.3412"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  19.26"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.917317,
-94.85535,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+920.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 106 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/107.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  2.6004"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  17.7078"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.917389,
-94.85491883,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 107 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/108.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  4.5474"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  9.0894"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91792983,
-94.85252483,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+180.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 108 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/109.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE RECOMENDACIÓN   </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 9+190.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, LIGERAMENTE DOBLADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  4.6374"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 51  8.7228"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91795483,
-94.852423,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 9+190.00 <br> <b>Tipo:</b> INFORMATIVA DE RECOMENDACIÓN   <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 109 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/110.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 5+000 AL 10+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  9.7824"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  44.5518"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.919384,
-94.84570883,
'KM 5+000 AL 10+000',
'<b>Kilometro: </b> 10+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 110 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/111.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA                     (SII-14) </p>' +
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
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 10+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA                     (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 111 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/112.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 13.94  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°50 19.86"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.920539,
-94.83885,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 10+820 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 112 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/113.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 15.74  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°50 11.54  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92103889,
-94.83653889,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 113 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/114.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-9)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+260 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 17.78  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°50 2.8  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92160556,
-94.83411111,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+260 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-9)  <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 114 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/115.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA      (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 23.26  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 37.78  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92312778,
-94.82716111,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+080 <br> <b>Tipo:</b> SEÑAL PREVENTIVA      (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 115 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/116.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+210 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 24.51  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 31.68  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.923475,
-94.82546667,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+210 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 116 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/117.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA             (SR-15)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 24.66  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 31.5  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92351667,
-94.82541667,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+220 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA             (SR-15)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 117 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/118.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+450 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 27.09  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 19.93  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92419167,
-94.82220278,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+450 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 118 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/119.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+990 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 30.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 5.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 37.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92508056,
-94.81817778,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+990 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 119 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/120.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 30.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 5.1  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92511389,
-94.81808333,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 120 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/121.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA           (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+040 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 30.75  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°49 4.13  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92520833,
-94.81781389,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+040 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA           (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 121 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/122.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+160 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 32.37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 59.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 46.0 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92565833,
-94.81651111,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+160 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 122 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/123.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 31.99  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 57.09  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 60.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92555278,
-94.81585833,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+180 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 123 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/124.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA      (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.80  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 43.79  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92633333,
-94.81216389,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+760 <br> <b>Tipo:</b> SEÑAL PREVENTIVA      (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 124 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/125.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+780 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.01  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 42.47  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92666944,
-94.81179722,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+780 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 125 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/126.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.68  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 32  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92685556,
-94.80888889,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 126 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/127.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+660 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.54"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 11.96"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 29.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92681667,
-94.80332222,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+660 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 127 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/128.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.53  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°48 6.74  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92681389,
-94.80187222,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+860 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 128 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/129.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA                        (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.62   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°47 57.2   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92656111,
-94.79922222,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 15+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA                        (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 129 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/130.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  9.7824"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  44.5518"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.919384,
-94.84570883,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 10+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 130 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/131.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 10+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  11.8488"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  34.3998"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.919958,
-94.84288883,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 10+180.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 131 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/132.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  16.986"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  11.5038"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.921385,
-94.83652883,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 132 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/133.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+140.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  18.5082"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  4.6104"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92180783,
-94.834614,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+140.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 133 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/134.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  18.9264"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 50  2.598"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.921924,
-94.834055,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+180.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 134 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/135.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-20) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 11+880.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  23.2068"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  42.924"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.923113,
-94.82859,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 11+880.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-20) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 135 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/136.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  24.3156"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  38.193"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.923421,
-94.82727583,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 136 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/137.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+200.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, LIGERAMENTE DOBLADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  25.6584"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  31.8864"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.923794,
-94.825524,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+200.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 137 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/138.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+220.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  25.9932"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  30.4782"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.923887,
-94.82513283,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+220.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 138 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/139.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+280.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  26.4606"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  27.879"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92401683,
-94.82441083,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+280.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 139 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/140.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 12+480.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  28.1886"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  20.2578"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92449683,
-94.82229383,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 12+480.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 140 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/141.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE ENDEREZAMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  31.6338"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  4.5516"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92545383,
-94.817931,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 141 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/142.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+040.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  31.9404"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  2.4996"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.925539,
-94.817361,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+040.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 142 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/143.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+070.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  32.214"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 49  2.0274"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.925615,
-94.81722983,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+070.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 143 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/144.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  32.9946"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  58.1142"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92583183,
-94.81614283,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+180.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 144 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/145.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 13+520.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.6592"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  46.1736"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926572,
-94.812826,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 13+520.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 145 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/146.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.8726"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  31.7052"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92718683,
-94.808807,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 146 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/147.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+120.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  38.0562"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  26.4924"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92723783,
-94.807359,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+120.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 147 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/148.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+340.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.8834"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  21.1098"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92718983,
-94.80586383,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+340.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 148 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/149.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-6)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 14+600.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.8768"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 48  17.8158"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.927188,
-94.80494883,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 14+600.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-6)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 149 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/150.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII- 14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.0812"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  54.438"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926967,
-94.798455,
'KM 10+000 AL 15+000',
'<b>Kilometro: </b> 15+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII- 14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 150 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/151.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.62   N</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°47 57.2   W</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92656111,
-94.79922222,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 151 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/152.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.65  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°47 31.74  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92656944,
-94.79215,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 152 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/153.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.61  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°47 30.82  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.20 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92655833,
-94.79189444,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+900 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 153 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/154.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO             (SID-11) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+340 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.26  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°47 15.24  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.580 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92646111,
-94.78756667,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+340 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO             (SID-11) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 154 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/155.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+460 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.23  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°47 9.43  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92645278,
-94.78595278,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+460 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 155 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/156.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.87  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°47 0.36  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92635278,
-94.78343333,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+600 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 156 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/157.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+640 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.69  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 57.82  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92630278,
-94.78272778,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+640 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 157 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/158.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-10) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 53.63  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.33 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92628333,
-94.78156389,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+740 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-10) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 158 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/159.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO             (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+070 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.55  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 47.72  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.72 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92626389,
-94.77992222,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+070 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO             (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 159 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/160.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+060 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 32.1 </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.630 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92640833,
-94.77558333,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+060 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 160 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/161.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-9)         </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.87  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 16.19  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926075,
-94.77116389,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+900 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-9)         <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 161 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/162.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+240 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.73  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 14.3  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92603611,
-94.77063889,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+240 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 162 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/163.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+280 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.866  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°46 6.15  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92607389,
-94.768375,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+280 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 163 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/164.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+580 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.59  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 58.18  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.5m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92599722,
-94.76616111,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+580 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 164 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/165.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 56.95  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92599167,
-94.76581944,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+620 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 165 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/166.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.34  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 51.58  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.25 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92592778,
-94.76432778,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+740 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 166 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/167.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIO             (SIS-14, SIS-16, SIS-17) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 50.68  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92589167,
-94.76407778,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+760 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIO             (SIS-14, SIS-16, SIS-17) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 167 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/168.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA      (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.33  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 47.24  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.925925,
-94.76312222,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+840 <br> <b>Tipo:</b> SEÑAL PREVENTIVA      (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 168 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/169.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SOPORTE DE SEÑAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 19+060 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> SE ENCUENTRA EN MAL ESTADO SE RECOMIENDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 33.12  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 39.41  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92586667,
-94.76094722,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 19+060 <br> <b>Tipo:</b> SOPORTE DE SEÑAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 169 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/170.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 19+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 34.37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 16.31  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92621389,
-94.75453056,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 19+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 170 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/171.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.36  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 8.88  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92648889,
-94.75246667,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 20+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 171 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/172.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.0812"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  54.438"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926967,
-94.798455,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 172 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/173.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACION GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+140.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE ENDEREZAMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.1238"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  51.7452"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92697883,
-94.797707,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+140.00 <br> <b>Tipo:</b> INFORMACION GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 173 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/174.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+300.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.059"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  45.276"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92696083,
-94.79591,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+300.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 174 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/175.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 15+360.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  37.0704"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  44.1204"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926964,
-94.795589,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 15+360.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 175 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/176.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  36.5658"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  23.6502"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92682383,
-94.78990283,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 176 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/177.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  36.591"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  19.4064"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92683083,
-94.788724,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+100.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 177 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/178.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 16+260.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.8248"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 47  13.5852"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926618,
-94.787107,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 16+260.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 178 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/179.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+020.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.2236"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  47.9604"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926451,
-94.779989,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+020.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 179 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/180.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+060.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.6802"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  45.8178"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92657783,
-94.77939383,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+060.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 180 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/181.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+760.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.886"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  44.277"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926635,
-94.77896583,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+760.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 181 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/182.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+400.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.8024"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  30.6978"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926334,
-94.77519383,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+400.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 182 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/183.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+400.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.2272"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  30.417"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926452,
-94.77511583,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+400.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 183 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/184.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 17+260.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.1768"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  20.931"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926438,
-94.77248083,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 17+260.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 184 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/185.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+640.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.9314"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  15.2508"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92636983,
-94.770903,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+640.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 185 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/186.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+200.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.752"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 46  9.3066"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92632,
-94.76925183,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+200.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 186 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/187.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+620.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.4028"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  53.8014"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926223,
-94.76494483,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+620.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 187 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/188.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACION GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+660.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO DE PINTURA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.4202"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  51.9222"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92622783,
-94.76442283,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+660.00 <br> <b>Tipo:</b> INFORMACION GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 188 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/189.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIOS              (SIS-4 Y 45) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 18+860.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.2336"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  45.8022"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926176,
-96.97833333,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 18+860.00 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIOS              (SIS-4 Y 45) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 189 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/190.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 19+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  34.0998"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  42.4836"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92613883,
-94.761801,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 19+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 190 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/191.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 19+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  33.9774"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  34.509"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92610483,
-94.75958583,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 19+180.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 191 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/192.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-6)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 19+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  35.436"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  14.688"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92651,
-94.75408,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 19+800.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-6)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 192 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/193.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  36.282"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  8.8014"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926745,
-94.75244483,
'KM 15+000 AL 20+000',
'<b>Kilometro: </b> 20+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 193 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/194.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 35.36  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°45 8.88  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92676667,
-94.75246667,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 194 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/195.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA      (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+340 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 59.11  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92687778,
-94.74975278,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+340 <br> <b>Tipo:</b> SEÑAL PREVENTIVA      (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 195 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/196.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+360 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 36.79  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 58.29  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92688611,
-94.74952222,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+360 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 196 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/197.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 37.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 51.72  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92715556,
-94.7477,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+600 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 197 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/198.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+700 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 38.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 50.08  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92724167,
-94.74724444,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+700 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 198 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/199.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 39.01  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 42.67  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.0 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92750278,
-94.74518611,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+880 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 199 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/200.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMTRAJE SIN RUTA                      (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 21+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 40.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 35.34  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92779722,
-94.74315,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 21+000 <br> <b>Tipo:</b> KILOMTRAJE SIN RUTA                      (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 200 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/201.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 21+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 43.52  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°44 8.96  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92875556,
-94.73577222,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 21+900 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 201 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/202.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 22+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 47.85  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 38.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92995833,
-94.72746944,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 22+760 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 202 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/203.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 22+980 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 49.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 29.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93029722,
-94.72490556,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 22+980 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 203 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/204.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                      (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE LIMPIEZA Y ALINEACIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 49.4  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 28.61  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93038889,
-94.72461389,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                      (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 204 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/205.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+185 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 49.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 21.68  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.930488,
-94.722688,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+185 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 205 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/206.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 50.451  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 21.8  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93068083,
-94.72272222,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+200 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 206 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/207.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 52.95  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 2.74  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.931375,
-94.71742778,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 207 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/208.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 53.22  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°43 1.92  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93145,
-94.7172,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+900 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 208 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/209.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                      (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 54.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 55.05  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93168333,
-94.71529167,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                      (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 209 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/210.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+020 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 53.78  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 52.06  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93160556,
-94.71446111,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+020 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 210 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/211.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA      (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description">  ELEVADA   </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+090 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 54.28  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 50.56  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 38.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93174444,
-94.71404444,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+090 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA      (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 211 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/212.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA       (SP-6)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+640 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 56.950  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 34.17  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.8m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93248611,
-94.70949167,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+640 <br> <b>Tipo:</b> SEÑAL PREVENTIVA       (SP-6)  <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 212 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/213.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE LIMPIEZA, CALCOMANIA DAÑADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 57.95  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 26.81  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.932765,
-94.707449,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+860 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 213 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/214.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 59.25  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 21.18  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 39.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.933125,
-94.70588333,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 25+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 214 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/215.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  36.282"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 45  8.8014"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926745,
-94.75244483,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 215 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/216.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+320.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  38.2074"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  55.4454"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92727983,
-94.74873483,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+320.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 216 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/217.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+600.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  39.18"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  47.9832"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92755,
-94.746662,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+600.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 217 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/218.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+600.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  39.2406"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  47.5614"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92756683,
-94.74654483,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+600.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 218 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/219.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 20+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  39.9432"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  42.3918"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.927762,
-94.74510883,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 20+800.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 219 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/220.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 21+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  40.9902"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  35.631"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92805283,
-94.74323083,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 21+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 220 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/221.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 21+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  44.4498"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  8.628"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92901383,
-94.73573,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 21+820.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 221 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/222.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 22+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  45.5982"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 44  2.007"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92933283,
-94.73389083,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 22+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 222 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/223.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 22+780.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  48.8748"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  38.7192"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.930243,
-94.727422,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 22+780.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 223 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/224.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  50.325"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  27.9408"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93064583,
-94.724428,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 224 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/225.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+200.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  51.348"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  20.2764"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93093,
-94.722299,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+200.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 225 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/226.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+230.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  51.5892"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  19.6818"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.930997,
-94.72213383,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+230.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 226 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/227.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+340.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  52.3518"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  13.9368"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93120883,
-94.720538,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+340.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 227 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/228.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+840.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  53.997"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 43  1.5054"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93166583,
-94.71708483,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+840.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 228 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/229.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-30) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 23+920.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  54.6744"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  57.2652"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.931854,
-94.715907,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 23+920.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-30) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 229 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/230.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  55.0878"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  54.417"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93196883,
-94.71511583,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 230 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/231.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+090.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  55.6284"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  50.5254"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.932119,
-94.71403483,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+090.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 231 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/232.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+120.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  55.7436"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  50.1438"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.932151,
-94.71392883,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+120.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 232 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/233.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+480.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  56.8302"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  42.1416"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93245283,
-94.711706,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+480.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 233 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/234.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 24+860.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 55  59.181"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  26.3844"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93310583,
-94.707329,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 24+860.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 234 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/235.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  0.3984"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  20.8794"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.933444,
-94.70579983,
'KM 20+000 AL 25+000',
'<b>Kilometro: </b> 25+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 235 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/236.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°55 59.25  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°42 21.18  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 39.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.933125,
-94.70588333,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 236 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/237.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 8.46  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 58.96  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93568333,
-94.69971111,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+820 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 237 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/238.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMTRAJE SIN RUTA                         (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 13.64  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 50.99  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93712222,
-94.69749722,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+000 <br> <b>Tipo:</b> KILOMTRAJE SIN RUTA                         (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 238 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/239.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA    (SR-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+008 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 13.89  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 50.75  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93719167,
-94.69743056,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+008 <br> <b>Tipo:</b> SEÑAL PREVENTIVA    (SR-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 239 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/240.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 17.15  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 46.09  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93809722,
-94.69613611,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+200 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 240 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/241.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA   (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 17.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 45.37  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93822778,
-94.69593611,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+220 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA   (SR-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 241 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/242.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 27.5  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 30.62  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94097222,
-94.69183889,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+840 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 242 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/243.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 32.37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 22.47  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 29.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.942325,
-94.689575,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 243 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/244.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA     (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 37.14  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 15.61  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94365,
-94.68766944,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+300 <br> <b>Tipo:</b> SEÑAL PREVENTIVA     (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 244 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/245.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 41.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 9.25  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94483889,
-94.68590278,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+500 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 245 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/246.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA     (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+510 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°56 41.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°41 8.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94493333,
-94.68580278,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+510 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA     (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 246 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/247.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 5.37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°40 32.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95149167,
-94.67567778,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 28+860 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 247 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/248.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 9.22  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°40 26.65  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95256111,
-94.67406944,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                       (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 248 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/249.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA     (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 12.94  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°40 20.76  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.158 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95359444,
-94.67243333,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+200 <br> <b>Tipo:</b> SEÑAL PREVENTIVA     (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 249 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/250.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA     (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+440 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°57 17.09  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°40 14.61  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95474722,
-94.670725,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+440 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA     (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 250 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/251.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  0.3984"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  20.8794"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.933444,
-94.70579983,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 251 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/252.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+700.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  7.7496"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  2.2284"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.935486,
-94.700619,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+700.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 252 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/253.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  8.8902"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 42  0.4212"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93580283,
-94.700117,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+820.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 253 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/254.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-6)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 25+880.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  10.1826"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  58.2576"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93616183,
-94.699516,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 25+880.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-6)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 254 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/255.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO DE PINTURA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  14.8122"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  51.2514"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93744783,
-94.69756983,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 255 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/256.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+360.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  23.0136"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  39.0516"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.939726,
-94.694181,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+360.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 256 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/257.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 26+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  28.0536"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  31.4916"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.941126,
-94.692081,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 26+820.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 257 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/258.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  33.3816"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  23.28"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.942606,
-94.6898,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 258 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/259.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+510.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  43.1802"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  8.43"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94532783,
-94.685675,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+510.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 259 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/260.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+540.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  43.3134"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  8.3904"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94536483,
-94.685664,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+540.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 260 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/261.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  47.4"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  1.9464"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.9465,
-94.683874,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+820.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 261 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/262.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 27+860.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  47.8674"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 41  1.1328"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.94662983,
-94.683648,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 27+860.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 262 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/263.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 28+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 56  51.7812"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  55.0626"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.947717,
-94.68196183,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 28+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 263 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/264.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  10.0332"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  27.03"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.952787,
-94.674175,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 264 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/265.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+440.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  18.7014"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  13.5222"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95519483,
-94.67042283,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+440.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 265 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/266.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+470.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  19.0074"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  13.083"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95527983,
-94.67030083,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+470.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 266 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/267.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+560.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  21.7074"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  9.0588"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95602983,
-94.669183,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+560.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 267 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/268.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 29+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  24.6672"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 40  4.4898"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.956852,
-94.66791383,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 29+820.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 268 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/269.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  28.1946"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  59.0142"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95783183,
-94.66639283,
'KM 25+000 AL 30+000',
'<b>Kilometro: </b> 30+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 269 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/309.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 49.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 32.05  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.980392,
-94.625569,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 309 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/310.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 51.45  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 27.81  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.980958,
-94.624392,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+180 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 310 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/311.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 52.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 26.04  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981194,
-94.6239,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+200 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 311 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/312.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-21) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+420 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 54.67  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 20.83  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981853,
-94.622453,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+420 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-21) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 312 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/313.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 1.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 7.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.3m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.983692,
-94.618858,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+800 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 313 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/314.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                             (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 4.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 1.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.984525,
-94.617128,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 36+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                             (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 314 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/315.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA        (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+400 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 9.33  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 51.11  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.985924,
-94.614198,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 36+400 <br> <b>Tipo:</b> SEÑAL PREVENTIVA        (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 315 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/316.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+700 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 13.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 42.67  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.987028,
-94.611853,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 36+700 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 316 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/317.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+640 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 28.82  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 18.2  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.991339,
-94.605056,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+640 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 317 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/318.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-30) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+680 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 30.75  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 16.26  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 29. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.991875,
-94.604517,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+680 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-30) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 318 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/319.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA           (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+720 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, SE RECOMIEDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 32.22  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 14.72  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.992283,
-94.604089,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+720 <br> <b>Tipo:</b> SEÑAL PREVENTIVA           (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 319 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/320.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 37.55  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 9.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.993764,
-94.602747,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+820 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 320 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/321.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 39.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 8.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994183,
-94.602406,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+900 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 321 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/322.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 39.73  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 8.09  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994369,
-94.602247,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 37+930 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 322 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/323.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                             (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 41.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 6.79  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994781,
-94.601886,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                             (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 323 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/324.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 46.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 2.8  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.9962,
-94.600779,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+220 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 324 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/325.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL INFORMATICA DE DESTINO                      (SID) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, DOBLADA ESQUINA DE ABAJO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 48.85  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 0.51  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.15 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.996903,
-94.600142,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+300 <br> <b>Tipo:</b> SEÑAL INFORMATICA DE DESTINO                      (SID) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 325 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/326.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                     (SID-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 50.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 59.3  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.997433,
-94.599806,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+380 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                     (SID-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 326 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/327.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                  (SID-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 58.17  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 52.73  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.999492,
-94.597981,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+820 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                  (SID-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 327 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/328.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                  (SID-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 1.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 49.64  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.000436,
-94.597122,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+880 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                  (SID-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 328 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/329.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                    (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 3.36  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 48.22  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.000933,
-94.596728,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+920 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                    (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 329 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/330.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA         (SP-19) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 4.35  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 47.39  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.001208,
-94.596497,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 38+930 <br> <b>Tipo:</b> SEÑAL PREVENTIVA         (SP-19) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 330 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/331.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                              (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 6.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 45.62  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.001733,
-94.596006,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                              (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 331 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/332.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                 (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+020 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 7.54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 44.65  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002094,
-94.595736,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+020 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                 (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 332 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/333.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL   PREVENTIVA          (SP-19) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+030 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 8.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  -94°35 43.69  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002336,
-94.595469,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+030 <br> <b>Tipo:</b> SEÑAL   PREVENTIVA          (SP-19) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 333 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/334.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA            (SR-31) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 9.14  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 4.15  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002686,
-94.595144,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+080 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA            (SR-31) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 334 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/335.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+120 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,                   LA MALESA IMPIDE VISIVILIDAD </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 10.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 42.24  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002861,
-94.595067,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+120 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 335 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/336.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA          (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+340 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">UNICO </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 11.89  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  94°35 40.52  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.003303,
-94.594589,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+340 <br> <b>Tipo:</b> SEÑAL PREVENTIVA          (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 336 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/337.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO DOBLE BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, TUBO OXIDADO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 13.72  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 39.07  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.003811,
-94.594186,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+380 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 337 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/338.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA           (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 16.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 37.55  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.004461,
-94.593764,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> SEÑAL PREVENTIVA           (SP-6) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 338 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/339.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA         (SR-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+520 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA,  CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 16.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 36.64  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.004558,
-94.593511,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+520 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA         (SR-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 339 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/340.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-7) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+560 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CALCOMANIA DESPEGADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 17.28  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 35.83  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.0048,
-94.593286,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+560 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-7) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 340 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/341.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+660 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 18.6  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 34.88  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005167,
-94.593022,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+660 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 341 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/342.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+700 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 20.69  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 33.50  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005747,
-94.592639,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+700 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 342 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/343.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+720 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.19  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 33.05  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005886,
-94.592515,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+720 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 343 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/344.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 32.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006006,
-94.59235,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+740 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 344 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/345.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 32.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006006,
-94.59235,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+760 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 345 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/346.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO             (SID-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+757 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.95  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.84  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006097,
-94.592178,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+757 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO             (SID-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 346 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/347.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+780 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 22.5  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00625,
-94.592072,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+780 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 347 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/348.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 22.5  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00625,
-94.592072,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+800 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 348 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/349.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 23.32  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 30.87  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006478,
-94.591908,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+820 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 349 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/350.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.01  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 30.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006669,
-94.591789,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+840 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 350 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/351.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.99  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006725,
-94.591664,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+860 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 351 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/352.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.49  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006783,
-94.591525,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+880 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 352 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/353.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.88  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.14  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006911,
-94.591428,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+900 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 353 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/354.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 25.25  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 28.58  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007014,
-94.591272,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+920 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 354 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/355.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+960 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 26.84  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 25.39  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007456,
-94.590386,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+960 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 355 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/356.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+968 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AQ </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA,  CALCOMANIA DESPEGADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 27.16  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 24.49  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007544,
-94.590136,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+968 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 356 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/357.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA   (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+966 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CON GRAFITI, SE RECOMIENDA SUSTITUCION </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 26.88  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 25.16  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007467,
-94.590322,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+966 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA   (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 357 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/358.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+995 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 28.14  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 22.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007817,
-94.589628,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 39+995 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 358 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/359.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 40+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 28.8  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  -94°35 20.97  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.008,
-94.589158,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 40+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 359 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/288.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN       (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  28.1946"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  59.0142"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.95783183,
-94.66639283,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 30+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN       (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 288 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/289.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+760.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  42.48"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  36.9714"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.9618,
-94.66026983,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 30+760.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 289 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/290.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+830.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  43.7004"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  34.9992"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.962139,
-94.659722,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 30+830.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 290 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/291.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 30+850.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  43.7868"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  34.8768"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.962163,
-94.659688,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 30+850.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 291 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/292.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN       (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  46.512"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  30.7584"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96292,
-94.658544,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN       (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 292 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/293.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+060.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  47.8692"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  28.674"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.963297,
-94.657965,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+060.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 293 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/294.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-34) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 57  51.4074"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  23.1228"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96427983,
-94.656423,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+160.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-34) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 294 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/295.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  2.0706"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  6.9402"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96724183,
-94.65192783,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+820.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 295 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/296.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+980.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  5.2422"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 39  1.602"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96812283,
-94.650445,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+980.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 296 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/297.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 31+990.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE ENDEREZAMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  6.4518"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  59.334"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96845883,
-94.649815,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 31+990.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 297 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/298.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  6.5886"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  59.1972"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96849683,
-94.649777,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 32+100.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 298 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/299.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIOS              (SIS-11) Y T/A </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+320.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  10.0986"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  52.371"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.96947183,
-94.64788083,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 32+320.00 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIOS              (SIS-11) Y T/A <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 299 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/300.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  16.8996"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  38.835"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.971361,
-94.64412083,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 32+800.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 300 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/301.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE SERVICIOS              (SIS-11) Y T/A </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 32+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  17.2308"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  38.0286"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.971453,
-94.64389683,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 32+820.00 <br> <b>Tipo:</b> INFORMATIVA DE SERVICIOS              (SIS-11) Y T/A <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 301 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/302.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 33+230.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  24.279"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  23.8806"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.97341083,
-94.63996683,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 33+230.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 302 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/303.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 33+250.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  24.5418"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  23.4312"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.97348383,
-94.639842,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 33+250.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 303 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/304.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN      (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  35.0868"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 38  2.5332"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.976413,
-94.634037,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 34+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN      (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 304 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/305.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+180.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  38.0856"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  56.5278"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.977246,
-94.63236883,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 34+180.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 305 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/306.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+200.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  38.1894"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  56.4744"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.97727483,
-94.632354,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 34+200.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 306 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/307.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 34+860.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  47.2614"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  38.2686"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.97979483,
-94.62729683,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 34+860.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 307 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/308.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN      (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  50.1954"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  32.3574"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98060983,
-94.62565483,
'KM 30+000 AL 35+000',
'<b>Kilometro: </b> 35+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN      (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 308 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/309.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 49.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 32.05  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.980392,
-94.625569,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 309 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/310.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 51.45  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 27.81  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 33. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.980958,
-94.624392,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+180 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 310 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/311.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 52.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 26.04  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981194,
-94.6239,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+200 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 311 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/312.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-21) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+420 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°58 54.67  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 20.83  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981853,
-94.622453,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+420 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-21) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 312 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/313.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 1.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 7.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.3m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.983692,
-94.618858,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+800 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 313 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/314.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                             (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 4.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°37 1.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.984525,
-94.617128,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 36+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                             (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 314 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/315.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA        (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+400 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 9.33  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 51.11  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.985924,
-94.614198,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 36+400 <br> <b>Tipo:</b> SEÑAL PREVENTIVA        (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 315 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/316.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+700 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 13.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 42.67  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.987028,
-94.611853,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 36+700 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 316 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/317.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA       (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+640 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 28.82  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 18.2  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.991339,
-94.605056,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+640 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA       (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 317 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/318.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-30) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+680 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 30.75  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 16.26  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 29. m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.991875,
-94.604517,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+680 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-30) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 318 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/319.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA           (SP-25) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+720 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, SE RECOMIEDA SUSTITUCIÓN </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 32.22  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 14.72  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 25.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.992283,
-94.604089,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+720 <br> <b>Tipo:</b> SEÑAL PREVENTIVA           (SP-25) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 319 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/320.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 37.55  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 9.89  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.993764,
-94.602747,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+820 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 320 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/321.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 39.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 8.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994183,
-94.602406,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+900 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 321 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/322.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 39.73  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 8.09  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994369,
-94.602247,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+930 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 322 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/323.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                             (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 41.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 6.79  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994781,
-94.601886,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                             (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 323 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/324.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+220 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 46.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 2.8  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.9962,
-94.600779,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+220 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 324 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/325.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL INFORMATICA DE DESTINO                      (SID) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, DOBLADA ESQUINA DE ABAJO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 48.85  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°36 0.51  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.15 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.996903,
-94.600142,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+300 <br> <b>Tipo:</b> SEÑAL INFORMATICA DE DESTINO                      (SID) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 325 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/326.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                     (SID-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 50.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 59.3  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.997433,
-94.599806,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+380 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                     (SID-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 326 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/327.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                  (SID-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17°59 58.17  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 52.73  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.999492,
-94.597981,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+820 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                  (SID-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 327 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/328.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                  (SID-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 1.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 49.64  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.000436,
-94.597122,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+880 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                  (SID-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 328 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/329.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                    (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 3.36  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 48.22  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.000933,
-94.596728,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+920 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                    (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 329 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/330.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA         (SP-19) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+930 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 4.35  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 47.39  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.001208,
-94.596497,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+930 <br> <b>Tipo:</b> SEÑAL PREVENTIVA         (SP-19) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 330 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/331.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE SIN RUTA                              (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 6.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 45.62  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.001733,
-94.596006,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+000 <br> <b>Tipo:</b> KILOMETRAJE SIN RUTA                              (SII-15) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 331 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/332.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                 (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+020 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 7.54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 44.65  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.60 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002094,
-94.595736,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+020 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                 (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 332 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/333.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL   PREVENTIVA          (SP-19) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+030 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 8.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  -94°35 43.69  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 21.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002336,
-94.595469,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+030 <br> <b>Tipo:</b> SEÑAL   PREVENTIVA          (SP-19) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 333 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/334.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA            (SR-31) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 9.14  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 4.15  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 30.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002686,
-94.595144,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+080 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA            (SR-31) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 334 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/335.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO                (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+120 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR,                   LA MALESA IMPIDE VISIVILIDAD </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 10.3  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 42.24  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.50 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002861,
-94.595067,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+120 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO                (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 335 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/336.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA          (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+340 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">UNICO </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 11.89  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  94°35 40.52  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.003303,
-94.594589,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+340 <br> <b>Tipo:</b> SEÑAL PREVENTIVA          (SP-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 336 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/337.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO DOBLE BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+380 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, TUBO OXIDADO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 13.72  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 39.07  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 31.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.003811,
-94.594186,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+380 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 337 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/338.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL PREVENTIVA           (SP-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 16.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 37.55  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.004461,
-94.593764,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+500 <br> <b>Tipo:</b> SEÑAL PREVENTIVA           (SP-6) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 338 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/339.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA         (SR-6) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+520 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA,  CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 16.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 36.64  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.004558,
-94.593511,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+520 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA         (SR-6) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 339 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/340.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA        (SR-7) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+560 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CALCOMANIA DESPEGADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 17.28  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 35.83  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.0048,
-94.593286,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+560 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA        (SR-7) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 340 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/341.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+660 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 18.6  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 34.88  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005167,
-94.593022,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+660 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 341 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/342.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+700 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 20.69  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 33.50  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005747,
-94.592639,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+700 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 342 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/343.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+720 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.19  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 33.05  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.005886,
-94.592515,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+720 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 343 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/344.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA  </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+740 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 32.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006006,
-94.59235,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+740 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 344 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/345.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+760 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.62  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 32.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006006,
-94.59235,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+760 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 345 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/346.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO             (SID-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+757 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MAL </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 21.95  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.84  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006097,
-94.592178,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+757 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO             (SID-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 346 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/347.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+780 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 22.5  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00625,
-94.592072,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+780 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 347 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/348.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 22.5  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 31.46  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00625,
-94.592072,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+800 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 348 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/349.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+820 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 23.32  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 30.87  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006478,
-94.591908,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+820 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 349 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/350.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+840 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,   REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.01  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 30.44  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006669,
-94.591789,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+840 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 350 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/351.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.21  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.99  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006725,
-94.591664,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+860 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 351 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/352.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.42  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.49  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006783,
-94.591525,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+880 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 352 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/353.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 24.88  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 29.14  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006911,
-94.591428,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+900 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 353 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/354.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+920 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 25.25  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 28.58  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007014,
-94.591272,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+920 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 354 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/355.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+960 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA,  REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 26.84  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 25.39  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.10 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007456,
-94.590386,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+960 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 355 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/356.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> DISPOSITIVOS DIVERSOS          (OD-12) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+968 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">AQ </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA,  CALCOMANIA DESPEGADA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 27.16  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 24.49  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.70 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007544,
-94.590136,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+968 <br> <b>Tipo:</b> DISPOSITIVOS DIVERSOS          (OD-12) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 356 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/357.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> SEÑAL RESTRICTIVA   (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+966 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> MALA, CON GRAFITI, SE RECOMIENDA SUSTITUCION </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 26.88  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 25.16  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007467,
-94.590322,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+966 <br> <b>Tipo:</b> SEÑAL RESTRICTIVA   (SR-9) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 357 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/358.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE DESTINO            (SID-13) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+995 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR CON GRAFITI </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 28.14  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94°35 22.66  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.007817,
-94.589628,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+995 <br> <b>Tipo:</b> INFORMATIVA DE DESTINO            (SID-13) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 358 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/359.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> KILOMETRAJE CON RUTA           (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 40+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18°0 28.8  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  -94°35 20.97  </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.008,
-94.589158,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 40+000 <br> <b>Tipo:</b> KILOMETRAJE CON RUTA           (SII-14) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 359 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 
        
['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/360.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN       (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  50.1954"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  32.3574"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98060983,
-94.62565483,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN       (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 360 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/361.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA          (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+190.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  53.1942"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  26.115"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98144283,
-94.62392083,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+190.00 <br> <b>Tipo:</b> RESTRICTIVA          (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 361 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/362.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL               (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+210.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  53.3748"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  26.0934"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981493,
-94.62391489,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+210.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL               (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 362 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/363.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA            (SR-22) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+480.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 58  58.7418"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  15.0996"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98298383,
-94.620861,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+480.00 <br> <b>Tipo:</b> RESTRICTIVA            (SR-22) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 363 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/364.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 35+760.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  2.0898"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  8.1402"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98391383,
-94.61892783,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 35+760.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 364 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/365.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN         (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 36+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  5.0856"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 37  2.118"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.984746,
-94.617255,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 36+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN         (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 365 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/366.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN        (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  19.773"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  31.8702"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.98882583,
-94.60885283,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN        (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 366 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/367.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA             (SR-31) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+520.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  29.997"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  18.4824"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.99166583,
-94.605134,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+520.00 <br> <b>Tipo:</b> RESTRICTIVA             (SR-31) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 367 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/368.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA            (SR-30) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+740.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  35.3394"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  13.1826"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.99314983,
-94.60366183,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+740.00 <br> <b>Tipo:</b> RESTRICTIVA            (SR-30) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 368 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/369.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+860.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  38.3238"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  10.6914"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.99397883,
-94.60296983,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+860.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 369 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/370.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA            (SR-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+930.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  40.27"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36´8.78"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994519,
-94.602438,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+930.00 <br> <b>Tipo:</b> RESTRICTIVA            (SR-15) <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 370 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/371.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL                 (SIG-8) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 37+950.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  41.0136"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  8.4924"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.994726,
-94.602359,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 37+950.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL                 (SIG-8) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 371 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/372.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  42.234"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  7.4298"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.995065,
-94.60206383,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 372 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/373.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> RESTRICTIVA             (SR-9) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+060.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  43.5048"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  6.3648"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.995418,
-94.601768,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+060.00 <br> <b>Tipo:</b> RESTRICTIVA             (SR-9) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 373 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/374.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-25)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  44.9232"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  5.076"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.995812,
-94.60141,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+100.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-25)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 374 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/375.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA, TIPO BANDERA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  48.2238"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 36  2.2716"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.4 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.99672883,
-94.600631,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+160.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 375 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/376.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN GENERAL </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+540.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">17º 59  57.4404"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  54.636"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.999289,
-94.59851,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+540.00 <br> <b>Tipo:</b> INFORMACIÓN GENERAL <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 376 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/377.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-15)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA, TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+640.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  0.2694"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  52.1664"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00007483,
-94.597824,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+640.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-15)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 377 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/378.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+820.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  3.639"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  49.2822"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00101083,
-94.59702283,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+820.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 378 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/379.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-11)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 38+900.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  5.4144"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  47.8962"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.001504,
-94.59663783,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 38+900.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-11)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 379 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/380.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  7.7544"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  45.7224"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.002154,
-94.596034,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-15) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 380 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/381.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-17)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+060.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  10.9656"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  42.9102"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 18.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.003046,
-94.59525283,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+060.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-17)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 381 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/382.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SR-30)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+100.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  14.4534"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  39.8616"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00401483,
-94.594406,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+100.00 <br> <b>Tipo:</b> PREVENTIVA            (SR-30)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 382 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/383.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SR-7)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+160.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  15.2064"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  39.5412"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 22.3 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.004224,
-94.594317,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+160.00 <br> <b>Tipo:</b> PREVENTIVA            (SR-7)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 383 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/384.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> PREVENTIVA            (SP-17)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+200.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  16.7034"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  38.0754"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00463983,
-94.59390983,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+200.00 <br> <b>Tipo:</b> PREVENTIVA            (SP-17)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 384 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/385.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA, TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+280.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  18.6474"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  36.1536"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00517983,
-94.593376,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+280.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 385 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/386.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA RECOMENDACIÓN </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+320.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 18° 0 18.94"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  94°35 36.05"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.5 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00526,
-94.593347,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+320.00 <br> <b>Tipo:</b> INFORMATIVA RECOMENDACIÓN <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 386 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/387.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-11)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+500.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  23.1336"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  32.406"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.006426,
-94.592335,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+500.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-11)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 387 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/388.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INDICADOR DE OBSTACULOS (OD-5) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+640.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  26.337"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  28.9248"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.6 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00731583,
-94.591368,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+640.00 <br> <b>Tipo:</b> INDICADOR DE OBSTACULOS (OD-5) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 388 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/389.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INDICADOR DE OBSTACULOS (OD-5) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  27.8922"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  25.5984"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.9 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00774783,
-94.590444,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+800.00 <br> <b>Tipo:</b> INDICADOR DE OBSTACULOS (OD-5) <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 389 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Derecho' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/390.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INDICADOR DE OBSTACULOS (OD-5) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  28.2918"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  25.7244"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.2 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00785883,
-94.590479,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+800.00 <br> <b>Tipo:</b> INDICADOR DE OBSTACULOS (OD-5) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 390 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/391.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-12)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> ELEVADA, TIPO PUENTE </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+800.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Centro </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, DAÑADA POR VIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  28.548"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  25.0398"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 13.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00793,
-94.59028883,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+800.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-12)  <br> <b>Lado:</b> Centro',
'<a class="hvr-bounce-to-right" onClick="justOne( 391 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Centro' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/392.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMACIÓN DE DESTINO                    (SID-8)  </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 39+880.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> REGULAR, REQUIERE MANTENIMIENTO </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description">18º 0  28.785"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> -94º 35  24.5322"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.7 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00799583,
-94.59014783,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 39+880.00 <br> <b>Tipo:</b> INFORMACIÓN DE DESTINO                    (SID-8)  <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 392 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ], 


['<div id="fixedWindow">' +
 '<img src="img/Senalamiento/393.JPG" alt="Imagen de Señalamientos">' +
'<h4 class="fixedWindowTitle titleSenalamientos">Relación de Señalamiento Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) </p>' +
'<h5 class="subTitle"> Tipo </h5> <p class="description"> BAJA </p>' +
'<h5 class="subTitle"> Ubicación </h5> <p class="description"> 40+000.00 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description">B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description"> BUENA, REQUIERE LIMPIEZA </p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 18° 0 30.16"</p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description">  94°35 21.51"</p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.1 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.008377,
-94.589308,
'KM 35+000 AL 40+000',
'<b>Kilometro: </b> 40+000.00 <br> <b>Tipo:</b> INFORMATIVA DE IDENTIFICACIÓN   (SII-14) <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 393 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>',
'Izquierdo' ]

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


