const uuid = require("uuid");
var CryptoJS = require("crypto-js");
const Users = require("./models");
var jwt = require("jsonwebtoken");
var privateKey = "somethingunique";

const registerNewUser = async (req, res) => {
  var data = req.body;
  var isUser = Users.findOne({ username: data.username });
  if (isUser) {
    return res.json({ status: false, msg: "This username already exists" });
  }

  console.log(data);
  data.uniqueId = uuid.v4();

  var encPassword = CryptoJS.AES.encrypt(
    data.password,
    data.uniqueId
  ).toString();

  data.password = encPassword;

  var newUser = Users(data);
  var response = await newUser.save();

  return res.json(response);
};

const getUsersData = (req, res) => {
  Users.find().then((users) => {
    return res.json(users);
  });
};

const login = async (req, res) => {
  var data = req.body;
  var user = await Users.findOne({ username: data.username });

  if (user === null) {
    return res.json({ status: false, msg: "You have entered wrong Username" });
  }

  var decryptPassword = CryptoJS.AES.decrypt(
    user.password,
    user.uniqueId
  ).toString(CryptoJS.enc.Utf8);

  if (decryptPassword !== data.password) {
    return res.json({ status: false, msg: "You have entered wrong Password" });
  }

  var token = jwt.sign({ username: user.username, _id: user._id }, privateKey);

  user.uniqueId = undefined;
  user.password = undefined;

  return res.json({ status: true, data: user, token: token });
};

const isAuthenticated = async (req, res) => {
  var userToken = req.query.token;
  var user = jwt.verify(userToken, privateKey);
  if (user) {
    user = await Users.findById(user._id);
    user.password = undefined;
    user.uniqueId = undefined;
    return res.json({ status: true, data: user });
  } else {
    return res.json({ status: false });
  }
};

module.exports = {
  registerNewUser,
  getUsersData,
  login,
  isAuthenticated,
};
