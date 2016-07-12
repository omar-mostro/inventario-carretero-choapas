
var map;
var gmarkers = [];
var currentScrollPosition;

   //locations array, contains the html to dsiplay the total info, the coordinates of all the services, a category to make the filter and a kilometer of the location service to display in the filter
    var locations = [
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/1.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE DOBLE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 0+080 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 35.409" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 56 19.032" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 44.58 m.s.n.m. </p>' +
     '</div>', 
     17.9098358333333, 
     -94.93862, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b>0 + 080 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(1)"> Mas Información.</a>' ],

    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/2.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE DOBLE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 0 + 080 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 36.8352" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 56 19.0068" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 45.80 m.s.n.m. </p>' +
     '</div>', 
     17.910232, 
     -94.938613, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b>0 + 080 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(2)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/3.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 0 + 725 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 36.4206" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 56.913" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 43.80 m.s.n.m. </p>' +
     '</div>', 
     17.9101168333333, 
     -94.9324758333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 0 + 725 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(3)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/4.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 0 + 725 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 38.1528" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 57.2628" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 42.60 m.s.n.m. </p>' +
     '</div>', 
      17.910598, 
     -94.932573, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 0 + 725 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(4)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/5.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 090 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 37.2378" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 44.7486" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 45.80 m.s.n.m. </p>' +
     '</div>', 
      17.9103438333333 
     -94.9290968333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 090 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(5)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/6.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 090 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA. </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.186" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 43.0494" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 44.60 m.s.n.m. </p>' +
     '</div>', 
      17.910885 
     -94.9286248333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 090 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(6)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/7.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 470 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 38.2032" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 31.2198" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 43.70 m.s.n.m. </p>' +
     '</div>', 
      17.910612, 
     -94.9253388333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 470 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(7)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/8.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 470 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 38.0334" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 31.0758" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 43.80 m.s.n.m. </p>' +
     '</div>', 
      17.9105648333333, 
     -94.9252988333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 470 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(8)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/9.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 590 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 38.5776" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 27.1308" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 42.50 m.s.n.m. </p>' +
     '</div>', 
      17.910716, 
      -94.924203, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 590 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(9)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/10.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 590 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.927" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 28.5564" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 42.10 m.s.n.m. </p>' +
     '</div>', 
      17.9110908333333, 
      -94.924599, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 590 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(10)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/11.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 980 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.4158" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 35.1834" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 47.50 m.s.n.m. </p>' +
     '</div>', 
      17.9109488333333, 
      -94.9264398333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 980 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(11)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/12.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 1 + 980 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description"> LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 41.0502" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 14.5626" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 48.80 m.s.n.m. </p>' +
     '</div>', 
      17.9114028333333, 
      -94.9207118333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 1 + 980 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(12)"> Mas Información.</a>' ],
        
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/13.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 030 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.1926"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 12.6366" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 41.50 m.s.n.m. </p>' +
     '</div>', 
      17.9108868333333, 
      -94.9201768333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 030 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(13)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/14.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 030 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 40.9788"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 55 12.9354" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 40.80 m.s.n.m. </p>' +
     '</div>', 
      17.911383, 
      -94.9202598333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 030 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(14)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/15.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 540 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.96"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 55.7598" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 39.40 m.s.n.m. </p>' +
     '</div>', 
      17.9111, 
      -94.9154888333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 540 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(15)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/16.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 540 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 39.9918"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 55.386" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.90 m.s.n.m. </p>' +
     '</div>', 
      17.9111088333333, 
      -94.915385, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 540 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(16)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/17.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 880 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 40.8846"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 44.535" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.80 m.s.n.m. </p>' +
     '</div>', 
      17.9113568333333, 
      -94.9123708333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 880 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(17)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/18.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 880 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 42.9006"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 44.4996" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.10 m.s.n.m. </p>' +
     '</div>', 
      17.9119168333333, 
      -94.912361, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 880 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(18)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/19.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 900 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 40.9602"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 43.3722" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.70 m.s.n.m. </p>' +
     '</div>', 
      17.9113778333333, 
      -94.9120478333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 900 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(19)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/20.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 2 + 900 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 42.9084"</p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 43.905" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 40.20 m.s.n.m. </p>' +
     '</div>', 
      17.911919, 
      -94.9121958333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 2 + 900 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(20)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/21.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 460 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 42.084" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 24.3828" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 39.80 m.s.n.m. </p>' +
     '</div>', 
      17.91169, 
      -94.906773, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 460 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(21)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/22.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 460 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 44.2794" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 24.2136" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 41.50 m.s.n.m. </p>' +
     '</div>', 
      17.9122998333333, 
      -94.906726, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 460 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(22)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/23.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 720 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE, PARA DETERMINAR SU ESTADO FISICO.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 42.7422" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 15.9006" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 45.80 m.s.n.m. </p>' +
     '</div>', 
      17.9118728333333, 
      -94.9044168333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 720 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(23)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/24.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 720 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE, PARA DETERMINAR SU ESTADO FISICO.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 44.262" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 16.0524" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 43.50 m.s.n.m. </p>' +
     '</div>', 
      17.912295, 
      -94.904459, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 720 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(24)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/25.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 940 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE, PARA DETERMINAR SU ESTADO FISICO.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 42.768" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 7.866" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 40.80 m.s.n.m. </p>' +
     '</div>', 
      17.91188, 
      -94.902185, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 940 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(25)"> Mas Información.</a>' ],
    
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/26.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 3 + 940 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE, PARA DETERMINAR SU ESTADO FISICO.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.3126" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 7.1748" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 39.20 m.s.n.m. </p>' +
     '</div>', 
      17.9125868333333 
      -94.901993, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 3 + 940 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(26)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/27.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 080 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA, REQUIERE LIMPIEZA.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.6114" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 6.9372" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 29.90 m.s.n.m. </p>' +
     '</div>', 
      17.9126698333333
      -94.901927, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 080 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(27)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/28.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 080 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA, REQUIERE LIMPIEZA.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.3666" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 3.819" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 30.10 m.s.n.m. </p>' +
     '</div>', 
      17.9126018333333,
      -94.9010608333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 080 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(28)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/29.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 230 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 43.6206" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 57.9654" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.50 m.s.n.m. </p>' +
     '</div>', 
      17.9121168333333,
      -94.8994348333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 230 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(29)"> Mas Información.</a>' ],
        
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/30.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 230 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 46.2312" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 54 0.3378" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 36.80 m.s.n.m. </p>' +
     '</div>', 
      17.912842,
      -94.9000938333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 230 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(30)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/31.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 508 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 44.4666" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 48.7392" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.40 m.s.n.m. </p>' +
     '</div>', 
     17.9123518333333,
      -94.896872, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 508 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(31)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/32.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 508 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.9102" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 49.0698" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.90 m.s.n.m. </p>' +
     '</div>', 
     17.9127528333333,
      -94.8969638333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 508 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(32)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/33.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 620 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.0864" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 45.765" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.40 m.s.n.m. </p>' +
     '</div>', 
     17.912524,
      -94.8960458333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 508 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(33)"> Mas Información.</a>' ],
    
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/34.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 620 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 46.5438" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 46.3914" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.80 m.s.n.m. </p>' +
     '</div>', 
     17.9129288333333,
      -94.8962198333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 620 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(34)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/35.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 635 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 44.6322" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 45.6246" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.20 m.s.n.m. </p>' +
     '</div>', 
     17.9123978333333,
      -94.8960068333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 620 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(35)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/36.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOZA </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 635 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 46.53" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 43.677" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 30.20 m.s.n.m. </p>' +
     '</div>', 
     17.912925,
      -94.8954658333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 635 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(36)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/37.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 825 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 44.7906" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 40.2534" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.50 m.s.n.m. </p>' +
     '</div>', 
     17.9124418333333,
      -94.8945148333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 825 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(37)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/38.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 825 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 46.926" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 39.6384" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.40 m.s.n.m. </p>' +
     '</div>', 
     17.913035,
      -94.894344, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 825 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(38)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/39.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 845 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> DERECHO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA, REQUIERE LIMPIEZA.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 45.2124" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 37.359" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.60 m.s.n.m. </p>' +
     '</div>', 
     17.912559,
      -94.8937108333333, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 845 <br> <b>Lado:</b> Derecho', 
     '<a class="hvr-bounce-to-right" onClick="justOne(39)"> Mas Información.</a>' ],
        
    ['<div id="fixedWindow">' +
     '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/40.JPG" alt="Imagen de Alcantarillas">' +
     '<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 0 + 000 al 5 + 000.</h4>' +
     '<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
     '<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description"> 4 + 845 </p>' +
     '<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
     '<h5 class="subTitle"> LADO </h5> <p class="description"> IZQUIERDO </p>' +
     '<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA, REQUIERE LIMPIEZA.</p>' +
     '<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17º 54 46.7094" </p>' +
     '<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94º 53 39.0948" </p>' +
     '<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 36.20 m.s.n.m. </p>' +
     '</div>', 
     17.9129748333333,
      -94.894193, 
     'Km 0+000 al 5+000', 
     ' <b>Kilometro: </b> 4 + 845 <br> <b>Lado:</b> Izquierdo', 
     '<a class="hvr-bounce-to-right" onClick="justOne(40)"> Mas Información.</a>' ],
  
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/41.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 45.4278</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 37.446 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.50 m.s.n.m. </p>' +
'</div>', 
17.913,
-94.894,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+040 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 41 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/42.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.5554</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 31.8834 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.80 m.s.n.m. </p>' +
'</div>', 
17.91320983,
-94.89218983,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+040 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 42 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/43.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 46.0218</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -945326.9838 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.80 m.s.n.m. </p>' +
'</div>', 
17.91278383,
-94.89082883,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+170 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 43 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/44.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.5662</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 26.16 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 36.40 m.s.n.m. </p>' +
'</div>', 
17.91321283,
-94.8906,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+170 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 44 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/45.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+225 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 46.3458</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 24.2844 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 31.90 m.s.n.m. </p>' +
'</div>', 
17.91287383,
-94.890079,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+225 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 45 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/46.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+225 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.8116</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 23.694 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.50 m.s.n.m. </p>' +
'</div>', 
17.913281,
-94.889915,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+225 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 46 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/47.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.9988</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 23.3946 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.90 m.s.n.m. </p>' +
'</div>', 
17.913333,
-94.88983183,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+260 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 47 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/48.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 48.1572</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 17.8254 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.60 m.s.n.m. </p>' +
'</div>', 
17.913377,
-94.88828483,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+260 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 48 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/49.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+420 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 46.5768</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 18.5526 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.00 m.s.n.m. </p>' +
'</div>', 
17.912938,
-94.88848683,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+420 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 49 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/50.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+420 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 48.1278</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 18.9198 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.70 m.s.n.m. </p>' +
'</div>', 
17.91336883,
-94.88858883,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+420 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 50 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/51.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 46.8606</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 16.0332 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 39.50 m.s.n.m. </p>' +
'</div>', 
17.91301683,
-94.887787,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+500 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 51 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/52.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 48.4482</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 16.533 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.90 m.s.n.m. </p>' +
'</div>', 
17.91345783,
-94.88792583,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+500 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 52 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/53.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+520 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 46.8318</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 13.5882 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 37.70 m.s.n.m. </p>' +
'</div>', 
17.91300883,
-94.88710783,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+520 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 53 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/54.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+520 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 48.4344</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 53 13.6962 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 385.00 m.s.n.m. </p>' +
'</div>', 
17.913454,
-94.88713783,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+520 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 54 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/55.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.35</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 54 47.35 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.70 m.s.n.m. </p>' +
'</div>', 
17.91315278,
-94.91315278,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+960 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 55 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/56.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">5+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 49.22</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 54 49.22 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.70 m.s.n.m. </p>' +
'</div>', 
17.91367222,
-94.91367222,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 5+960 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 56 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/57.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">6+160 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 47.77</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 52.95 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.10 m.s.n.m. </p>' +
'</div>', 
17.91326944,
-94.881375,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 6+160 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 57 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/58.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">6+160 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 49.22</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 53.27 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 29.40 m.s.n.m. </p>' +
'</div>', 
17.91367222,
-94.88146389,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 6+160 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 58 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/59.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENTRADA DOBLE TUVO, SALIDA UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">6+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 49.27</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 30.66 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 29.90 m.s.n.m. </p>' +
'</div>', 
17.91368611,
-94.87518333,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 6+840 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 59 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/60.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENTRADA DOBLE TUVO, SALIDA UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">6+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 51.0444</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 30.6078 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.00 m.s.n.m. </p>' +
'</div>', 
17.914179,
-94.87516883,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 6+840 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 60 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/61.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 50.9646</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 30.4134 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 34.90 m.s.n.m. </p>' +
'</div>', 
17.91415683,
-94.87511483,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+040 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 61 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/62.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 49.3086</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 23.5806 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.30 m.s.n.m. </p>' +
'</div>', 
17.91369683,
-94.87321683,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+040 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 62 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/63.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+380 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 50.4504</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 11.9742 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 33.70 m.s.n.m. </p>' +
'</div>', 
17.914014,
-94.86999283,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+380 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 63 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/64.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA ENSOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+380 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ENSOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 53.4456</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 11.1144 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 36.60 m.s.n.m. </p>' +
'</div>', 
17.914846,
-94.869754,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+380 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 64 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/65.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+640 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 52.7148</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 1.3224 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 40.20 m.s.n.m. </p>' +
'</div>', 
17.914643,
-94.867034,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+640 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 65 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/66.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+640 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 52.7286</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 52 1.2792 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 39.80 m.s.n.m. </p>' +
'</div>', 
17.91464683,
-94.86702203,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+640 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 66 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/67.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 53.5782</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 54.6408 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 38.00 m.s.n.m. </p>' +
'</div>', 
17.91488283,
-94.865178,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 67 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/68.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 54.1362</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 57.312 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.80 m.s.n.m. </p>' +
'</div>', 
17.91503783,
-94.86592,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 68 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/69.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+860 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 55.7058</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 53.4666 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 35.10 m.s.n.m. </p>' +
'</div>', 
17.91547383,
-94.86485183,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+860 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 69 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/70.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+860 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 53.3154</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 52.8372 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 32.20 m.s.n.m. </p>' +
'</div>', 
17.91480983,
-94.864677,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+860 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 70 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/71.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 53.7804</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 51.8796 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 31.20 m.s.n.m. </p>' +
'</div>', 
17.914939,
-94.864411,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+980 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 71 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/72.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">7+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 55.3716</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 52.3476 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 30.60 m.s.n.m. </p>' +
'</div>', 
17.915381,
-94.864541,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 7+980 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 72 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/73.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 56.2278</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 40.5246 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'</div>', 
17.91561883,
-94.86125683,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+290 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 73 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/74.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 57.3186</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 41.457 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.50 m.s.n.m. </p>' +
'</div>', 
17.91592183,
-94.86151583,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+290 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 74 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/75.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+345 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 56.9052</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 39.9594 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'</div>', 
17.915807,
-94.86109983,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+345 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 75 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/76.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+345 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 57.7578</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 40.5576 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.00 m.s.n.m. </p>' +
'</div>', 
17.91604383,
-94.861266,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+345 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 76 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/77.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 58.0026</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 32.0184 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.60 m.s.n.m. </p>' +
'</div>', 
17.91611183,
-94.858894,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 77 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/78.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">8+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 54 59.7528</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 32.7594 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.00 m.s.n.m. </p>' +
'</div>', 
17.916598,
-94.85909983,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 8+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 78 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/79.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 1.7106</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 15.5766 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.00 m.s.n.m. </p>' +
'</div>', 
17.91714183,
-94.85432683,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+060 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 79 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/80.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 3.3054</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 15.9732 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.30 m.s.n.m. </p>' +
'</div>', 
17.91758483,
-94.854437,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+060 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 80 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/81.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+660 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 4.908</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 51 5.094 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.91803,
-94.851415,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+660 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 81 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/82.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+660 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 7.773</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 56.4102 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.80 m.s.n.m. </p>' +
'</div>', 
17.91882583,
-94.84900283,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+660 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 82 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/83.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE DE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 7.8636</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 56.3706 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.60 m.s.n.m. </p>' +
'</div>', 
17.918851,
-94.84899183,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 83 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/84.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE DE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 8.6232</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 47.2482 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.20 m.s.n.m. </p>' +
'</div>', 
17.919062,
-94.84645783,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 84 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/85.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE DE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 8.7918</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 47.1546 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.60 m.s.n.m. </p>' +
'</div>', 
17.91910883,
-94.84643183,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 85 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/86.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo: Km 5 + 000 al 10 + 000.</h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">9+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE DE LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 9.6522</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 47.511 </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.60 m.s.n.m. </p>' +
'</div>', 
17.91934783,
-94.84653083,
 'Km 5+000 al 10+000',
