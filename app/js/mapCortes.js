
var map;
var gmarkers = [];
var currentScrollPosition;
var infowindow = new google.maps.InfoWindow();

   //locations array, contains the html to dsiplay the total info, the coordinates of all the services, a category to make the filter and a kilometer of the location service to display in the filter
    var locations = [
['<div id="fixedWindow">' +
 '<img src="img/Cortes/1.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 0+920 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+070 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B  </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 38.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 47.20   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91071389,
-94.92977778,
 'Estable',
' <b>Kilometro: </b> 0+920 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 1 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/2.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 0+970 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+030 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 48   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 108.8 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.910278,
-94.93,
 'Estable',
' <b>Kilometro: </b> 0+970 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 2 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/3.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 1+600 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+800 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 38.74  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 21.04   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 0.7 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91076111,
-94.92251111,
 'Estable',
' <b>Kilometro: </b> 1+600 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 3 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/4.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 1+600 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">1+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 40.17  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 18.02   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.2 M.S.N.M </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.91115833,
-94.92167222,
 'Estable',
' <b>Kilometro: </b> 1+600 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 4 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/5.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 2+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">2+196 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Regular Inestabilidad</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 40.20  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°55 03.09   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 96.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.911167,
-94.917525,
 'Regular Inestabilidad',
' <b>Kilometro: </b> 2+100 <br> <b>Condición:</b> Regular Inestabilidad',
'<a class="hvr-bounce-to-right" onClick="justOne( 5 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/6.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 2+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">2+420 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">El Talud Del Corte Presenta Inestabilidad</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°54 56   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.911389,
-94.915556,
 'El Talud Del Corte Presenta Inestabilidad',
' <b>Kilometro: </b> 2+100 <br> <b>Condición:</b> El Talud Del Corte Presenta Inestabilidad',
'<a class="hvr-bounce-to-right" onClick="justOne( 6 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/7.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 2+700 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">2+860 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 42.09  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°54 48.53   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.9M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.911692,
-94.913481,
 'Estable',
' <b>Kilometro: </b> 2+700 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 7 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/8.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 3+240 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">3+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 43.49  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°54 31.22   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.912081,
-94.908672,
 'Estable',
' <b>Kilometro: </b> 3+240 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 8 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/9.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 4+400 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">4+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 45.76  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 50.00   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.912711,
-94.897222,
 'Estable',
' <b>Kilometro: </b> 4+400 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 9 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/10.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 4+300 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">4+530 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 44.47  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 50.42   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.912353,
-94.897339,
 'Estable',
' <b>Kilometro: </b> 4+300 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 10 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/11.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 5+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">5+660 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">El Talud Del Corte Presenta Inestabilidad</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 46.04  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 26.57   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 94.5 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.912789,
-94.890714,
 'El Talud Del Corte Presenta Inestabilidad',
' <b>Kilometro: </b> 5+000 <br> <b>Condición:</b> El Talud Del Corte Presenta Inestabilidad',
'<a class="hvr-bounce-to-right" onClick="justOne( 11 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/12.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 5+800 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">5+910 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 47.44  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 05.30   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.8 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.913178,
-94.884806,
 'Inestable',
' <b>Kilometro: </b> 5+800 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 12 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/13.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 5+800 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">5+910 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 49  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°53 05   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.5 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.913611,
-94.884722,
 'Estable',
' <b>Kilometro: </b> 5+800 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 13 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/14.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 6+900 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 51  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 25   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914167,
-94.873611,
 'Inestable',
' <b>Kilometro: </b> 6+900 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 14 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/15.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 7+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+280 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 52  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 14   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914444,
-94.870556,
 'Estable',
' <b>Kilometro: </b> 7+100 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 15 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/16.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 7+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+250 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 50.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 17.18   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.4 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914047,
-94.871439,
 'Inestable',
' <b>Kilometro: </b> 7+200 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 16 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/17.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 7+580 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+620 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 51.96  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 3.23   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 24.1 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914433,
-94.867564,
 'Inestable',
' <b>Kilometro: </b> 7+580 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 17 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/18.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 7+520 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">7+630 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 53.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°52 0.55   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.8 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.914881,
-94.866819,
 'Estable',
' <b>Kilometro: </b> 7+520 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 18 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/19.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 8+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">8+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 51   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 35.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.915,
-94.864167,
 'Estable',
' <b>Kilometro: </b> 8+000 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 19 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/20.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 8+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">8+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 58  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 40   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 34.3 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.916111,
-94.861111,
 'Estable',
' <b>Kilometro: </b> 8+000 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 20 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/21.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 8+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">8+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°54 58.06  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 37.52   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 19.1 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.916128,
-94.860422,
 'Estable',
' <b>Kilometro: </b> 8+200 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 21 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/22.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 9+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">9+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 4.41  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 01.30   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 23.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.917892,
-94.850361,
 'Inestable',
' <b>Kilometro: </b> 9+200 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 22 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/23.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 9+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">9+310 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 04.33  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°51 1.89   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 53.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.917869,
-94.850525,
 'Inestable',
' <b>Kilometro: </b> 9+100 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 23 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/24.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 9+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">9+310 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 06.46  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°50 58.63   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.918461,
-94.849619,
 'Estable',
' <b>Kilometro: </b> 9+100 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 24 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/25.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 12+400 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">12+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 26.74  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 20.16   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.924094,
-94.822267,
 'Estable',
' <b>Kilometro: </b> 12+400 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 25 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/26.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 12+900 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">13+050 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 29.54  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 06.61   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.924872,
-94.818503,
 'Estable',
' <b>Kilometro: </b> 12+900 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 26 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/27.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 12+900 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">13+050 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 31  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°49 06   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 16.7 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.925278,
-94.818333,
 'Estable',
' <b>Kilometro: </b> 12+900 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 27 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/28.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 13+400 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">13+500 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 33.29  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 55.89   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.3 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.925914,
-94.815525,
 'Estable',
' <b>Kilometro: </b> 13+400 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 28 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/29.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 13+700 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">13+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 35.08  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 41.28   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.5 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926411,
-94.811467,
 'Estable',
' <b>Kilometro: </b> 13+700 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 29 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/30.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 13+700 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">13+880 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 37  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 41   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 14.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926944,
-94.811389,
 'Estable',
' <b>Kilometro: </b> 13+700 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 30 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/31.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 14+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">14+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 36.59  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 29.80   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 12.5 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.926831,
-94.808278,
 'Estable',
' <b>Kilometro: </b> 14+000 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 31 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/32.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 14+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">14+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 38  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 30   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 7.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.927222,
-94.808333,
 'Estable',
' <b>Kilometro: </b> 14+000 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 32 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/33.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 14+400 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">14+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 38  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 21   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 7.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.927222,
-94.805833,
 'Estable',
' <b>Kilometro: </b> 14+400 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 33 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/34.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 14+600 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">14+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 38  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°48 18   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 7.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.927222,
-94.805,
 'Estable',
' <b>Kilometro: </b> 14+600 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 34 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/35.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 22+010 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">22+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 46  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 58   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 27.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.929444,
-94.732778,
 'Estable',
' <b>Kilometro: </b> 22+010 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 35 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/36.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 22+010 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">22+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 45.66  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 50.73   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 105.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.92935,
-94.730758,
 'Inestable',
' <b>Kilometro: </b> 22+010 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 36 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/37.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 22+860 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">22+940 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 47.87  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 35.75   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 0.8 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.929964,
-94.726597,
 'Estable',
' <b>Kilometro: </b> 22+860 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 37 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/38.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 22+860 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">22+940 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 49.26  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 35.91   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 3.7 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.93035,
-94.726642,
 'Inestable',
' <b>Kilometro: </b> 22+860 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 38 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/39.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 23+180 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">23+230 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 51  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 21   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 2.5 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.930833,
-94.7225,
 'Estable',
' <b>Kilometro: </b> 23+180 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 39 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/40.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 23+340 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">23+400 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 51.87  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°43 16.07   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 2.4 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.931075,
-94.721131,
 'Inestable',
' <b>Kilometro: </b> 23+340 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 40 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/41.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 24+000 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">24+050 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 55.57  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 52.12   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 2.8 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.932103,
-94.714478,
 'Inestable',
' <b>Kilometro: </b> 24+000 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 41 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/42.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 24+900 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">25+120 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°55 59  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 21   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.933056,
-94.705833,
 'Estable',
' <b>Kilometro: </b> 24+900 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 42 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/43.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 25+400 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">25+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°56 05.07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 03.63   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 0.7 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.934742,
-94.701008,
 'Estable',
' <b>Kilometro: </b> 25+400 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 43 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/44.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 25+450 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">25+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°56 3.13  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 11.76   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 9.1 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.934203,
-94.703267,
 'Estable',
' <b>Kilometro: </b> 25+450 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 44 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/45.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 25+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">25+280 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°56 07  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°42 03   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.7 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.935278,
-94.700833,
 'Inestable',
' <b>Kilometro: </b> 25+200 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 45 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/46.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 25+800 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">26+000 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°56 12  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 56   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 26.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.936667,
-94.698889,
 'Estable',
' <b>Kilometro: </b> 25+800 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 46 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/47.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 27+100 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">27+200 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°56 25  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°41 37   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 15.9 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.940278,
-94.693611,
 'Estable',
' <b>Kilometro: </b> 27+100 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 47 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/48.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 34+140 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">34+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°58 36  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 59   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.976667,
-94.633056,
 'Estable',
' <b>Kilometro: </b> 34+140 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 48 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/49.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 34+140 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">34+180 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°58 55  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 24   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 10.3 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981944,
-94.623333,
 'Estable',
' <b>Kilometro: </b> 34+140 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 49 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/50.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 35+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">35+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°58 53.10  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 23.41   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 11.1 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.981417,
-94.623169,
 'Estable',
' <b>Kilometro: </b> 35+200 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 50 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/51.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 35+200 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">35+300 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°58 59  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 13   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.2 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.983056,
-94.620278,
 'Estable',
' <b>Kilometro: </b> 35+200 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 51 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/52.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 35+500 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">35+600 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°58 59.77  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°37 13.49   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 20.6 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.983269,
-94.620414,
 'Inestable',
' <b>Kilometro: </b> 35+500 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 52 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/53.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 36+900 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">37+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°59 17.68  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36 32.62   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 29.3 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.988244,
-94.609061,
 'Estable',
' <b>Kilometro: </b> 36+900 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 53 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/54.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 36+600 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">37+080 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Inestable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°59 19  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36 33   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 28.9 M.S. N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.988611,
-94.609167,
 'Inestable',
' <b>Kilometro: </b> 36+600 <br> <b>Condición:</b> Inestable',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/55.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 38+550 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">38+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO A </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°59 49  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°36 00   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 17.1 M.S.N.M. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.996944,
-94.6,
 'Estable',
' <b>Kilometro: </b> 38+550 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 55 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Cortes/56.JPG" alt="Imagen de Cortes">' +
'<h4 class="fixedWindowTitle titleCortes">Relación de Cortes:KM 00+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> Cadenamiento Inicial (KM) </h5> <p class="description"> 38+550 </p>' +
'<h5 class="subTitle"> Cadenamiento Final (KM) </h5> <p class="description">38+900 </p>' +
'<h5 class="subTitle"> Cuerpo </h5> <p class="description"> CUERPO B </p>' +
'<h5 class="subTitle"> Lado </h5> <p class="description"> DERECHO </p>' +
'<h5 class="subTitle"> Condición </h5> <p class="description">Estable</p>' +
'<h5 class="subTitle"> Latitud_Ini </h5> <p class="description"> 17°59 56  </p>' +
'<h5 class="subTitle"> Longitud_Ini </h5> <p class="description"> 94°35 56   </p>' +
'<h5 class="subTitle"> Altitud </h5> <p class="description"> 32.8 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
17.998889,
-94.598889,
 'Estable',
' <b>Kilometro: </b> 38+550 <br> <b>Condición:</b> Estable',
'<a class="hvr-bounce-to-right" onClick="justOne( 56 ,$(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],

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


