const mongoose = require("mongoose");
require("dotenv").config();

const createDatabase = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Database failed to connect.");
    });
};

module.exports = createDatabase;
