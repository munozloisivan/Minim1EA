var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
   name: String,
   surnames: String,
   age: Number,
   nacionalidad: String
});

module.exports = mongoose.model('Author', AuthorSchema);
