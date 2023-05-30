var express = require('express');
var router = express.Router();
var Planta = require("../controllers/planta")

router.get('/plantas', function(req, res, next) {
  const especie = req.query.especie
  const implant = req.query.implant
  if(especie){
    Planta.getPlantasEspecie(especie)
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de plantas"})
    })
  }
  else if(implant){
    Planta.getPlantasImplant(implant)
    .then(plantas => {
      console.log(length(plantas))
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de plantas"})
    })
  }
  else{
    Planta.list()
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de plantas"})
    })
  }
  
});

router.get('/plantas/freguesias',function(req, res, next) {
  Planta.freguesias()
  .then(dados => res.json(dados))
  .catch(erro => res.status(601).res.json(erro))
});

router.get('/plantas/especies',function(req, res, next) {
  Planta.especies()
  .then(dados => res.json(dados))
  .catch(erro => res.status(601).res.json(erro))
});


router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
  .then(dados => res.json(dados))
  .catch(erro => res.status(601).res.json(erro))
});

router.delete('/plantas/:id', function(req, res) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na deleção de uma planta"})
    })
})


router.post('/plantas', function(req, res) {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de uma planta"})
    })
})



module.exports = router;
