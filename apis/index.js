const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const router = require("./src/router");
// const nodemailer = require("nodemailer");
// const { application } = require("express");
//const dbConnect = require("./src/utils/db");

server.use(cors());
server.use(bodyParser.json());

server.use("/api", router);

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

server.listen(4005, () => {
  console.log("Server Started..");
});
