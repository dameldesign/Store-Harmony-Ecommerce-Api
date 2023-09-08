import React, { useEffect } from "react";
import "./Card.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";
const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  // console.log(item);
  return (
    <div className="card">
      <img className="card__img" src={product.imageUrl} alt="" />
      <div>
        <h2>{product.name}</h2>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <div></div>
        <span>Price : ${product.unitPrice}</span> <br/>
        <span className="each_item"> Available Items:{product.unitsInStock}</span>

        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD " : "CANCLE"}
        </button>
      </div>
    </div>
  );
};

export default Card;