' <b>Kilometro: </b> 9+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 86 )"> Mas Información.</a>' ],
   
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/87.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 10.3758"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 35.7972" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.20 m.s.n.m. </p>' +
'</div>', 
17.91954883,
-94.843277,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+260 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 87 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/88.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERVE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 11.8236"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 36.1536" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.919951,
-94.843376,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+260 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 88 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/89.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+325 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 12.2514"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 34.1766" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.40 m.s.n.m. </p>' +
'</div>', 
17.92006983,
-94.84282683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+325 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 89 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/90.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+325 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> I </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 10.7718"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 33.6978" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.00 m.s.n.m. </p>' +
'</div>', 
17.91965883,
-94.84269383,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+325 <br> <b>Lado:</b> I',
'<a class="hvr-bounce-to-right" onClick="justOne( 90 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/91.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 13.0218"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 24.2694" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.92028383,
-94.84007483,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+600 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 91 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/92.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 13.7748"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 26.6136" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.60 m.s.n.m. </p>' +
'</div>', 
17.920493,
-94.840726,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+600 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 92 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/93.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 14.4654"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 13.8516" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.80 m.s.n.m. </p>' +
'</div>', 
17.92068483,
-94.837181,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+960 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 93 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/94.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 15.8334"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 13.2396" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.80 m.s.n.m. </p>' +
'</div>', 
17.92106483,
-94.837011,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+960 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 94 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/95.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 15.8664"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 13.236" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.90 m.s.n.m. </p>' +
'</div>', 
17.921074,
-94.83701,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+960 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 95 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/96.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">10+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 16.3632"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 13.8582" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.50 m.s.n.m. </p>' +
'</div>', 
17.921212,
-94.83718283,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 10+960 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 96 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/97.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.5224"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 9.6426" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.70 m.s.n.m. </p>' +
'</div>', 
17.921534,
-94.83601183,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+060 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 97 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/98.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 16.6764"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 9.2826" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.921299,
-94.83591183,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+060 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 98 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/99.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 16.7082"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 9.2868" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.92130783,
-94.835913,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+060 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 99 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/100.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.544"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 9.603" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.10 m.s.n.m. </p>' +
'</div>', 
17.92154,
-94.83600083,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+060 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 100 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/101.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.241"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 3.9372" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.10 m.s.n.m. </p>' +
'</div>', 
17.92145583,
-94.834427,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+220 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 101 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/102.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.8386"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 4.0596" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.70 m.s.n.m. </p>' +
'</div>', 
17.92162183,
-94.834461,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+220 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 102 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/103.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.8026"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 4.002" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'</div>', 
17.92161183,
-94.834445,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+220 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 103 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/104.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 18.7032"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 4.0734" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.60 m.s.n.m. </p>' +
'</div>', 
17.921862,
-94.83446483,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+220 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 104 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/105.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+250 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 19.092"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 3.5988" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.50 m.s.n.m. </p>' +
'</div>', 
17.92197,
-94.834333,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+250 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 105 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/106.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+250 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 17.3568"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 50 3.159" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.90 m.s.n.m. </p>' +
'</div>', 
17.921488,
-94.83421083,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+250 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 106 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/107.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 19.8042"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 52.9242" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.70 m.s.n.m. </p>' +
'</div>', 
17.92216783,
-94.83136783,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 107 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/108.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 20.5464"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 52.4022" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.70 m.s.n.m. </p>' +
'</div>', 
17.922374,
-94.83122283,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 108 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/109.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 20.5464"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 52.4022" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.70 m.s.n.m. </p>' +
'</div>', 
17.922374,
-94.83122283,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 109 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/110.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">11+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 21.1506"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 52.3308" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.80 m.s.n.m. </p>' +
'</div>', 
17.92254183,
-94.831203,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 11+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 110 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/111.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+080 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 20.6688"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 52.0608" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.922408,
-94.831128,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+080 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 111 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/112.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+080 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 24.2106"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 35.13" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.00 m.s.n.m. </p>' +
'</div>', 
17.92339183,
-94.826425,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+080 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 112 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/113.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+080 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 24.1566"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 35.079" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.50 m.s.n.m. </p>' +
'</div>', 
17.92337683,
-94.82641083,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+080 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 113 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/114.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+080 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 25.0314"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 34.9962" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.50 m.s.n.m. </p>' +
'</div>', 
17.92361983,
-94.82638783,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+080 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 114 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/115.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+130 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 23.9772"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 32.9262" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.10 m.s.n.m. </p>' +
'</div>', 
17.923327,
-94.82581283,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+130 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 115 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/116.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+130 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 24.6822"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 33.1212" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'</div>', 
17.92352283,
-94.825867,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+130 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 116 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/117.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+130 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 24.6396"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 33.1926" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.80 m.s.n.m. </p>' +
'</div>', 
17.923511,
-94.82588683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+130 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 117 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/118.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+130 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 25.4166"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 33.0666" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.20 m.s.n.m. </p>' +
'</div>', 
17.92372683,
-94.82585183,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+130 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 118 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/119.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, LIGERAMENTE AGRIETADO EN CABEZAL</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 25.2336"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 27.0372" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.90 m.s.n.m. </p>' +
'</div>', 
17.923676,
-94.824177,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+340 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 119 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/120.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, LIGERAMENTE AGRIETADO EN CABEZAL</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 26.0718"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 27.1518" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'</div>', 
17.92390883,
-94.82420883,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+340 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 120 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/121.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, LIGERAMENTE AGRIETADO EN CABEZAL</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 25.9998"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 27.1338" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.20 m.s.n.m. </p>' +
'</div>', 
17.92388883,
-94.82420383,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+340 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 121 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/122.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, LIGERAMENTE AGRIETADO EN CABEZAL</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 26.7486"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 27.4044" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.40 m.s.n.m. </p>' +
'</div>', 
17.92409683,
-94.824279,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+340 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 122 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/123.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+820 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 28.7688"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 11.0712" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.40 m.s.n.m. </p>' +
'</div>', 
17.924658,
-94.819742,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+820 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 123 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/124.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+820 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 29.6616"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 10.4154" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.90 m.s.n.m. </p>' +
'</div>', 
17.924906,
-94.81955983,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+820 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 124 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/125.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+820 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 29.6616"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 10.4766" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.70 m.s.n.m. </p>' +
'</div>', 
17.924906,
-94.81957683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+820 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 125 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/126.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">12+820 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 30.3852"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 9.9726" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.80 m.s.n.m. </p>' +
'</div>', 
17.925107,
-94.81943683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 12+820 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 126 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/127.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 30.4104"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 9.969" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.00 m.s.n.m. </p>' +
'</div>', 
17.925114,
-94.81943583,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+190 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 127 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/128.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO RETIRO DE MATERIAL DE DESPERDICIO Y DESHIERVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 32.8542"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 49 0.0006" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.50 m.s.n.m. </p>' +
'</div>', 
17.92579283,
-94.81666683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+190 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 128 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/129.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+410 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.0774"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 51.4368" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.92585483,
-94.814288,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+410 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 129 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/130.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+410 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.6936"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 51.249" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.926026,
-94.81423583,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+410 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 130 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/131.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+410 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.8232"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 51.4902" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.926062,
-94.81430283,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+410 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 131 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/132.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+410 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.7772"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 51.5232" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.30 m.s.n.m. </p>' +
'</div>', 
17.926327,
-94.814312,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+410 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 132 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/133.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+480 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.7146"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 49.1904" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.40 m.s.n.m. </p>' +
'</div>', 
17.92603183,
-94.813664,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+480 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 133 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/134.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+480 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.3388"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 48.549" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.40 m.s.n.m. </p>' +
'</div>', 
17.926483,
-94.81348583,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+480 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 134 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/135.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+890 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.1302"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 35.157" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.70 m.s.n.m. </p>' +
'</div>', 
17.92670283,
-94.80976583,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+890 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 135 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/136.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+890 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA, PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.6644"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 35.3736" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.00 m.s.n.m. </p>' +
'</div>', 
17.927129,
-94.809826,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+890 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 136 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/137.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.0696"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 33.8724" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.30 m.s.n.m. </p>' +
'</div>', 
17.926686,
-94.809409,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+940 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 137 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/138.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE UN TUVO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">13+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.1238"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 33.6522" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.90 m.s.n.m. </p>' +
'</div>', 
17.92697883,
-94.80934783,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 13+940 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 138 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/139.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">14+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.1374"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 10.8246" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.50 m.s.n.m. </p>' +
'</div>', 
17.92670483,
-94.80300683,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+620 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 139 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/140.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 10+000 AL 15+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">14+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.9416"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 48 10.803" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.40 m.s.n.m. </p>' +
'</div>', 
17.927206,
-94.80300083,
 'KM 10+000 AL 15+000',
