const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("./user");

var shopownerrmodel = require("./shopowner");

var myshopmodel = shopownerrmodel.find({});

////// var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
var mongoose = require("mongoose");
const config = require("./config/key");
const auth = require("./middleware/auth");
var url = config.mongoURI;

(aws = require("aws-sdk")),
  (multer = require("multer")),
  (multerS3 = require("multer-s3"));

var myuser = usermodel.find({});
aws.config.update({
  secretAccessKey: "PJeP8STFghKMndfYfeemrXaG+PitA89U0tYVh4Vj",
  accessKeyId: "AKIAW2NNE42EUXN5SD5J",
  region: "us-east-1",
});
s3 = new aws.S3();

module.exports = function (router) {
  var printname = "";

  // express route where we receive files from the client
  // passing multer middleware
  var myfilearray = [];
  var myorginalname = [];

  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "pakistanbucket",
      key: function (req, file, cb) {
        console.log(file);
        cb(
          null,
          (printname = myfilename = Date.now() + "-" + file.originalname)
        );
        myfilearray.push(printname);
      },
    }),
  });

  /////////////////////////////handle my diles data///////////////////
  router.post(
    "/users/senddarzidata",
    auth,
    upload.array("file"),
    (req, res) => {
      ////console.log(req.body);
      const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

      console.log(obj.uploderid); // { title: 'product' }

      var shopdetail = new shopownerrmodel({
        uploderid: ObjectId(obj.uploaderid),
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        fathername: req.body.fathername,
        gender: req.body.gender,

        wnumber: req.body.wnumber,

        altemail: req.body.altemail,
        address: req.body.addredd,
        nlandmark: req.body.nlandmark,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        zipcode: req.body.zipcode,
        bday: req.body.bday,
        cnic: req.body.cnic,
        quli: req.body.quli,
        relegion: req.body.relegion,

        attachdocument: myfilearray,

        bankname: req.body.bankname,
        branchname: req.body.branchname,
        bankcity: req.body.bankcity,

        accountname: req.body.accountname,
        type: req.body.type,
        accountno: req.body.accountno,
        ibn: req.body.ibn,

        shopname: req.body.shopname,
        shopno: req.body.shoplandline,
        shoplandline: req.body.shopno,
        shopdepno: req.body.deptno,
        markdepno: req.body.markdeptno,
        offemail: req.body.offemail,
        offwnumber: req.body.offwnumber,
        shopregaddress: req.body.shopregaddress,
        shopntn: req.body.ntnno,
      });

      shopdetail.save(function (err, res1) {
        if (err) throw err;

        myshopmodel.exec(function (err, data) {
          if (err) throw err;

          ///res.render('index', { title: 'this is table',records:data ,success:'data insereted succfully'});

          res.json("submitted");
        });
      });

      MongoClient.connect(
        url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        function (err, db) {
          if (err) throw err;
          var dbo = db.db("darziweb");

          var myquery = { _id: ObjectId(obj.uploderid) };
          ////  console.log( req.body.uploaderiddarzi);
          var newvalues = { $set: { initialinfo: "completed" } };
          dbo
            .collection("users")
            .updateOne(myquery, newvalues, function (err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              ///     console.log(res);
              // res.json('submitted');
              //// calltry("5ea5624b309ef439d0fb82f1","fake");

              //  db.close();
            });
        }
      );

      myfilearray = [];
      myfilearray.length = 0;
      while (myfilearray.length > 0) {
        myfilearray.pop();
      }
    }
  );
};
