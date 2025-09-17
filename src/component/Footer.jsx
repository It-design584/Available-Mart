import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "orange",
    color: "white",
    marginTop: "auto",       
    padding: "48px 24px 24px",
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    maxWidth: "1152px",
    margin: "0 auto",
    width: "100%",
  };

  const infoStyle = {
    flex: 2,
    minWidth: "200px",
  };

  const linksStyle = {
    flex: 1,
    minWidth: "150px",
  };

  const linkStyle = {
    color: "#fed7aa",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    display: "block",
    marginBottom: "8px",
  };

  const bottomBarStyle = {
    borderTop: "1px solid #fb923c",
    textAlign: "center",
    paddingTop: "16px",
    marginTop: "32px",
    fontSize: "14px",
  };

  const socialStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "16px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Company Info */}
        <div style={infoStyle}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Available Mart</h3>
          <p style={{ color: "#fed7aa", lineHeight: "1.6" }}>
            Shop Anything. Anytime. Anywhere.
          </p>

          {/* Social Links */}
          <div style={socialStyle}>
            {/* WhatsApp */}
  <a
    href="https://wa.me/2348168019962" 
    style={{ color: "white", textDecoration: "none" }}
    onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
    aria-label="WhatsApp"
  >
    <svg
      style={{ width: "24px", height: "24px" }}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2.004c-5.52 0-10 4.477-10 9.997 0 1.763.467 3.478 1.357 4.997l-1.432 5.23 5.36-1.405c1.452.796 3.08 1.177 4.715 1.177h.002c5.52 0 9.998-4.478 9.998-9.999 0-2.67-1.04-5.182-2.93-7.07a9.935 9.935 0 00-7.07-2.927zm0 18.276h-.002a8.27 8.27 0 01-4.194-1.148l-.3-.178-3.178.833.85-3.106-.196-.32a8.27 8.27 0 01-1.243-4.402c0-4.565 3.708-8.273 8.273-8.273 2.21 0 4.29.863 5.85 2.423a8.22 8.22 0 012.425 5.85c0 4.565-3.708 8.271-8.285 8.271zm4.59-6.189c-.25-.124-1.48-.73-1.71-.812-.23-.083-.398-.124-.565.124-.166.25-.648.812-.795.979-.146.167-.291.188-.541.063-.25-.125-1.055-.389-2.01-1.239-.74-.66-1.24-1.48-1.385-1.73-.146-.25-.016-.386.11-.51.113-.113.25-.292.375-.438.125-.146.167-.25.25-.416.083-.167.042-.312-.021-.438-.062-.124-.565-1.355-.774-1.855-.203-.49-.41-.42-.565-.428-.146-.01-.312-.012-.478-.012-.167 0-.438.063-.667.312-.229.25-.875.855-.875 2.084 0 1.229.896 2.416 1.02 2.584.125.166 1.76 2.687 4.268 3.77.596.257 1.062.411 1.424.527.598.19 1.141.163 1.573.099.48-.072 1.48-.604 1.688-1.188.208-.584.208-1.084.146-1.188-.062-.104-.229-.167-.48-.292z" />
    </svg>
  </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/chemistitonium"
              style={{ color: "white", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              aria-label="Facebook"
            >
              <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/Joseph itoro"
              style={{ color: "white", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "#fed7aa")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              aria-label="Instagram"
            >
              <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-.122 1.715c-.928-.875-2.079-1.365-3.376-1.365s-2.448.49-3.376 1.365c-.875.928-1.365 2.079-1.365 3.376s.49 2.448 1.365 3.376c.928.875 2.079 1.365 3.376 1.365s2.448-.49 3.376-1.365c.875-.928 1.365-2.079 1.365-3.376s-.49-2.448-1.365-3.376z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com/@Chemist14217"
              style={{ color: "white", textDecoration: "none" }}
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
        <div style={linksStyle}>
          <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>Quick Links</h4>
          <a href="#" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}>About Us</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}>Products</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}>Services</a>
          <a href="#" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#fed7aa")}>Contact</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBarStyle}>
        &copy; {new Date().getFullYear()} Available Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
