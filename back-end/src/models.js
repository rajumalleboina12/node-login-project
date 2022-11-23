const mongoose = require("mongoose");
//const { stringify } = require("uuid");
const dbConnect = require("./connect/db");

const useSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  uniqueId: String,
  dateofbirth: String,
  country: String,
  phonenumber: Number,
  gender: String,
  resetlink: String,
});

const Users = dbConnect.model("Users", useSchema);
module.exports = Users;
