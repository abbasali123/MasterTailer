var mongoose = require("mongoose");
const config = require("../config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var CategoriesShema = new mongoose.Schema({
  ItemName: { type: String, required: true },
  ItemPrice: { type: String, required: true },
  ItemStatus: { type: String, required: true },
});

var CategoriesModel = mongoose.model("Categories", CategoriesShema);
module.exports = CategoriesModel;
