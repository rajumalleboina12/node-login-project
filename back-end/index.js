const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const router = require("./src/router");
//const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");
// const { application } = require("express");
//const dbConnect = require("./src/utils/db");

server.use(cors());
server.use(bodyParser.json());

server.use("/api", router);
server.use(express.urlencoded({ extended: false }));

server.set("view engine", "ejs");

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "mr2330882@gmail.com",
//         pass: "Tun16413",
//       },
//     });

//     const mail_configs = {
//       from: "mr2330882@gmail.com",
//       to: "manasa.ch2121@gmail.com",
//       subject: "Testing coding 101 Email",
//       text: "Just checking if this email will be sent",
//     };
//     transporter.sendEmail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: `An error has occured` });
//       }
//       return resolve({ message: "Email sent succesfully" });
//     });
//   });
// }

// application.get("/send", (req, res) => {
//   sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });
//server.use(express.json());

//ejs forgot and reset password story start here

server.use(express.urlencoded({ extended: false }));

server.set("view engine", "ejs");

// let user = {
//   id: "bbjdbsjwj",

//   email: "raj@gmail.com",

//   password: "efewjnejwf",
// };

// const JWT_SECRET = "some super secret...";

// server.get("/", (req, res) => {
//   res.send("hy i am server listener");
// });

// server.get("/forgot-password", (req, res, next) => {
//   res.render("forgot-password");
// });

// server.get("/perfect", (req, res, next) => {
//   res.render("perfect");
// });
// server.post("/forgot-password", (req, res, next) => {
//   const { email } = req.body;

//   //res.send(email);

//   if (email !== user.email) {
//     res.send("user not registered");

//     return;
//   }

//   //create otp for 15mins

//   const secret = JWT_SECRET + user.password;

//   const payload = {
//     email: user.email,

//     id: user.id,
//   };

//   const token = jwt.sign(payload, secret, { expiresIn: "2m" });

//   const link = `http://localhost:4005/reset-password/${user.id}/${token}`;

//   console.log(link);

//   res.send("password reset link sent to ur email");
// });

// server.get("/reset-password/:id/:token", (req, res, next) => {
//   const { id, token } = req.params;

//   //res.send(req.params);

//   //check id exist in db

//   if (id !== user.id) {
//     res.send("invalid id");

//     return;
//   }

//   //we have a valid id,we have a valid user with this id

//   const secret = JWT_SECRET + user.password;

//   try {
//     const payload = jwt.verify(token, secret);

//     res.render("reset-password", { email: user.email });
//   } catch (error) {
//     console.log(error.message);

//     res.send(error.message);
//   }
// });

// server.post("/reset-password/:id/:token", (req, res, next) => {
//   const { id, token } = req.params;

//   const { password, password2 } = req.body;

//   //res.send(user);

//   if (id !== user.id) {
//     res.send("invalid id");

//     return;
//   }

//   const secret = JWT_SECRET + user.password;

//   try {
//     const payload = jwt.verify(token, secret);

//     //validate password and password2 should match

//     //we can simply find the user with the payload email and id

//     user.password = password;

//     res.send(user);
//   } catch (error) {
//     console.log(error.message);

//     res.send(error.message);
//   }
// });

// story ends here

server.listen(4005, () => {
  console.log("Server has started  http://localhost:4005");
});
