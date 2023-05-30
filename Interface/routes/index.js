var express = require('express');
var router = express.Router();
var axios = require('axios');
var env = require('../config/env')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(env.apiAccessPoint+"/plantas")
    .then(response => {
      res.render('plantas', { plantas: response.data});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

router.get('/planta/:id', function(req, res, next) {
  axios.get(env.apiAccessPoint+"/plantas/"+req.params.id)
    .then(response => {
      res.render('planta', { planta: response.data});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

router.get('/especie/:especie/:nomeCientif', function(req, res, next) {
  axios.get(env.apiAccessPoint+"/plantas?especie="+req.params.especie)
    .then(response => {
      res.render('especie', { plantas: response.data,especie:req.params.especie,nomeC:req.params.nomeCientif});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});




module.exports = router;
