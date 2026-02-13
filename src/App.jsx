// import React from "react";
// import ProductCard from "./component/ProductCard.jsx";
// import headphone from "./assets/headphone.png";
// import smartwatch from "./assets/smartwatch.png"


// function App() {
//   return (
//     <div style={{ display: "flex", gap: "20px", padding: "20px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>

//       <ProductCard
//         name="Wireless Headphones"
//         // price={2999}
//         image={headphone}
//         inStock={true}
//       />

//       <ProductCard
//         name="Smart Watch"
//         price={4999}
//         image={smartwatch}
//         inStock={false}
//       />
//     </div>
//   );
// }



// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Library from "./component/Library";
import Products from "./component/Products";
import PersonHierarchy from "./component/PersonHierarchy";


// import Calculator from "./component/Calculator";
// import Todo from "./component/Todo";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* <h1>Mini Projects Dashboard</h1> */}

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/library">Library</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/person">Person Hierarchy</Link>

        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/products" element={<Products />} />
          <Route path="/person" element={<PersonHierarchy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
