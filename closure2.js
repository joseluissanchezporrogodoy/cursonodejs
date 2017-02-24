/**
 * Created by joseluissanchez-porrogodoy on 24/2/17.
 */
"use strict";

function createAgente(nombre){
    var edad = 0;
    return {
        ponNombre: function(uevoNombre){
            nombre = nuevoNombre;
        },
        leerNombre: function () {
            return nombre;
        },
        ponEdad: function (nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function () {
            return edad;
        },
        escribe: function () {
            console.log('Soy ' +nombre+ ' y tengo '+ edad+ ' años');
        }
    }
}
// Creamos Agentes
var smith = createAgente('Smith');
smith.ponEdad(33);

var jones = createAgente('Jones');
jones.ponEdad(45);
console.log(smith.leerNombre() + ' '+ smith.leeEdad());
console.log(jones.leerNombre() + ' '+ jones.leeEdad());

setTimeout(smith.escribe,1000);