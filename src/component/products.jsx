import React from "react";
import ProductCard from "./ProductCard";
import headphone from "../assets/headphone.png";
import smartwatch from "../assets/smartwatch.png"
function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      image: headphone,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      image: smartwatch,
      inStock: false
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1799,
      image: headphone,
      inStock: true
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
