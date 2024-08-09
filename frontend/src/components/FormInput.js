import React, { useState } from "react";

const FormInput = () => {
  const [itemName, setItemName] = useState("");
  const [qyt, setQyt] = useState("");
  const [price, setPrice] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalPrice = new Float32Array(qyt * price);
      const itemData = { itemName, qyt, price, totalPrice };
      const response = await fetch("/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data);
      } else {
        setSuccessMessage(data.message);
        clearAll();
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error:", error);
    }
  };

  function clearAll() {
    setItemName("");
    setQyt("");
    setPrice("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Welcome to Inventory Manager</h1>
      <div className="input-group">
        <small>{successMessage}</small>
        <small>{errorMessage && errorMessage}</small>
        <input
          type="text"
          placeholder="Item name"
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
        />
        <input
          type="text"
          placeholder="Item qyt"
          onChange={(e) => setQyt(e.target.value)}
          value={qyt}
        />
        <input
          type="text"
          placeholder="Item price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default FormInput;
