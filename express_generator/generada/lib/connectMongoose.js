/**
 * Created by joseluissanchez-porrogodoy on 26/02/2017.
 */
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