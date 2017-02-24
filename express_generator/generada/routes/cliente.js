/**
 * Created by joseluissanchez-porrogodoy on 24/2/17.
 */
"use strict";

var express = require('express');
var router = express.Router();


router.get('/',function (req,res,next)   {
    console.log('req.query', req.query);
    res.send('respuesta a cliente');

});

router.get('/:id',function (req,res,next) {
    console.log(req.params);
   res.send('recibido parametro '+ req.params.id);
});

router.post('/', function(req,res,next){
    console.log('req.body',req.body);
    res.json({ recibido: req.body.num});
});
module.exports = router;