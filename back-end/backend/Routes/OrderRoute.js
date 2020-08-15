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
  router.post("/users/PostOrder", auth, async (req, res, next) => {
    console.log(req.body);
    const order = new Order({
      Order: req.body.Order,
      OrderPrice: req.body.OrderPrice,
      OrderBy: ObjectId(req.body.OrderBy),
    });
    const newOrder = await order.save();
    if (newOrder) {
      return res
        .status(201)
        .send({ message: "Order Created.", data: newOrder });
    }
    return res.status(500).send({ message: "Error in creating Order" });
  });

  router.post("/users/getOrder", auth, async (req, res) => {
    MongoClient.connect(
      config.mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function (err, db) {
        if (err) throw err;
        var dbo = db.db("darziweb");

        var query = {};

        dbo
          .collection("orders")
          .aggregate([
            { $match: {} },
            {
              $lookup: {
                from: "users",
                localField: "OrderBy",
                foreignField: "_id",
                as: "orderd",
              },
            },

            { $unwind: "$orderd" },

            {
              $project: {
                Order: 1,
                OrderStatus: 1,
                OrderPrice: 1,
                _id: 1,
                CustomerName: "$orderd.username",
                CustomerId: "$orderd._id",
                OrderBookerId: 1,
                DarziId: 1,
                OrderBookerName: 1,
                DarziName: 1,
              },
            },
          ])
          .toArray(function (err, resdata) {
            console.log(resdata);
            res.json(resdata);
          });
      }
    );
  });

  router.post("/users/UpdateOrder/", auth, function (req, res, next) {
    console.log(req.body.OrderBookerId);
    console.log(req.body.OrderId);
    console.log(req.body.OrderBookerName);

    Order.findById(req.body.OrderId, function (err, order) {
      if (!order) {
        res.status(404).send("data is not found");
        console.log(order);
      } else {
        order.OrderBookerId = req.body.OrderBookerId;
        order.OrderBookerName = req.body.OrderBookerName;
      }
      order
        .save()
        .then((order1) => {
          console.log(order1);
          res.status(200).json("order updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });
  router.post("/users/UpdateDarziOrder/", auth, function (req, res, next) {
    console.log(req.body.DarziId);
    console.log(req.body.OrderId);
    console.log(req.body.DarziName);

    Order.findById(req.body.OrderId, function (err, order) {
      if (!order) {
        res.status(404).send("data is not found");
        console.log(order);
      } else {
        order.DarziId = req.body.DarziId;
        order.DarziName = req.body.DarziName;
      }
      order
        .save()
        .then((order1) => {
          console.log(order1);
          res.status(200).json("order updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });

  router.post("/users/UpdateDarzi/", auth, function (req, res, next) {
    console.log(req.body.DarziId);
    console.log(req.body.OrderId);
    console.log(req.body.status);
    console.log(req.body.DarziName);

    Order.findById(req.body.OrderId, function (err, order) {
      if (!order) {
        res.status(404).send("data is not found");
        console.log(order);
      } else {
        order.DarziId = req.body.DarziId;
        order.OrderStatus = req.body.status;
        order.DarziName = req.body.DarziName;
      }
      order
        .save()
        .then((order1) => {
          console.log(order1);
          res.status(200).json("order updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });

  router.post("/users/UpdateOrderBooker/", auth, function (req, res, next) {
    console.log(req.body.OrderBookerId);
    console.log(req.body.OrderId);
    console.log(req.body.status);
    console.log(req.body.OrderBookerName);

    Order.findById(req.body.OrderId, function (err, order) {
      if (!order) {
        res.status(404).send("data is not found");
        console.log(order);
      } else {
        order.OrderBookerId = req.body.OrderBookerId;
        order.OrderStatus = req.body.status;
        order.OrderBookerName = req.body.OrderBookerName;
      }
      order
        .save()
        .then((order1) => {
          console.log(order1);
          res.status(200).json("order updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });
};
