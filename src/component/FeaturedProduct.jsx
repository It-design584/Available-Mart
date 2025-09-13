import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FeaturedProduct({ products }) {
  const [featured, setFeatured] = useState([]);
  const [fade, setFade] = useState(true); 
  const navigate = useNavigate(); 

  
  const pickRandomProducts = () => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  // Initial pick
  useEffect(() => {
    setFeatured(pickRandomProducts());
  }, [products]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setFeatured(pickRandomProducts());
        setFade(true); 
      }, 500); 
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff8e1", textAlign: "center" }}>
      <h2 style={{ color: "#ff6f00", marginBottom: "15px" }}>Our Products</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      {featured.map((item, idx) => (
        <div
          key={idx}
          className={`featured-product-card ${fade ? "fade-in" : "fade-out"}`}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "250px",
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
              height: "150px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <h4>{item.name}</h4>
          <p>₦{item.price}</p>

          {/* Shop Now Button */}
          <button
            onClick={() => navigate("/shop")}
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

export default FeaturedProduct;
