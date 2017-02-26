/**
 * Created by joseluissanchez-porrogodoy on 25/02/2017.
 */

"use strict";

var MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/cursonode',function (err,db) {
    if(err){
        console.log(err);
       return process.exit();
    }
    db.collection('agentes').find().toArray(function (err, docs) {
        if(err){
            console.log(err);
            return process.exit();
        }
        console.log(docs);
        db.close();
    })

});