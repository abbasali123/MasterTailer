const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("./user");
////// var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
var mongoose = require("mongoose");
const config = require("./config/key");

var myuser = usermodel.find({});

module.exports = function (router) {
  router.post("/users/login", (req, res) => {
    var fusername = req.body.username;

    var fpass = req.body.pass;

    var fltrparameter = { $and: [{ username: fusername }, { pass: fpass }] };

    var userfilter = usermodel.find(fltrparameter);

    userfilter.exec(function (err, data) {
      if (err) throw err;
      //console.log(data.username);
      if (data == "") {
        MongoClient.connect(
          config.mongoURI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },
          function (err, db) {
            if (err) throw err;
            var dbo = db.db("darziweb");
            ///  console.log('haaaaaaaaaaa');
            /*Return only the documents with the address "Park Lane 38":*/

            var query = { username: fusername };
            dbo
              .collection("users")
              .find(query)
              .toArray(function (err, result) {
                if (result == "") {
                  res.json(data);
                } else {
                  res.json("onlyemail");
                }
              });
          }
        );
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });
};
