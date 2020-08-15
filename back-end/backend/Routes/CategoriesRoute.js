const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("../Model/user");
////// var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
var mongoose = require("mongoose");
const config = require("../config/key");
var Categories = require("../Model/Categories");
var auth = require("../middleware/auth");
module.exports = function (router) {
  router.post("/users/categories/add", async (req, res, next) => {
    console.log(req.body);
    const category = new Categories({
      ItemName: req.body.name,
      ItemPrice: req.body.price,
      ItemStatus: req.body.status,
    });
    const newCategory = await category.save();
    if (newCategory) {
      return res
        .status(201)
        .send({ message: "Item Created.", data: newCategory })
        .catch({});
    }
    return res.status(500).send({ message: "Error in creating Item" });
  });

  router.get("/users/categories", auth, async (req, res, next) => {
    const category = await Categories.find({});
    res.send(category);
  });
};
