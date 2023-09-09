import React, { useState } from "react";
import { postRequest } from "../../components/fetcher";
import "./Billing.css";

const Billing = () => {
  const orderItems = JSON.parse(localStorage.getItem("orderItems"));
  const [formData, setFormData] = useState({
    customerFirstName: "",
    customerLastName: "",
    customerEmail: "",
    shippingStreet: "",
    shippingCity: "",
    shippingState: "",
    shippingCountry: "",
    billingStreet: "",
    billingCity: "",
    billingState: "",
    billingCountry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      totalQuantity: orderItems.orderItems
        .map((item) => item.quantity)
        .reduce(
          (currentVal, accumulatedValue) => currentVal + accumulatedValue,
          0
        ),
      totalPrice: orderItems.total,
      orderItems: orderItems.orderItems,
      customerFirstName: formData.customerFirstName,
      customerLastName: formData.customerLastName,
      customerEmail: formData.customerEmail,
      shippingAddress: {
        street: formData.shippingStreet,
        city: formData.shippingCity,
        state: formData.shippingState,
        country: formData.shippingCountry,
      },
      billingAddress: {
        street: formData.billingStreet,
        city: formData.billingCity,
        state: formData.billingState,
        country: formData.billingCountry,
      },
    };
    console.log({ ...dataToSend });
    const response = await postRequest("/orders", { ...dataToSend });
    console.log(response);
    // You can send formData to an API or perform actions here
  };

  return (
    <div className="checkout-container">
      <h1 className="text">Checkout Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          Customer Last Name:
          <input
            type="text"
            name="customerLastName"
            value={formData.customerLastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Customer Email:
          <input
            type="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
          />
        </label>
        <h3>Shipping</h3>
        <label>
          Street:
          <input
            type="text"
            name="shippingStreet"
            value={formData.shippingStreet}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <div className="sub_label">
          <label>
            {" "}
            city:
            <input
              type="text"
              name="shippingCity"
              value={formData.shippingCity}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label className="label_each">
            {" "}
            state:
            <input
              type="text"
              name="shippingState"
              value={formData.shippingState}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label>
            {" "}
            country
            <input
              type="text"
              name="shippingCountry"
              value={formData.shippingCountry}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </div>

        <label>
          <h3>Billing Address:</h3>
          <label>
            {" "}
            street:
            <input
              type="text"
              name="billingStreet"
              value={formData.billingStreet}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <div className="sub_label">
            <label>
              {" "}
              city:
              <input
                type="text"
                name="billingCity"
                value={formData.billingCity}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="label_each">
              {" "}
              state:
              <input
                type="text"
                name="billingState"
                value={formData.billingState}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label>
              {" "}
              country
              <input
                type="text"
                name="billingCountry"
                value={formData.billingCountry}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
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
