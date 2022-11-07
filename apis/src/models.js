const mongoose = require("mongoose");
const dbConnect = require("./utils/db");

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
});

const Users = dbConnect.model("Users", useSchema);
module.exports = Users;
