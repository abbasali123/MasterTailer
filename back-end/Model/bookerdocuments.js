var mongoose = require("mongoose");
const config = require("../config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var bookerdocschm = new mongoose.Schema({
  orginalid: String,
  document: String,
});

var bookerdocmodel = mongoose.model("bookerdocuments", bookerdocschm);
module.exports = bookerdocmodel;