' <b>Kilometro: </b> 14+620 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 140 )"> Mas Información.</a>' ],
        
/******************************************Sección 4  *****************************/

['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/141.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+250 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE , LIMPIEZA Y DESAZOLVE , PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.652"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 48.8142" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.92657,
-94.796893,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+250 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 141 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/142.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+250 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE , LIMPIEZA Y DESAZOLVE , PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.182"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 48.8832" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.926995,
-94.796912,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+250 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 142 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/143.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.7162"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 36.8916" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.50 m.s.n.m. </p>' +
'</div>', 
17.926588,
-94.793581,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+620 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 143 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/144.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.3282"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 36.7002" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.90 m.s.n.m. </p>' +
'</div>', 
17.926758,
-94.793528,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+620 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 144 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/145.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.267"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 36.8664" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.90 m.s.n.m. </p>' +
'</div>', 
17.926741,
-94.793574,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+620 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 145 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/146.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+620 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.2714"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 36.531" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.30 m.s.n.m. </p>' +
'</div>', 
17.92702,
-94.793481,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+620 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 146 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/147.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.436"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 26.6352" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.92651,
-94.790732,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+960 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 147 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/148.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">15+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.987"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 25.296" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'</div>', 
17.926941,
-94.79036,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 15+960 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 148 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/149.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+160 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.202"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 18.528" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.20 m.s.n.m. </p>' +
'</div>', 
17.926445,
-94.78848,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+160 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 149 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/150.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+160 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.8394"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 16.2162" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'</div>', 
17.9269,
-94.787838,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+160 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 150 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/151.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+540 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.8558"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 5.5782" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.20 m.s.n.m. </p>' +
'</div>', 
17.926349,
-94.784883,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+540 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 151 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/152.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+540 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.501"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 5.5386" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.926806,
-94.784872,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+540 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 152 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/153.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+640 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.809"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 2.2914" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.926336,
-94.78397,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+640 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 153 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/154.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+640 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.2964"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 47 1.971" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.80 m.s.n.m. </p>' +
'</div>', 
17.926749,
-94.783881,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+640 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 154 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/155.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.3338"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 52.8126" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.70 m.s.n.m. </p>' +
'</div>', 
17.926204,
-94.781337,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 155 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/156.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.0508"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 52.521" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.926403,
-94.781256,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 156 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/157.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.1726"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 52.6038" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.926437,
-94.781279,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 157 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/158.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">16+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.12"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 52.6332" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.10 m.s.n.m. </p>' +
'</div>', 
17.9267,
-94.781287,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 16+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 158 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/159.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.1076"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 34.7232" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.80 m.s.n.m. </p>' +
'</div>', 
17.926141,
-94.776312,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+240 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 159 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/160.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.845"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 41.8944" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.926346,
-94.778304,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+240 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 160 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/161.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.9536"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 41.898" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.30 m.s.n.m. </p>' +
'</div>', 
17.926376,
-94.778305,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+240 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 161 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/162.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 36.0546"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 41.7936" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.926682,
-94.778276,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+240 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 162 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/163.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+540 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.3454"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 31.407" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.80 m.s.n.m. </p>' +
'</div>', 
17.926485,
-94.775391,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+540 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 163 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/164.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+540 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.3454"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 31.407" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.20 m.s.n.m. </p>' +
'</div>', 
17.926485,
-94.775391,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+540 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 164 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/165.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.15"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 26.39" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.50 m.s.n.m. </p>' +
'</div>', 
17.925875,
-94.773997,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 165 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/166.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.6044"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 26.2992" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.80 m.s.n.m. </p>' +
'</div>', 
17.926279,
-94.773972,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 166 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/167.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.3734"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 26.094" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.20 m.s.n.m. </p>' +
'</div>', 
17.926215,
-94.773915,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 167 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/168.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">17+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.3892"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 25.986" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.50 m.s.n.m. </p>' +
'</div>', 
17.926497,
-94.773885,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 17+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 168 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/169.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.279"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 5.1204" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'</div>', 
17.925911,
-94.768089,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+340 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 169 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/170.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.0278"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 4.7352" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.50 m.s.n.m. </p>' +
'</div>', 
17.926119,
-94.767982,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+340 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 170 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/171.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.0278"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 4.7352" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.40 m.s.n.m. </p>' +
'</div>', 
17.926119,
-94.767982,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+340 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 171 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/172.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+340 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.7808"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 4.2162" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.926328,
-94.767838,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+340 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 172 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/173.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+440 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.4662"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 2.859" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'</div>', 
17.925963,
-94.767461,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+440 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 173 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/174.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+440 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.0214"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 46 2.5428" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'</div>', 
17.926395,
-94.767373,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+440 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 174 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/175.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+570 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.2754"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 57.7578" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.40 m.s.n.m. </p>' +
'</div>', 
17.92591,
-94.766044,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+570 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 175 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/176.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+570 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.1646"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 56.7504" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.90 m.s.n.m. </p>' +
'</div>', 
17.926157,
-94.765764,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+570 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 176 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/177.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+570 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.9816"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 56.7288" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.10 m.s.n.m. </p>' +
'</div>', 
17.926106,
-94.765758,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+570 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 177 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/178.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+570 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.5246"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 55.3968" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.20 m.s.n.m. </p>' +
'</div>', 
17.926257,
-94.765388,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+570 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 178 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/179.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO SE RECOMIENDA DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 32.8152"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 43.6464" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.925782,
-94.762124,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+980 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 179 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/180.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">18+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO SE RECOMIENDA DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.5102"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 43.2642" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.40 m.s.n.m. </p>' +
'</div>', 
17.926253,
-94.762018,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 18+980 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 180 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/181.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+350 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 32.595"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 30.5598" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 12.70 m.s.n.m. </p>' +
'</div>', 
17.925721,
-94.758489,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+350 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 181 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/182.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+350 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.4236"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 30.366" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.70 m.s.n.m. </p>' +
'</div>', 
17.925951,
-94.758435,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+350 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 182 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/183.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+350 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 33.4236"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 30.366" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.70 m.s.n.m. </p>' +
'</div>', 
17.925951,
-94.758435,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+350 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 183 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/184.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+350 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.2084"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 30.5064" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.30 m.s.n.m. </p>' +
'</div>', 
17.926169,
-94.758474,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+350 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 184 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/185.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.7946"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 19.6374" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'</div>', 
17.926332,
-94.755455,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+760 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 185 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/186.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.7666"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 18.363" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.90 m.s.n.m. </p>' +
'</div>', 
17.926602,
-94.755101,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+760 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 186 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/187.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.9314"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 17.553" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.90 m.s.n.m. </p>' +
'</div>', 
17.92637,
-94.754876,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 187 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/188.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.806"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 17.4342" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.926335,
-94.754843,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 188 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/189.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.806"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 17.4342" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.926335,
-94.754843,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 189 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/190.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 15+000 AL 20+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">19+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 35.655"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 15.5412" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.90 m.s.n.m. </p>' +
'</div>', 
17.926571,
-94.754317,
 'KM 15+000 AL 20+000',
' <b>Kilometro: </b> 19+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 190 )"> Mas Información.</a>' ],
        
