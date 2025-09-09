import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const heroImages = ["HERO0.jpg", "HERO1.jpg", "HER014.jpg"];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          top: "50%",
          transform: "translateY(-50%)",
          animation: "slideUp 2s ease-in-out forwards",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to Available Mart 🛒
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "50px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Shop Anything. Anytime. Anywhere.
        </p>
        <button
          style={{
            marginTop:"30px",
            padding: "12px 24px",
            background: "orange",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            animation: "pulseGlow 1.5s infinite",
          }}
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(-50%); opacity: 1; }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px crimson;
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 40px gold;
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
