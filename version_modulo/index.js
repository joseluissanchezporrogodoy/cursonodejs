/**
 * Created by joseluissanchez-porrogodoy on 24/2/17.
 */
"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function (moduleName, callBack) {

    var fichero = path.join('./node_modules',moduleName, 'package.json');

    fs.readFile(fichero,'utf8',function (err, data) {
      if(err){
          callBack(err);
          return;
      }
      // si no ha habido error
      //covierto contenido en objeto
        var packageJson;
        try {
            packageJson  = JSON.parse(data);
        }catch(e){
            callBack('error al parsear ' + fichero);
        }


        if(packageJson && !packageJson.version){
            callBack('no se encuentra la etiqueta version en ' + fichero);
            return;
        }
        // llamamos al allback de finalización
        callBack(null, packageJson.version);
    });

};

// Uso de la funcion

var modulo = 'chance';

versionModulo(modulo,function (err,version) {
    if(err){
        console.log('Hubo un error:', err);
        return;
    }

    console.log('Es la versión del módulo'+ modulo + ' es: '+ version );
});