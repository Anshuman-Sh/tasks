const express = require("express");
const router = require("./routes/tasks.routes");
const app = express();
const cors = require("cors");

//Enable cors
app.use(cors());
app.options("*", cors());

//Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

//Routes
app.use("/", router);

module.exports = app;