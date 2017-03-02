/**
 * Created by joseluissanchez-porrogodoy on 01/03/2017.
 */

'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

/// recuperar lista de agentes
router.get('/', function (req, res, next) {

    var name = req.query.name;
    var age = req.query.age;

    var limit = parseInt(req.query.limit) || null;
    var skip = parseInt(req.query.skip) || null;
    var fields = req.query.fields || null; // para mas de un campo separar con espacio la quer ...?fields = age name
    var sort = req.query.sort || null;


    var filter = {};

    if(name){
        filter.name = name;
    }

    if(typeof age !== 'undefined'){
        filter.age = age;
        console.log('eje');
    }

    Agente.list(filter,limit,skip,fields,sort,function (err,list) {
       if (err){
           next(err);
           return;
       }

       res.json({ok: true , list:list});
    });

});

/// actualizar un agente

router.post('/', function (req, res, next) {

    console.log(req.body);
    var agente = new Agente(req.body);
    agente.save(function (err,agenteGuardado) {
       if(err){
           return next(err);
       }
       res.json({ok: true, agente: agenteGuardado});

    });
});

/// crear un agente
router.put('/:id', function (req,res,next) {
    var  id = req.params.id;
    Agente.update({_id: id}, req.body,function (err, agente) {
        if(err){
            return next(err);
        }
        res.json({ok: true, agente: agente});
    });

});

/// borrar un agente
router.delete('/:id', function (req,res,next) {
    var  id = req.params.id;
    Agente.remove({_id: id}, function (err, result) {
        console.log(err);
        if(err){

            return next(err);
        }
        res.json({ok: true, result: result});
    });

});

module.exports = router;