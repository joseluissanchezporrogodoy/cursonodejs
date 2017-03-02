/**
 * Created by joseluissanchez-porrogodoy on 26/02/2017.
 */
//Este es el módulo de conexión
"use strict";

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error',function (err) {
    console.log(err);
});

db.once('open',function(){
    console.info('Conectado a mongodb');
});
mongoose.connect('mongodb://localhost/cursonode')