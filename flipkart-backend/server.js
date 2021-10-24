require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");

const app = express();

const Port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// mongoose connection
const connection_url =
  "mongodb+srv://admin:b6K6V2AExQDr3xsQ@cluster0.hvzb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoose connected");
});

// routes
require("./routes/web")(app);

// listener
app.listen(Port, () => {
  console.log("server started at port http://localhost:" + Port);
});
