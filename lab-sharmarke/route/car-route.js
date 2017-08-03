'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Car = require('../model/car.js');
const carRouter = module.exports = new Router();
const debug = require('debug')('car:car-router');

carRouter.post('/api/car', jsonParser, function(req, res, next) {
  debug('POST: /api/car');
  req.body.timestamp = new Date();
  new Car(req.body).save()
  .then( car => res.json(car))
  .catch(next);
});

carRouter.get('/api/car/:id', function(req, res, next) {
  debug('GET: /api/car');
  Car.findById(req.params.id)
  .then( car => res.json(car))
  .catch(next);
});

carRouter.delete('/api/car/:id', function(req, res, next) {
  debug('DELETE: /api/car');
  Car.findByIdAndRemove(req.params.id, req.body)
  .then(car => res.json(car))
  .catch(next);
});
