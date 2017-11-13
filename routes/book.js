var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find().populate('author').exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id).populate('author').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SUBJECTS BY NAME */
router.get('/filter/title/:title', function (req, res, next) {
  Book.find({"title": req.params.title }).populate('author').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SUBJECTS BY TITULACIÓN */
router.get('/filter/titulacion/:publisher', function (req, res, next) {
  Book.find({"publisher": req.params.publisher }).populate('author').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SUBJECTS BY QUATRIMESTRE */
router.get('/filter/quatrimestre/:price', function (req, res, next) {
  Book.find({"price": req.params.price }).populate('author').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SUBJECTS ORDERED BY NAME */
router.get('/filter/sort', function(req, res, next) {
  Book.find({}, null, {sort: {title: 1 }}, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});


/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* ADD AUTHOR TO A BOOK */
router.post('/:id/authors/:idauthor', function (req, res, next) {
  console.log('book routes -- params.author= ' + req.params.idauthor);
  Book.update({ _id: req.params.id },
    {"$push": { "author" :  req.params.idauthor }},
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

/* DELETE STUDENT FROM SUBJECT */
router.put('/:id/authors/:idauthor', function (req, res, next) {
  Book.update({ _id: req.params.id },
    {"$pull": { "author" :  req.params.idauthor }},
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
