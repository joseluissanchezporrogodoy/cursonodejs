
// una función básica

function funcionBasica(){
    console.log('Función Básica se ejecutó');
}

funcionBasica();


// función como declaración, con argumentos y retorno

function suma(a,b) {

    return a+b;
}

console.log(suma(10,15));

// función como expresión

var multiplica = function(a,b){
  return a*b;
};

console.log(multiplica(10,15));

var lang = 'es';

function accesoContexto(){
    console.log('en el contexto superior:',lang);
}

accesoContexto();

//  método de un objeto

var agente = {
    nombre:'Smith',
    saluda: function () {
        console.log('Hola xavá '+ this.nombre);
    }
};

agente.saluda();

// Constructor de objetos

function Fruta(nombre){
    this.getNombre = function () {
        return nombre;
    };
    this.setNombre = function (valor) {
        nombre = valor;
    }
}

// Crear un objeto fruta

var limon = new Fruta('Citrus Limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('manzana');
console.log(limon.getNombre());






