/*************************************** Sección 5 ***************************/
        
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/191.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+300 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 34.6404"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 45 16.5342" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.00 m.s.n.m. </p>' +
'</div>', 
17.926289,
-94.75459283,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+300 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 191 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/192.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+300 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 37.9632"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 59.7402" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 15.00 m.s.n.m. </p>' +
'</div>', 
17.927212,
-94.74992783,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+300 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 192 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/193.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 38.8812"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 41.9886" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.60 m.s.n.m. </p>' +
'</div>', 
17.927467,
-94.74499683,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 193 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/194.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 39.561"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 42.0576" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.90 m.s.n.m. </p>' +
'</div>', 
17.92765583,
-94.745016,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 194 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/195.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 39.5214"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 41.9526" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.90 m.s.n.m. </p>' +
'</div>', 
17.92764483,
-94.74498683,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 195 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/196.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">20+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 40.3458"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 42.0498" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 12.60 m.s.n.m. </p>' +
'</div>', 
17.92787383,
-94.74501383,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 20+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 196 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/197.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 41.2314"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 33.687" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.92811983,
-94.74269083,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+040 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 197 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/198.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 40.72"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 33.55" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.80 m.s.n.m. </p>' +
'</div>', 
17.92797778,
-94.74265278,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+040 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 198 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/199.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 40.51"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 33.55" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.60 m.s.n.m. </p>' +
'</div>', 
17.92791944,
-94.74265278,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+040 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 199 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/200.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+040 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 39.81"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 33.32" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.927725,
-94.74258889,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+040 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 200 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/201.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+560 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 42.1932"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 16.5696" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.70 m.s.n.m. </p>' +
'</div>', 
17.928387,
-94.737936,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+560 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 201 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/202.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+560 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y DESAZOLVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 43.896"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 16.3962" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.92886,
-94.73788783,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+560 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 202 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/203.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+750 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO SE RECOMIENDA LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 43.5066"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 7.7634" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.80 m.s.n.m. </p>' +
'</div>', 
17.92875183,
-94.73548983,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+750 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 203 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/204.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">21+750 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO SE RECOMIENDA LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 44.796"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 44 7.8246" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.30 m.s.n.m. </p>' +
'</div>', 
17.92911,
-94.73550683,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 21+750 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 204 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/205.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">22+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 47.1786"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 41.1744" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.92977183,
-94.728104,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 22+600 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 205 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/206.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">22+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 48.0354"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 41.0268" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.70 m.s.n.m. </p>' +
'</div>', 
17.93000983,
-94.728063,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 22+600 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 206 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/207.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">22+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 47.982"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 41.07" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'</div>', 
17.929995,
-94.728075,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 22+600 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 207 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/208.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">22+600 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 48.7776"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 40.7346" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.50 m.s.n.m. </p>' +
'</div>', 
17.930216,
-94.72798183,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 22+600 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 208 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/209.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+020 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 49.1946"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 27.4764" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.60 m.s.n.m. </p>' +
'</div>', 
17.93033183,
-94.724299,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+020 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 209 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/210.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+020 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 49.9728"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 27.5772" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.90 m.s.n.m. </p>' +
'</div>', 
17.930548,
-94.724327,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+020 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 210 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/211.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+020 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 49.8324"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 27.5556" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'</div>', 
17.930509,
-94.724321,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+020 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 211 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/212.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+020 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 50.6454"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 27.696" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.93073483,
-94.72436,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+020 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 212 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/213.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 50.4474"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 18.1446" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.20 m.s.n.m. </p>' +
'</div>', 
17.93067983,
-94.72170683,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+290 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 213 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/214.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.0672"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 18.2748" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.50 m.s.n.m. </p>' +
'</div>', 
17.930852,
-94.721743,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+290 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 214 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/215.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.0198"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 18.2418" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'</div>', 
17.93083883,
-94.72173383,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+290 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 215 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/216.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+290 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.729"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 18.6384" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'</div>', 
17.93103583,
-94.721844,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+290 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 216 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/217.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+430 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.8376"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 18.3246" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.50 m.s.n.m. </p>' +
'</div>', 
17.931066,
-94.72175683,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+430 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 217 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/218.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+430 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.8124"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 13.638" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.10 m.s.n.m. </p>' +
'</div>', 
17.931059,
-94.720455,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+430 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 218 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/219.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+430 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 51.672"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 13.7388" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'</div>', 
17.93102,
-94.720483,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+430 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 219 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/220.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+430 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA Y DESHIERVE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 52.5108"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 13.5372" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.40 m.s.n.m. </p>' +
'</div>', 
17.931253,
-94.720427,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+430 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 220 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/221.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+680 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 52.3158"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 4.713" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.93119883,
-94.71797583,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+680 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 221 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/222.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+680 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 53.9322"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 43 4.5768" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.80 m.s.n.m. </p>' +
'</div>', 
17.93164783,
-94.717938,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+680 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 222 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/223.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+900 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 53.3706"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 56.7282" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.50 m.s.n.m. </p>' +
'</div>', 
17.93149183,
-94.71575783,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+900 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 223 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/224.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+900 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 54.3252"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 56.7972" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.80 m.s.n.m. </p>' +
'</div>', 
17.931757,
-94.715777,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+900 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 224 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/225.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+900 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 54.2496"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 56.8584" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.00 m.s.n.m. </p>' +
'</div>', 
17.931736,
-94.715794,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+900 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 225 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/226.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">23+900 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 54.9228"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 56.9658" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.60 m.s.n.m. </p>' +
'</div>', 
17.931923,
-94.71582383,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 23+900 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 226 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/227.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 54.8394"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 48.0816" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.50 m.s.n.m. </p>' +
'</div>', 
17.93189983,
-94.713356,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+190 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 227 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/228.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 55.4556"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 47.9844" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.50 m.s.n.m. </p>' +
'</div>', 
17.932071,
-94.713329,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+190 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 228 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/229.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 55.4664"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 47.9478" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'</div>', 
17.932074,
-94.71331883,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+190 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 229 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/230.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+190 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 56.2188"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 48.1212" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'</div>', 
17.932283,
-94.713367,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+190 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 230 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/231.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 56.6652"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 34.5888" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.40 m.s.n.m. </p>' +
'</div>', 
17.932407,
-94.709608,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 231 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/232.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 57.4968"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 34.7652" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.50 m.s.n.m. </p>' +
'</div>', 
17.932638,
-94.709657,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 232 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/233.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 57.3096"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 34.7178" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.50 m.s.n.m. </p>' +
'</div>', 
17.932586,
-94.70964383,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 233 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/234.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 58.0974"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 34.635" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.80 m.s.n.m. </p>' +
'</div>', 
17.93280483,
-94.70962083,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 234 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/235.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 57.0534"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 31.071" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.30 m.s.n.m. </p>' +
'</div>', 
17.93251483,
-94.70863083,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+690 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 235 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/236.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 57.8634"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 31.0572" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.30 m.s.n.m. </p>' +
'</div>', 
17.93273983,
-94.708627,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+690 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 236 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/237.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 57.8022"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 31.0674" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.60 m.s.n.m. </p>' +
'</div>', 
17.93272283,
-94.70862983,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+690 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 237 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/238.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 20+000 AL 25+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">24+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 55 58.5834"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 31.1718" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.80 m.s.n.m. </p>' +
'</div>', 
17.93293983,
-94.70865883,
 'KM 20+000 AL 25+000',
