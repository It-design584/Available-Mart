import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function PromoSalesPage({ products, onAddToCart }) {
  const [promoProducts, setPromoProducts] = useState([]);

  useEffect(() => {
    const pickPromoProducts = () => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3); // show 3 promos
    };
    setPromoProducts(pickPromoProducts());
  }, [products]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "orange",
            marginBottom: "20px",
          }}
        >
          🔥 Promo Sales
        </h2>

        {/* ✅ Grid Layout */}
       <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "20px",
  justifyContent: "center",
}}>
          {promoProducts.map((item, idx) => (
            <ProductCard key={idx} {...item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromoSalesPage;
