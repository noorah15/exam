const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_URL, options).then(
  () => {
    console.log("DB is connected");
  },
  (err) => {
    console.log("DB is not connected");
  }
);
