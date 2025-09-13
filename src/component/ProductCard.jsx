
import { useState } from "react";

function ProductCard({ name, price, image, benefits, onAddToCart }) {
  const [flipped, setFlipped] = useState(false);
   const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart({ name, price, image });
    setIsAdded(true);

    // Reset after 2.5s
    setTimeout(() => setIsAdded(false), 2500);
  };

  return (
   <div
  style={{
    perspective: "1000px",
    width: "100%",        
    maxWidth: "220px",    
    height: "300px",
    cursor: "pointer",
    position: "relative",
    zIndex: flipped ? 10 : 1,
  }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: "150px",  
            height: "150px",     
            objectFit: "contain", 
            margin: "0 auto",     
            display: "block", }}
          />
          <h4 style={{ margin: "10px 0" }}>{name}</h4>
          <p style={{ color: "green", fontWeight: "bold" }}>₦{price}</p>
           <button
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={(e) => {
             e.stopPropagation();
    setFlipped(true);
            }}
          >
            See details
          </button>
        </div>

        {/* Back Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
         {/* Benefits as a list */}
  <ul style={{ textAlign: "left", fontSize: "14px", marginBottom: "10px" }}>
    <h1 style={{color:"orange"}}>Benefits</h1>
    {benefits.split(",").map((benefit, index) => (
      <li key={index}>{benefit.trim()}</li>
    ))}
  </ul>
           {/* Buy Now / Added to Cart */}
          <button
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              backgroundColor: isAdded ? "gray" : "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
            onClick={handleAdd}
            disabled={isAdded}
          >
           {isAdded ? "🛒 Added to Cart" : " Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
