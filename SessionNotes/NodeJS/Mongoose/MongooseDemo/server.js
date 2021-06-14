const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // == bodyParser
app.listen(3000);

////////////////////    MongoDB     ///////////////////////
// connect mongoDB, mongooseDemo is the database name
// it will automatically created if it is not exist in DB
const dbURL = "mongodb://localhost:27017/mongooseDemo";
// options after url could get when run this file
mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
///////////////////////////////////////////////////////////////////

////////////////// Routes /////////////////////////
const userRoute = require("./routes/user");
app.use("/users", userRoute);
//////////////////////////////////////////////////
