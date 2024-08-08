const mongoose = require("mongoose");
const InventoryModal = require("../models/InventoryModal");
const express = require("express");

// Geting All inventory
const getInventoryItmes = async (req, res) => {
  const inventoryData = await InventoryModal.find();
  if (!inventoryData) {
    return res.status(404).send({ message: "Inventory not found" });
  }
  res.json(inventoryData);
};

// Posting new Inventory
const registerInventoryItmes = async (req, res) => {
  try {
    const { itemName, qyt, price } = req.body;
    const totalPrice = JSON.stringify(qyt * price);
    console.log(totalPrice);
    const newInventory = await InventoryModal({
      itemName,
      qyt,
      price,
      totalPrice,
    });
    await newInventory.save();
    res.send({ message: "Success saving" });
  } catch (error) {
    res.send({ message: "Error registering : " + error.message });
  }
};

// updating Single Inventory

const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ message: "Invalid id" });
    }
    const { itemName, qyt, price } = req.body;
    const totalPrice = JSON.stringify(qyt * price);
    const updateInfo = await InventoryModal.findByIdAndUpdate(id, {
      itemName,
      qyt,
      price,
      totalPrice,
    });
    if (!updateInfo) {
      throw new error(res.status(404).send({ message: "Inventory not found" }));
    }
    res.send({ message: "Inventory updated" });
  } catch (error) {
    res.send({
      message: "Error updating : " + error.message,
    });
  }
};

// getting  Single Inventory
const getSingleinventory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ message: "Invalid id" });
    }
    const inventoryData = await InventoryModal.findById(id);
    if (!inventoryData) {
      throw new error(res.status(404).send({ message: "Inventory not found" }));
    }
    res.json(inventoryData);
  } catch (error) {
    res.send({ message: "Error getting single inventory: " + error.message });
  }
};

// Delete inventory

const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ message: "Invalid id" });
    }
    const inventoryData = await InventoryModal.findByIdAndDelete(id);
    if (!inventoryData) {
      throw new error(res.status(404).send({ message: "Inventory not found" }));
    }
    res.json(inventoryData);
  } catch (error) {
    res.send({ message: "Error deleting inventory: " + error.message });
  }
};

module.exports = {
  getInventoryItmes,
  registerInventoryItmes,
  getSingleinventory,
  updateInventory,
  deleteInventory,
};
