// definimos un objeto de forma literal

var empleado = {
    nombre:"Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["pistola","rifle", "kunfu"]
};

console.log(empleado);

var serializado = JSON.stringify(empleado);

console.log(serializado);

//des-serializar el objeto
serializado = serializado +'}'

var leido;

try{
    leido = JSON.parse(serializado);
} catch (err) {
    console.log('No se pudo leer serializado');
}

if (typeof leido != 'undefined'){
    console.log('hay algo leido');
} else {
    console.log('no hay nada leido')
}


for (var i = 0; i < empleado.armas.length; i++ ){
    var arma = empleado.armas[i];
    console.log(empleado.nombre +(arma == 'kunfu' ? ' sabe ':' tiene ' )+ arma);
}