' <b>Kilometro: </b> 24+690 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 238 )"> Mas Información.</a>' ],
        
/********************** Sección 6 ****************************/
        
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/239.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+420 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 3.771"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 7.3614" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'</div>', 
17.93438083,
-94.70204483,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+420 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 239 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/240.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+420 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 4.2396"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 42 7.6356" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.20 m.s.n.m. </p>' +
'</div>', 
17.934511,
-94.702121,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+420 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 240 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/241.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 8.4906"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 58.7832" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.80 m.s.n.m. </p>' +
'</div>', 
17.93569183,
-94.699662,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 241 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/242.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 9.0846"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 58.995" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.93585683,
-94.69972083,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 242 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/243.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 9.1788"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 58.9158" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.30 m.s.n.m. </p>' +
'</div>', 
17.935883,
-94.69969883,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 243 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/244.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">25+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 9.888"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 59.4492" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.80 m.s.n.m. </p>' +
'</div>', 
17.93608,
-94.699847,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 25+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 244 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/245.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 15.7554"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 47.7342" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.93770983,
-94.69659283,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+100 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 245 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/246.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 16.3026"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 48.3036" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.30 m.s.n.m. </p>' +
'</div>', 
17.93786183,
-94.696751,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+100 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 246 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/247.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 16.098"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 48.2994" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.10 m.s.n.m. </p>' +
'</div>', 
17.937805,
-94.69674983,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+100 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 247 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/248.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 16.7568"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 48.8466" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.30 m.s.n.m. </p>' +
'</div>', 
17.937988,
-94.69690183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+100 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 248 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/249.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  SEHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 21.1596"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 39.3324" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.939211,
-94.694259,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 249 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/250.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  SEHIERBE, LIMPIEZA Y DESAZOLVE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 22.3398"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 40.5594" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'</div>', 
17.93953883,
-94.69459983,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 250 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/251.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 26.6388"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 31.239" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.40 m.s.n.m. </p>' +
'</div>', 
17.940733,
-94.69201083,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+690 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 251 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/252.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+690 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETA EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 28.0032"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 32.2008" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.10 m.s.n.m. </p>' +
'</div>', 
17.941112,
-94.692278,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+690 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 252 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/253.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE  Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 33.0858"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 23.9166" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.70 m.s.n.m. </p>' +
'</div>', 
17.94252383,
-94.68997683,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+980 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 253 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/254.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE  Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 32.6364"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 23.391" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.80 m.s.n.m. </p>' +
'</div>', 
17.942399,
-94.68983083,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+980 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 254 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/255.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE  Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 32.9274"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 23.4918" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.30 m.s.n.m. </p>' +
'</div>', 
17.94247983,
-94.68985883,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+980 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 255 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/256.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">26+980 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE  Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 32.0352"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 23.2146" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.30 m.s.n.m. </p>' +
'</div>', 
17.942232,
-94.68978183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 26+980 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 256 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/257.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 33.111"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 23.9748" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.94253083,
-94.689993,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 257 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/258.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 40.4154"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 11.6586" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'</div>', 
17.94455983,
-94.68657183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 258 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/259.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 40.1814"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 11.652" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.30 m.s.n.m. </p>' +
'</div>', 
17.94449483,
-94.68657,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 259 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/260.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 40.887"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 11.9148" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.94469083,
-94.686643,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 260 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/261.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 47.076"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 59.9298" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.00 m.s.n.m. </p>' +
'</div>', 
17.94641,
-94.68331383,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 261 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/262.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 47.691"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 0.333" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.40 m.s.n.m. </p>' +
'</div>', 
17.94658083,
-94.68342583,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 262 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/263.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 47.652"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 0.2868" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.90 m.s.n.m. </p>' +
'</div>', 
17.94657,
-94.683413,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 263 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/264.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">27+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE GRIETAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 48.462"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 41 0.7944" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.946795,
-94.683554,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 27+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 264 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/265.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 57.6636"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 43.3272" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.949351,
-94.678702,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 265 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/266.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 59.2146"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 44.076" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.40 m.s.n.m. </p>' +
'</div>', 
17.94978183,
-94.67891,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 266 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/267.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE FRACTURAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 0.273"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 42.672" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.10 m.s.n.m. </p>' +
'</div>', 
17.95007583,
-94.67852,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+460 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 267 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/268.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE FRACTURAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 59.5212"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 42.1134" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 23.80 m.s.n.m. </p>' +
'</div>', 
17.949867,
-94.67836483,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+460 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 268 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/269.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE FRACTURAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 59.6436"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 42.2358" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 24.00 m.s.n.m. </p>' +
'</div>', 
17.949901,
-94.67839883,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+460 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 269 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/270.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE, LIMPIEZA Y REPARACION DE FRACTURAS EN CABEZOTE</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 56 59.0496"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 41.7648" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'</div>', 
17.949736,
-94.678268,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+460 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 270 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/271.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 4.6692"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 33.4086" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.80 m.s.n.m. </p>' +
'</div>', 
17.951297,
-94.67594683,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+760 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 271 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/272.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 4.9572"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 33.5208" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.00 m.s.n.m. </p>' +
'</div>', 
17.951377,
-94.675978,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+760 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 272 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/273.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 5.13"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 33.6282" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.50 m.s.n.m. </p>' +
'</div>', 
17.951425,
-94.67600783,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+760 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 273 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/274.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+760 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 5.7312"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 34.3884" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.951592,
-94.676219,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+760 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 274 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/275.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 6.069"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 30.7164" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.00 m.s.n.m. </p>' +
'</div>', 
17.95168583,
-94.675199,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+840 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 275 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/276.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 6.7062"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 31.317" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.50 m.s.n.m. </p>' +
'</div>', 
17.95186283,
-94.67536583,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+840 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 276 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/277.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 6.5154"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 31.2312" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.70 m.s.n.m. </p>' +
'</div>', 
17.95180983,
-94.675342,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+840 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 277 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/278.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">28+840 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 7.398"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 30.5466" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 15.10 m.s.n.m. </p>' +
'</div>', 
17.952055,
-94.67515183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 28+840 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 278 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/279.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 13.9314"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 18.8832" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.20 m.s.n.m. </p>' +
'</div>', 
17.95386983,
-94.671912,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+260 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 279 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/280.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 14.4462"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 19.4376" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.80 m.s.n.m. </p>' +
'</div>', 
17.95401283,
-94.672066,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+260 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 280 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/281.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 14.457"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 19.4658" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.10 m.s.n.m. </p>' +
'</div>', 
17.95401583,
-94.67207383,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+260 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 281 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/282.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+260 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 15.0186"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 19.758" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.95417183,
-94.672155,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+260 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 282 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/283.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+530 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 14.976"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 19.8408" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
17.95416,
-94.672178,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+530 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 283 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/284.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+530 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 19.0944"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 12.198" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.20 m.s.n.m. </p>' +
'</div>', 
17.955304,
-94.670055,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+530 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 284 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/285.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+530 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 19.0866"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 12.1368" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.60 m.s.n.m. </p>' +
'</div>', 
17.95530183,
-94.670038,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+530 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 285 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/286.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+530 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 19.4544"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 12.648" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.40 m.s.n.m. </p>' +
'</div>', 
17.955404,
-94.67018,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+530 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 286 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/287.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 22.266"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 5.862" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.00 m.s.n.m. </p>' +
'</div>', 
17.956185,
-94.668295,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+740 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 287 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/288.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 22.7628"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 6.3906" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.20 m.s.n.m. </p>' +
'</div>', 
17.956323,
-94.66844183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+740 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 288 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/289.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 22.7124"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 6.51" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.10 m.s.n.m. </p>' +
'</div>', 
17.956309,
-94.668475,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+740 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 289 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/290.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 2 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 23.403"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 6.945" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 13.30 m.s.n.m. </p>' +
'</div>', 
17.95650083,
-94.66859583,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+740 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 290 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/291.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 3 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 23.2374"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 4.1952" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 12.20 m.s.n.m. </p>' +
'</div>', 
17.95645483,
-94.667832,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 291 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/292.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 3 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 23.9358"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 4.4466" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 12.00 m.s.n.m. </p>' +
'</div>', 
17.95664883,
-94.66790183,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 292 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/293.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 3 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 23.8854"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 4.4322" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 11.70 m.s.n.m. </p>' +
'</div>', 
17.95663483,
-94.66789783,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 293 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/294.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 25+000 AL 30+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> 3 TUBOS </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">29+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 24.8292"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 40 5.2536" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 10.00 m.s.n.m. </p>' +
'</div>', 
17.956897,
-94.668126,
 'KM 25+000 AL 30+000',
