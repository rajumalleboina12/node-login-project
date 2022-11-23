const mongoose = require("mongoose");

const dbConnect = mongoose.createConnection(
  "mongodb+srv://raju:1185@cluster0.bft6drf.mongodb.net/?retryWrites=true&w=majority"
);

dbConnect.on("connected", () => {
  console.log("Database connection done...");
});

dbConnect.on("error", () => {
  console.log("Error");
});

module.exports = dbConnect;
