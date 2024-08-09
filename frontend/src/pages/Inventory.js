import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  const handleDelete = async (itemId) => {
    const response = await fetch(`/inventory/${itemId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const updatedItems = inventoryItems.filter((item) => item._id !== itemId);
      setInventoryItems(updatedItems);
    } else {
      console.error("Failed to delete item");
    }
  };

  const handleUpdate = (item) => {};

  useEffect(() => {
    const fetchitems = async (req, res) => {
      const response = await fetch("/inventory/");
      const data = await response.json();
      setInventoryItems(data);
    };
    fetchitems();
  }, []);

  return (
    <div className="container">
      <div className="search">
        <input type="text" placeholder="search inventory" />
        <button>Search</button>
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {inventoryItems.length > 0 &&
          inventoryItems.map((item) => (
            <tbody key={item._id}>
              <tr>
                <td>{item._id}</td>
                <td>{item.itemName}</td>
                <td>{item.qyt}</td>
                <td>{item.price}</td>
                <td>{item.totalPrice}</td>
                <td className="btnActions">
                  <button onClick={() => handleUpdate(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      <Link className="go" to="/">
        Register new item
      </Link>
    </div>
  );
};

export default Inventory;
