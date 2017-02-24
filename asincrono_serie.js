"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback){

    setTimeout(function (){
            console.log(texto);
            callback();
        }, 1000
    );
}

// bucle asíncrono en serie

// llamar a una función N veces en serie,
// al finalizar llamar al callback de finalización

function serie(n, func, callbackFin){
    if(n == 0){
        callbackFin();
        return;
    }
    n--;
    func(n,function () {
        serie(n,func,callbackFin);
    })

}

serie(5, escribeTras2Segundos,function () {
    console.log('He terminado');
});