const jwt = require("jsonwebtoken");
const config = require("../config/key");

async function auth(req, res, next) {
  console.log("authenticating");
  let token = req.header("x-auth-token");
  console.log(token);
  if (!token) return res.status(400).send("Token Not Provided");
  try {
    let user = jwt.verify(token, config.jwtKey);
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  next();
}
module.exports = auth;