' <b>Kilometro: </b> 29+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 294 )"> Mas Información.</a>' ],
/*************************** Sección 7 *******************/
        
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/295.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 28.2558"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 56.6352" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'</div>', 
17.95784883,
-94.665732,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+060 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 295 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/296.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+060 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 29.6028"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 57.8586" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.80 m.s.n.m. </p>' +
'</div>', 
17.958223,
-94.66607183,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+060 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 296 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/297.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 29.4552"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 57.8442" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 10.00 m.s.n.m. </p>' +
'</div>', 
17.958182,
-94.66606783,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+170 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 297 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/298.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 30.9492"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 54.0102" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 9.30 m.s.n.m. </p>' +
'</div>', 
17.9585945,
-94.66500283,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+170 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 298 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/299.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 30.8802"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 53.838" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 9.10 m.s.n.m. </p>' +
'</div>', 
17.95857783,
-94.664955,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+170 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 299 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/300.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+170 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 31.8204"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 54.0354" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 12.30 m.s.n.m. </p>' +
'</div>', 
17.958839,
-94.66500983,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+170 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 300 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/301.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 39.72"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 38.67" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.40 m.s.n.m. </p>' +
'</div>', 
17.96103333,
-94.66074167,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 301 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/302.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 40.5318"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 38.8938" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 28.10 m.s.n.m. </p>' +
'</div>', 
17.96125883,
-94.66080383,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 302 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/303.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 40.5354"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 38.9124" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 26.10 m.s.n.m. </p>' +
'</div>', 
17.96125983,
-94.660809,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 303 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/304.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 41.1984"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 39.4878" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 27.20 m.s.n.m. </p>' +
'</div>', 
17.961444,
-94.66096883,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 304 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/305.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 44.1972"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 32.5656" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.70 m.s.n.m. </p>' +
'</div>', 
17.962277,
-94.66487933,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 305 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/306.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 44.4456"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 32.9214" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.60 m.s.n.m. </p>' +
'</div>', 
17.962346,
-94.65914483,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 306 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/307.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 44.4918"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 32.9508" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.96235883,
-94.659153,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+920 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 307 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/308.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">30+920 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 45.0468"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 33.4038" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.80 m.s.n.m. </p>' +
'</div>', 
17.962513,
-94.65927883,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 30+920 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 308 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/309.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 48.9996"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 24.6882" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.40 m.s.n.m. </p>' +
'</div>', 
17.963611,
-94.65685783,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+220 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 309 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/310.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 49.6368"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 25.0554" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.30 m.s.n.m. </p>' +
'</div>', 
17.963788,
-94.65695983,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+220 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 310 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/311.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 49.593"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 25.0158" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'</div>', 
17.96377583,
-94.65694883,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+220 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 311 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/312.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+220 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 50.1984"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 25.1958" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'</div>', 
17.963944,
-94.65699883,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+220 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 312 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/313.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 53.8878"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 17.2656" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.70 m.s.n.m. </p>' +
'</div>', 
17.96496883,
-94.654796,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+460 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 313 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/314.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+460 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO, SE RECOMIENDA DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 57 54.9396"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 18.2082" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.10 m.s.n.m. </p>' +
'</div>', 
17.965261,
-94.65505783,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+460 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 314 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/315.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 2.3268"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 3.816" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.20 m.s.n.m. </p>' +
'</div>', 
17.967313,
-94.65106,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+940 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 315 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/316.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 3.0216"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 4.1724" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.90 m.s.n.m. </p>' +
'</div>', 
17.967506,
-94.651159,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+940 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 316 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/317.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 2.9922"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 4.2726" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.80 m.s.n.m. </p>' +
'</div>', 
17.96749783,
-94.65118683,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+940 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 317 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/318.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">31+940 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 2.9922"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 39 4.2726" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.40 m.s.n.m. </p>' +
'</div>', 
17.96749783,
-94.65118683,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 31+940 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 318 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/319.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">32+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 11.298"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 47.3886" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 15.90 m.s.n.m. </p>' +
'</div>', 
17.969805,
-94.64649683,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+500 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 319 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/320.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">32+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 12.4854"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 47.8926" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.20 m.s.n.m. </p>' +
'</div>', 
17.97013483,
-94.64663683,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 32+500 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 320 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/321.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">33+520 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 26.5368"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 16.62" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 179.00 m.s.n.m. </p>' +
'</div>', 
17.974038,
-94.63795,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+520 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 321 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/322.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">33+520 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA </p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 27.4836"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 17.7066" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.90 m.s.n.m. </p>' +
'</div>', 
17.974301,
-94.63825183,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+520 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 322 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/323.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">33+560 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 27.3468"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 15.4032" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.90 m.s.n.m. </p>' +
'</div>', 
17.974263,
-94.637612,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+560 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 323 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/324.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">33+560 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA EN BUEN ESTADO.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 28.5126"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 38 15.957" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'</div>', 
17.97458683,
-94.63776583,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 33+560 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 324 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/325.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ASOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE  PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 39.90"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 49.72" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.40 m.s.n.m. </p>' +
'</div>', 
17.97775,
-94.63047778,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 325 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/326.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ASOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE  PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 41.358"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 50.4078" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.10 m.s.n.m. </p>' +
'</div>', 
17.978155,
-94.6473355,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 326 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/327.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ASOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE  PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 40.7136"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 49.9728" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.977976,
-94.630548,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+400 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 327 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/328.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+400 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA ASOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE  PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 41.358"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 50.4078" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.10 m.s.n.m. </p>' +
'</div>', 
17.978155,
-94.63066883,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+400 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 328 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/329.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+670 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 44.1726"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 41.6064" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 20.20 m.s.n.m. </p>' +
'</div>', 
17.97893683,
-94.628224,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+670 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 329 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/330.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+670 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 45.9402"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 41.034" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.70 m.s.n.m. </p>' +
'</div>', 
17.97942783,
-94.628065,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+670 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 330 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/331.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+990 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA, Y RETIRO DE MATERIAL PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 47.9202"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 34.23" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.70 m.s.n.m. </p>' +
'</div>', 
17.97997783,
-94.626175,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+990 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 331 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/332.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 30+000 AL 35+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">34+990 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA, Y RETIRO DE MATERIAL PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 49.9974"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 33.42" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 25.50 m.s.n.m. </p>' +
'</div>', 
17.98055483,
-94.62595,
 'KM 30+000 AL 35+000',
