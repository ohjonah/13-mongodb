'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('note:bakery-router');
const Bakery = require('../model/bakery.js');
const bakeryRouter = module.exports = new Router();

bakeryRouter.post('/api/bakery', jsonParser, function(req, res, next) {
  debug('POST: /api/bakery');

  req.body.timestamp = new Date();
  new Bakery(req.body).save()
  .then( bake => res.json(bake))
  .catch(next);
});

bakeryRouter.get('/api/list/:id', function(req, res, next) {
  debug('GET: /api/bakery');

  Bakery.findById(req.params.id)
  .then( bake => res.json(bake))
  .catch(next);
});