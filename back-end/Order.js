var mongoose = require("mongoose");
const config = require("./config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var OrderSchema = new mongoose.Schema({
  Order: { type: Array, required: true },
  OrderStatus: { type: String, default: "Requested" },
  OrderPrice: { type: Number, required: true },
  OrderBy: { type: mongoose.Types.ObjectId, required: true },
  OrderBookerId: { type: mongoose.Types.ObjectId },
  DarziId: { type: mongoose.Types.ObjectId },
  OrderBookerName: { type: String },
  DarziName: { type: String },
});

var OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
