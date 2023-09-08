import React, { useState } from "react";
import "./Billing.css";

const Billing = () => {
  const [formData, setFormData] = useState({
    totalQuantity: 0,
    totalPrice: 0,
    orderItems: [
      {
        unitPrice: 0,
        quantity: 0,
        productId: 0,
      },
    ],
    customerFirstName: "",
    customerLastName: "",
    customerEmail: "",
    shippingAddress: {
      street: "",
      city: "",
      state: "",
      country: "",
    },
    billingAddress: {
      street: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedInputChange = (e, parent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [parent]: {
        ...formData[parent],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send formData to an API or perform actions here
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Total Quantity:
          <input
            type="number"
            name="totalQuantity"
            value={formData.totalQuantity}
            onChange={handleInputChange}
          />
        </label>
        {/* Repeat similar inputs for other fields */}
        <label>
          Customer First Name:
          <input
            type="text"
            name="customerFirstName"
            value={formData.customerFirstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Shipping Street:
          <input
            type="text"
            name="street"
            value={formData.shippingAddress.street}
            onChange={(e) => handleNestedInputChange(e, "shippingAddress")}
          />
        </label>
        {/* Repeat for other nested fields */}
        <button type="submit" className="checkout-button">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Billing;
