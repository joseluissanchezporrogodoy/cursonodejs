/**
 * Created by joseluissanchez-porrogodoy on 24/2/17.
 */
"use strict";

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('llamar telefono', sonarTelefono);
myEmitter.on('llamar telefono', vibrarTeléfono);
function sonarTelefono(quien) {
    if(quien === 'madre'){
        return;
    }
    console.log('ring ring ring');
}

function vibrarTeléfono() {
    console.log('br br br');

}

myEmitter.emit('llamar telefono','madre');