' <b>Kilometro: </b> 34+990 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 332 )"> Mas Información.</a>' ],
        
        
/********************** Sección 8 *******************/
        
['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/333.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">35+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 56.5926"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 16.4526" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.10 m.s.n.m. </p>' +
'</div>', 
17.98238683,
-94.62123683,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+500 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 333 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/334.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">35+500 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">ALCANTARILLA AZOLVADA EN SU TOTALIDAD, REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE, LIMPIEZA Y DESAZOLVE PARA DETERMINAR SU ESTADO FISICO</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 58 58.569"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 37 16.7766" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 21.70 m.s.n.m. </p>' +
'</div>', 
17.98293583,
-94.62132683,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+500 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 334 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/335.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">35+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 11.997"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 43.7508" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.20 m.s.n.m. </p>' +
'</div>', 
17.98666583,
-94.612153,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+580 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 335 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/336.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">35+580 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 13.5348"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 44.6904" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 22.60 m.s.n.m. </p>' +
'</div>', 
17.987093,
-94.612414,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 35+580 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 336 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/337.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA AZOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA Y DESHIERBE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 5.2368"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 58.755" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.90 m.s.n.m. </p>' +
'</div>', 
17.984788,
-94.61632083,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+100 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 337 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/338.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA AZOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA Y DESHIERBE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 6.0138"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 58.6398" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.20 m.s.n.m. </p>' +
'</div>', 
17.98500383,
-94.61628883,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+100 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 338 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/339.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA AZOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA Y DESHIERBE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 6.0036"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 58.5432" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.90 m.s.n.m. </p>' +
'</div>', 
17.985001,
-94.616262,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+100 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 339 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/340.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA AZOLVADA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+100 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO LIMPIEZA Y DESHIERBE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 7.1232"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 58.2804" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 14.50 m.s.n.m. </p>' +
'</div>', 
17.985312,
-94.616189,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+100 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 340 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/341.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 14.6358"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 39.1176" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.60 m.s.n.m. </p>' +
'</div>', 
17.98739883,
-94.610866,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+740 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 341 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/342.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 15.3306"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 39.2004" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.00 m.s.n.m. </p>' +
'</div>', 
17.98759183,
-94.610889,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+740 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 342 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/343.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 15.2268"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 39.1932" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.20 m.s.n.m. </p>' +
'</div>', 
17.987563,
-94.610887,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+740 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 343 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/344.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">36+740 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 15.8382"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 39.6648" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'</div>', 
17.98773283,
-94.611018,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 36+740 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 344 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/345.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 15.522"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 37.7058" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.10 m.s.n.m. </p>' +
'</div>', 
17.98765333,
-94.61047383,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+240 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 345 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/346.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> P.S.G. </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+240 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 24.0684"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 24.2958" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.30 m.s.n.m. </p>' +
'</div>', 
17.990019,
-94.60674883,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+240 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 346 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/347.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+280 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 24.1506"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 23.0868" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.70 m.s.n.m. </p>' +
'</div>', 
17.99004183,
-94.606413,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+280 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 347 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/348.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+280 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 24.756"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 23.5296" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 19.10 m.s.n.m. </p>' +
'</div>', 
17.99021,
-94.606536,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+280 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 348 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/349.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+280 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 24.8958"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 23.7666" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.80 m.s.n.m. </p>' +
'</div>', 
17.99024883,
-94.60660183,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+280 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 349 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/350.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+280 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 25.2954"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 23.9796" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.70 m.s.n.m. </p>' +
'</div>', 
17.99035983,
-94.606661,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+280 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 350 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/351.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+720 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 24.7338"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 23.3022" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.40 m.s.n.m. </p>' +
'</div>', 
17.99020383,
-94.60647283,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+720 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 351 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/352.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+720 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 34.98"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 13.8774" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.30 m.s.n.m. </p>' +
'</div>', 
17.99305,
-94.60385483,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+720 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 352 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/353.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA DOBLE </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 40.8048"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 7.0956" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.994668,
-94.601971,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+960 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 353 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/354.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> LOSA DOBLE </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">37+960 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> AMBOS </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 41.28"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 9.3126" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
'</div>', 
17.9948,
-94.60258683,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 37+960 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 354 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/355.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOSA Y TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+090 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 43.44"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 4.6836" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.80 m.s.n.m. </p>' +
'</div>', 
17.9954,
-94.601301,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+090 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 355 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/356.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOSA Y TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+090 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 44.2458"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 5.2164" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.50 m.s.n.m. </p>' +
'</div>', 
17.99562383,
-94.601449,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+090 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 356 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/357.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> ALCANTARILLA DE LOSA Y TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+090 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 44.6706"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 36 5.6082" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
'</div>', 
17.99574183,
-94.60155783,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+090 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 357 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/358.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, DESHIERBE Y RETIRO DE MATERIAL DEL ARRASTRE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 57.8256"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 52.7748" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
'</div>', 
17.999396,
-94.597993,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 358 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/359.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, DESHIERBE Y RETIRO DE MATERIAL DEL ARRASTRE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 57.9228"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 53.1744" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.20 m.s.n.m. </p>' +
'</div>', 
17.999423,
-94.598104,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 359 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/360.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, DESHIERBE Y RETIRO DE MATERIAL DEL ARRASTRE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 58.0344"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 53.4546" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.30 m.s.n.m. </p>' +
'</div>', 
17.999454,
-94.59818183,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+700 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 360 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/361.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+700 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  LIMPIEZA, DESHIERBE Y RETIRO DE MATERIAL DEL ARRASTRE.</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 17 59 58.3794"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 54.2292" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 18.00 m.s.n.m. </p>' +
'</div>', 
17.99954983,
-94.598397,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+700 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 361 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/362.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 18 0 1.713"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 49.3614" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.00 m.s.n.m. </p>' +
'</div>', 
18.00047583,
-94.59704483,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 362 )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/363.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> A </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 18 0 2.3574"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 49.923" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.20 m.s.n.m. </p>' +
 '<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00065483,
