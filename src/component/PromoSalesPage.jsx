import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import "./PromoSalesPage.css";

function PromoSalesPage({ products, onAddToCart }) {
  const [promoProducts, setPromoProducts] = useState([]);
  

  useEffect(() => {
    const pickPromoProducts = () => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
    setPromoProducts(pickPromoProducts());
  }, [products]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "orange", marginBottom: "20px" }}>
        🔥 Promo Sales 
      </h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {promoProducts.map((item, idx) => (
          <ProductCard key={idx} {...item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default PromoSalesPage;
