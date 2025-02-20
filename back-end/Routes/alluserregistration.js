const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("../Model/user");
////// var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
var mongoose = require("mongoose");
var config = require("../config/key");
var bcrypt = require("bcryptjs");

var myuser = usermodel.find({});

module.exports = function (router) {
  router.post("/users/create", (req, res) => {
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

        var query = { username: req.body.username, role: req.body.role };
        dbo
          .collection("users")
          .find(query)
          .toArray(async function (err, result) {
            console.log(result);
            if (result == "") {
              var userdetail = new usermodel({
                number: req.body.number,
                username: req.body.username,
                pass: req.body.pass,
                role: req.body.role,
                initialinfo: "",
              });
              console.log(userdetail);
              let salt = await bcrypt.genSalt(10);
              userdetail.pass = await bcrypt.hash(userdetail.pass, salt);

              userdetail.save(function (err, res1) {
                if (err) throw err;

                myuser.exec(function (err, data) {
                  if (err) throw err;

                  res.json("submitted");
                });
              });
            } else {
              res.json("notsubmitted");
              console.log("notsubmitted");
            }
          });
      }
    );
  });
};
