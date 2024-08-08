const epxress = require("express");
const {
  getInventoryItmes,
  registerInventoryItmes,
  getSingleinventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/ControllerFunctions");

const inventoryRout = epxress.Router();

inventoryRout.get("/", getInventoryItmes);
inventoryRout.post("/", registerInventoryItmes);
inventoryRout.get("/:id", getSingleinventory);
inventoryRout.put("/:id", updateInventory);
inventoryRout.delete("/:id", deleteInventory);

module.exports = inventoryRout;
