const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("../Model/user");
////// var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
var mongoose = require("mongoose");
const config = require("../config/key");
var Categories = require("../Model/Categories");
var auth = require("../middleware/auth");
const Order = require("../Model/Order");
module.exports = function (router) {
  router.post("/users/getusers", auth, function (req, res, next) {
    var editid = usermodel.find();
    editid.exec(function (err, data) {
      if (err) throw err;

      res.json(data);
    });
  });

  router.post("/users/getprofile/", function (req, res, next) {
    console.log(req.body.id);

    var editid = usermodel.findById(req.body.id);
    editid.exec(function (err, data) {
      if (err) throw err;

      res.json(data);
    });
  });

  router.post("/users/checkinitialinfo", auth, function (req, res, next) {
    MongoClient.connect(
      config.mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function (err, db) {
        if (err) throw err;

        var dbo = db.db("darziweb");

        var queryf = { _id: ObjectId(req.body.postedid) };
        dbo
          .collection("users")
          .find(queryf)
          .toArray(function (err, result) {
            if (err) throw err;
            if (result[0].initialinfo == "completed") {
              res.json("completed");
            } else {
              res.json("notcompleted");
            }
          });
      }
    );
  });
};
