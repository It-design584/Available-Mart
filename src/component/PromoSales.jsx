import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function PromoSalesPage({ products }) {
  const [promoProducts, setPromoProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const navigate = useNavigate();

  // ✅ Memoized function
  const pickPromoProducts = useCallback(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6); // 6 promo cards
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
    <div style={{ padding: "20px", backgroundColor: "#fff8e1", textAlign: "center" }}>
      <h2 style={{ textAlign: "center", color: "white", marginBottom: "10px", background:"red" }}>
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

      {/* Product cards (static like FeaturedProduct) */}
   
      <div  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "30px",
    justifyContent: "center",
    
  }}>

        {promoProducts.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
             width: "100%",   
            maxWidth: "250px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
           <img
             src={item.image}
             alt={item.name}
   style={{
    width: "100%",
    height: "180px",
    objectFit: "contain",
    borderRadius: "5px",
    boxSizing: "border-box",
  }}
/>

            <h4>{item.name}</h4>
            <p>₦{item.price}</p>

            {/* Shop Now Button */}
            <button
              onClick={() => navigate("/promo-sales")}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              🛒 Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoSalesPage;
