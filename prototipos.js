/**
 * Created by joseluissanchez-porrogodoy on 24/2/17.
 */
'use strict';

function  Persona(nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function () {
    console.log('Hola me llamo ' + this.name);
}

console.log(persona.name);

persona.saluda();

// --------------------- Heredando de Persona ------------------------

function Agente(nombre) {
    Persona.call(this, nombre);
    // esto ejecuta el constructor de persona con el this del agente definiendo en el this del
    // agente una propiedad name y asignandole el parámetro recibido
}

// le asignamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Smith');

agente.saluda();


console.log(
    Object.getPrototypeOf(agente),
    agente instanceof  Agente,
    agente instanceof  Persona,
    agente instanceof  Object
);


// ----------------------- Herencia Múltiple --------------------------

function Superheroe(){
    this.vuela = function () {
        console.log(this.name + ' vuela');
    };
    this.esquivaBalas = function () {
        console.log(this.name + ' esquiva Balas');
    }
}
Object.assign(Agente.prototype, new Superheroe());
agente.vuela();
agente.esquivaBalas();





























