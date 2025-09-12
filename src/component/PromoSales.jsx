import { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

function PromoSalesPage({ products, onAddToCart }) {
  const [promoProducts, setPromoProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  



  // ✅ Memoized function
  const pickPromoProducts = useCallback(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [products]);

  // Initialize promo products
  useEffect(() => {
    setPromoProducts(pickPromoProducts());
  }, [pickPromoProducts]);

  // Countdown effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setPromoProducts(pickPromoProducts());
      setTimeLeft(300); // reset countdown
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, pickPromoProducts]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "orange", marginBottom: "10px" }}>
        🔥 Promo Sales
      </h2>
      <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "20px" }}>
        Hurry up! Offer ends in <b>{formatTime(timeLeft)}</b>
      </p>

      {/* Refresh button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setPromoProducts(pickPromoProducts());
            setTimeLeft(300); // reset countdown
          }}
        >
          🔄 Refresh Deals
        </button>
      </div>

      {/* Product cards */}
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
