const express = require("express");
const cookieParser = require('cookie-parser');

//Initializing Express
const app = express();

const errorMiddleware = require("./middleware/error");
//To Parse Json in the body:
app.use(express.json());
app.use(cookieParser());

//Routes Import coming from Routes Folder
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");

//Basic Route STructure
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);


app.use(errorMiddleware);

module.exports = app;
