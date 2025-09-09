import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PromoSales({ products }) {
  const [promoProducts, setPromoProducts] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    const pickPromoProducts = () => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  
    setPromoProducts(pickPromoProducts());
  }, [products]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff8e1", textAlign: "center" }}>
      <h2 style={{ color: "#ff6f00", marginBottom: "15px" }}>🔥 Promo Sales</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {promoProducts.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ffd54f",
              borderRadius: "8px",
              padding: "10px",
              width: "220px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "5px" }}
            />
            <h4>{item.name}</h4>
            <p>₦{item.price}</p>
            <button
              style={{
                padding: "8px 12px",
                backgroundColor: "#ff6f00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "5px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
               onClick={() => navigate("/promo-sales")}
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

export default PromoSales;
