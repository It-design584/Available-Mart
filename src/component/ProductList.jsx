import React, { useState } from "react";
import ProductCard from "./ProductCard"; 

const ProductList = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Ours Products</h2>

      {/* Filter Dropdown */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
