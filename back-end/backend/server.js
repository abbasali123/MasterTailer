const express = require("express");
const cors = require("cors");
var multer = require("multer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("./user");

var Categories = require("./Categories");

var alluserregistration = require("./alluserregistration");
var collectdarzidata = require("./collectdarzidata");

var collectorderorderbooker = require("./collectorderorderbooker");

var allusersignin = require("./allusersignin");

// var socketcustomer=require("./socketcustomer");

var Order = require("./Order");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const config = require("./config/key");
var url = config.mongoURI;
var server = require("http").createServer(app);
var io = require("socket.io")(server);

MongoClient.connect(
  config.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, dbClient) => {
    if (err) throw err;
    db = dbClient.db("darziweb");
    console.log("connected to darziweb");
  }
);

// socketcustomer(router);
alluserregistration(router);
allusersignin(router);
collectdarzidata(router);
collectorderorderbooker(router);
//Categories Post

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

router.post("/users/PostOrder", async (req, res, next) => {
  console.log(req.body);
  const order = new Order({
    Order: req.body.Order,
    OrderPrice: req.body.OrderPrice,
    OrderBy: ObjectId(req.body.OrderBy),
  });
  const newOrder = await order.save();
  if (newOrder) {
    return res.status(201).send({ message: "Order Created.", data: newOrder });
  }
  return res.status(500).send({ message: "Error in creating Order" });
});

router.get("/users/categories", async (req, res, next) => {
  const category = await Categories.find({});
  res.send(category);
});
router.post("/users/getOrder", (req, res) => {
  MongoClient.connect(
    url,
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

          // Join with user_role table
          //   {
          //     $lookup:{
          //         from: "subscribers",
          //         localField: "uploderid",
          //         foreignField: "goestoid",
          //         as: "user_role"
          //     }
          // },
          // {   $unwind:"$user_role" },

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

router.post("/users/UpdateOrder/", function (req, res, next) {
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
router.post("/users/UpdateDarziOrder/", function (req, res, next) {
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

router.post("/users/UpdateDarzi/", function (req, res, next) {
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

router.post("/users/UpdateOrderBooker/", function (req, res, next) {
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

router.post("/users/getusers", function (req, res, next) {
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

router.post("/users/checkinitialinfo", function (req, res, next) {
  MongoClient.connect(
    url,
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

io.on("connection", (socket) => {
  console.log("connection on");

  socket.on("orderproceed", (data) => {
    console.log("yes i got rrquest");

    MongoClient.connect(
      url,
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

            // Join with user_role table
            //   {
            //     $lookup:{
            //         from: "subscribers",
            //         localField: "uploderid",
            //         foreignField: "goestoid",
            //         as: "user_role"
            //     }
            // },
            // {   $unwind:"$user_role" },

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
              },
            },
          ])
          .toArray(function (err, resdata) {
            console.log(resdata);
            ///// res.json(resdata);

            socket.broadcast.emit("customerpastorder", resdata);
          });
      }
    );
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.use("/api", router);

server.listen(port, () => console.log("Server is up and running..."));
