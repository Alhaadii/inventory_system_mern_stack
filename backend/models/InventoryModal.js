const mongoose = require("mongoose");
const inventorySchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    qyt: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
