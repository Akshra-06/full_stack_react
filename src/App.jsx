import React from "react";
import ProductCard from "./component/ProductCard";
import headphone from "./assets/headphone.png";
import smartwatch from "./assets/smartwatch.png"


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProductCard
        name="Wireless Headphones"
        price={2999}
        image={headphone}
        inStock={true}
      />

      <ProductCard
        name="Smart Watch"
        price={4999}
        image={smartwatch}
        inStock={false}
      />
    </div>
  );
}

export default App;
