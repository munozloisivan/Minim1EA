var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Author = require('../models/Author.js');

/* GET ALL Authors */
router.get('/', function(req, res, next) {
  Author.find(function (err, authors) {
    if (err) return next(err);
    res.json(authors);
  });
});

/* SAVE AUTHOR */
router.post('/', function(req, res, next) {
  Author.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE AUTHOR BY ID */
router.get('/:id', function(req, res, next) {
  Author.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE AUTHOR */
router.put('/:id', function(req, res, next) {
  Author.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE AUTHOR */
router.delete('/:id', function(req, res, next) {
  Author.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
