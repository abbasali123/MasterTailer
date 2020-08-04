var mongoose = require("mongoose");
const config = require("./config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var orderbookerliveschm = new mongoose.Schema({
  orginalid: String,
  stos: String,
  aneck: String,
  waistar: String,
  shirtlen: String,
  slevelen: String,

  arwaist: String,

  bicep: String,
  armhole: String,
  arnavel: String,
  sherwanilen: String,
  plen: String,
  asnu: String,
  pwasitar: String,
  pinseam: String,
  penthip: String,
  parcalf: String,
  parthigh: String,
  parknee: String,
  parankle: String,
  
});

var orderbookerlivemodel = mongoose.model("orderbookerlive", orderbookerliveschm);
module.exports = orderbookerlivemodel;
