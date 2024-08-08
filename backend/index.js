require("dotenv").config();
const express = require("express");
const createDatabase = require("./config/Database");
const inventoryRout = require("./routes/InventoryRouter");

const app = express();
const port = process.env.PORT || 3000;

// middle ware
app.use(express.json());

// middle ware

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use("/inventory", inventoryRout);

app.listen(port, () => {
  createDatabase();
  console.log(`Server is running on port ${port}`);
});
