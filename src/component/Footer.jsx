// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "orange", color: "white", marginTop: "64px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "32px",
            marginBottom: "32px",
            "@media (min-width: 768px)": { gridTemplateColumns: "repeat(4, 1fr)" },
          }}
        >
          {/* Company Info */}
          <div style={{ gridColumn: "span 2" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Available Mart</h3>
            <p
              style={{
                color: "#fed7aa",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Your one-stop destination for quality products and exceptional service. We're committed to bringing you
              the best shopping experience.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://www.facebook.com/chemistitonium"
                style={{
                  color: "white",
                  transition: "color 0.2s ease-in-out",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                aria-label="Facebook"
              >
                <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.Instagram.com/Joseph Itoro"
                style={{
                  color: "white",
                  transition: "color 0.2s ease-in-out",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                aria-label="Instagram"
              >
                <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-.122 1.715c-.928-.875-2.079-1.365-3.376-1.365s-2.448.49-3.376 1.365c-.875.928-1.365 2.079-1.365 3.376s.49 2.448 1.365 3.376c.928.875 2.079 1.365 3.376 1.365s2.448-.49 3.376-1.365c.875-.928 1.365-2.079 1.365-3.376s-.49-2.448-1.365-3.376z" />
                </svg>
              </a>
              <a
                href="https://www.Twitter.com/chemist itonium"
                style={{
                  color: "white",
                  transition: "color 0.2s ease-in-out",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                aria-label="Twitter"
              >
                <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fed7aa",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fed7aa",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}
                >
                  Products
                </a>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fed7aa",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}
                >
                  Services
                </a>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#fed7aa",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #fb923c",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            "@media (min-width: 768px)": { flexDirection: "row" },
          }}
        >
          <p style={{ color: "#fed7aa", fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Available Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
