var numero = 1;

console.log(numero);
console.log(typeof (numero));

numero = 'Hola';
console.log(typeof (numero));


//strings

console.log("texto de prueba".split(' '))
var textoLargo =
    'Linea1\n' +
        'Linea 2\n';
console.log(textoLargo);

var textolargo1 = ['linea1','linea2'].join('\n');
console.log(textolargo1);

var objeto = {
    numero: 1,
    texto: 'hola',
    sumaDos: function(v){
      return v + 2;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));

// array

var array = [1,'hola', function(v){
    return v +2
} , {valor:'hola'}];
console.log(array);
console.log(array[2](500));

//hoisting

var x = 100;
function y() {

    if(x ==20){
        var x = 30;
    }
    return x
}

console.log(x, y());