-94.59720083,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 363, $(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/364.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Derecho </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 18 0 2.2638"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 49.8516" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 17.80 m.s.n.m. </p>' +
 '<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.00062883,
-94.597181,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+800 <br> <b>Lado:</b> Derecho',
'<a class="hvr-bounce-to-right" onClick="justOne( 364, $(\'#infowindow\').scrollTop() )"> Mas Información.</a>' ],


['<div id="fixedWindow">' +
 '<img src="img/Alcantarillas/ALCANTARILLASCPOAYB0-5/365.JPG" alt="Imagen de Alcantarillas">' +
'<h4 class="fixedWindowTitle titleAlcantarillas">Relación de Alcantarillas Subtramo:KM 35+000 AL 40+000 </h4>' +
'<h5 class="subTitle"> TIPO </h5> <p class="description"> TUBO </p>' +
'<h5 class="subTitle"> CADENAMIENTO </h5> <p class="description">38+800 </p>' +
'<h5 class="subTitle"> CUERPO </h5> <p class="description"> B </p>' +
'<h5 class="subTitle"> LADO </h5> <p class="description"> Izquierdo </p>' +
'<h5 class="subTitle"> CONDICIÓN </h5> <p class="description">LA ALCANTARILLA REQUIERE TRABAJOS DE MANTENIMIENTO, COMO  DESHIERBE Y LIMPIEZA</p>' +
'<h5 class="subTitle"> LATITUD_INI </h5> <p class="description"> 18 0 2.8296"</p>' +
'<h5 class="subTitle"> LONGITUD_INI </h5> <p class="description"> -94 35 50.4918" </p>' +
'<h5 class="subTitle"> ALTITUD </h5> <p class="description"> 16.80 m.s.n.m. </p>' +
'<a class="hvr-bounce-to-right" onClick="back()"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Regresar.</a>'+
'</div>', 
18.000786,
-94.59735883,
 'KM 35+000 AL 40+000',
' <b>Kilometro: </b> 38+800 <br> <b>Lado:</b> Izquierdo',
'<a class="hvr-bounce-to-right" onClick="justOne( 365, $(\'#infowindow\').scrollTop() )"> Mas Información.</a>']
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
        strokeColor: '#563614',
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

    var fullList = "";
    var servicesCounter = 1;

    for (i = 0; i < locations.length; i++) {
        marker = gmarkers[i]; //here we pass all the markers then we only show the selected one
        // If is same category or category not picked
        // console.log(gmarkers[i]);


        if (locations[i][3] == category && category.length != 0) {
            marker.setVisible(true);
             fullList += "<div class='squareInfo borderSquareInfoAlcantarillas'>"+ "<div class ='titleSquareInfo'>"+locations[i][3] + " " +  "#"+servicesCounter+ "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
            servicesCounter++;
             map.setZoom(10);

        } else if (category == "all") {

            marker.setVisible(true);
            fullList += "<div class='squareInfo borderSquareInfoAlcantarillas'>"+ "<div class ='titleSquareInfo'>"+locations[i][3] + " " +  "#"+servicesCounter + "</div>" + "Kilometro: " + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
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

            fullList += "<div class='squareInfo borderSquareInfoAlcantarillas'>"+ "<div class ='titleSquareInfo'>"+locations[i][3] + " " + "#"+servicesCounter + "</div>" + locations[i][4] +  "<br>" + locations[i][5] +"</div>";
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
    var e = document.getElementById("select-all");
    var selectValue = e.options[e.selectedIndex].value;
    //end

    //console.log(selectValue);
    map.setZoom(10);


    for (i = 0; i < locations.length; i++) {
        if (locations[i][3] == selectValue) {

            fullList += "<div class='squareInfo borderSquareInfoAlcantarillas'>" + "<div class ='titleSquareInfo'>" + locations[i][3] + " " + "#" + servicesCounter + "</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;
        }
        //this else is to show all the info 
        else if (selectValue == "all"){
            
            fullList += "<div class='squareInfo borderSquareInfoAlcantarillas'>" + "<div class ='titleSquareInfo'>" + locations[i][3] + " " + "#" + servicesCounter + "</div>" + locations[i][4] + "<br>" + locations[i][5] + "</div>";
            servicesCounter++;
            
        }
    }
  

    $('#displayInfo').html(fullList);
    $( "#infowindow" ).scrollTop( currentScrollPosition );
    currentScrollPosition = 0;


}


