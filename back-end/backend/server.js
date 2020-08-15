const express = require("express");
const cors = require("cors");
var multer = require("multer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("./Model/user");

var Categories = require("./Model/Categories");

var alluserregistration = require("./Routes/alluserregistration");
var collectdarzidata = require("./Routes/collectdarzidata");

var collectorderorderbooker = require("./Routes/collectorderorderbooker");

var allusersignin = require("./Routes/allusersignin");
var CategoriesRoute = require("./Routes/CategoriesRoute");
const OrderRoute = require("./Routes/OrderRoute");
const UserRoute = require("./Routes/UserRoute");
// var socketcustomer=require("./socketcustomer");

var Order = require("./Model/Order");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const config = require("./config/key");
const auth = require("./middleware/auth");
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
CategoriesRoute(router);
OrderRoute(router);
UserRoute(router);
//Categories Post

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

const port = process.env.PORT || 5001;

app.use("/api", router);

server.listen(port, () => console.log("Server is up and running..."));
