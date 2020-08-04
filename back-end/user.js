var mongoose = require("mongoose");
const config = require("./config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var userschm = new mongoose.Schema({
  number: String,
  username: String,
  pass: String,
  role: String,
  initialinfo: String,
});

var usermodel = mongoose.model("users", userschm);
module.exports = usermodel;
