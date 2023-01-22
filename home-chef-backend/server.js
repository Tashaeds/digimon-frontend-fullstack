"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.listen(PORT, () => console.log(`Listening on port${PORT}`));

const errorHandler = require("./handlers/500");
const notFoundHandler = require("./handlers/404");

app.get("/", (req, res) => {
  res.send("working");
});

app.use(errorHandler);
app.use("*", notFoundHandler);
