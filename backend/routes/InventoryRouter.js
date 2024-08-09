const epxress = require("express");
const {
  getInventoryItmes,
  registerInventoryItmes,
  getSingleinventory,
  updateInventory,
  removeInventory,
} = require("../controllers/ControllerFunctions");

const inventoryRout = epxress.Router();

inventoryRout.get("/", getInventoryItmes);
inventoryRout.post("/", registerInventoryItmes);
inventoryRout.get("/:id", getSingleinventory);
inventoryRout.put("/:id", updateInventory);
inventoryRout.delete("/:id", removeInventory);

module.exports = inventoryRout;
