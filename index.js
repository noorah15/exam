const express = require("express");
require("dotenv").config();

const cors = require("cors");
const morgan = require("morgan");
require("./db/index.js"); //require("../db");

const app = express();
app.use(express.json());
app.use(cors);
app.use(morgan("dev"));

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
