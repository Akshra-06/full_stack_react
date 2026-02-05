import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const { name, price, image, inStock } = props;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>

      <p
        className={`stock-status ${
          inStock ? "in-stock" : "out-of-stock"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
