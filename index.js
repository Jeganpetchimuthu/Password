const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT;
// const dbUrl = "mongodb://0.0.0.0:27017";

// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const con = mongoose.connection;
// try {
//   con.on("open", () => {
//     console.log("MongoDB connected!!!");
//   });
// } catch (error) {
//   console.log("Error: " + error);
// }

require("dotenv").config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const userRouter = require("./router/index");
app.use("/api", userRouter);

app.listen(3002, () => {
  console.log(`This Node application is running on ${3002}`);
});
