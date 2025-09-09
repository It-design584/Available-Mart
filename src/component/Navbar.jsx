import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: "Cart" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-icon">🛒</div>
        <h2 className="logo-text">Available Mart</h2>
      </div>

      {isMobile && (
        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      )}

      {(!isMobile || isMobileMenuOpen) && (
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`nav-link ${
                  hoveredLink === item.to ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredLink(item.to)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* {(!isMobile || !isMobileMenuOpen) && (
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="get-started">Get Started</button>
        </div>
      )} */}

      {/* Add the styles inside a CSS or Tailwind file */}
      <style jsx>{`
        .navbar {
          padding: ${isMobile ? "12px 16px" : "16px 32px"};
          background: orange;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 0;
          z-index: 1000;
          flex-wrap: wrap;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          font-size: ${isMobile ? "20px" : "24px"};
          background: orange;
          padding: ${isMobile ? "6px 10px" : "8px 12px"};
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo-text {
          margin: 0;
          font-size: ${isMobile ? "20px" : "24px"};
          font-weight: 700;
          letter-spacing: -0.025em;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hamburger {
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-links.mobile {
          flex-direction: column;
          gap: 16px;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: orange;
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-size: ${isMobile ? "18px" : "16px"};
          font-weight: 500;
          padding: ${isMobile ? "12px 16px" : "8px 16px"};
          border-radius: 6px;
          transition: all 0.2s ease-in-out;
        }

        .nav-link.hovered {
          color: orange;
          background-color: white;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: ${isMobile ? "8px" : "12px"};
          flex-direction: ${isMobile ? "column" : "row"};
          width: ${isMobile ? "100%" : "auto"};
        }

        .sign-in,
        .get-started {
          width: ${isMobile ? "100%" : "auto"};
          border-radius: 6px;
          padding: ${isMobile ? "6px 12px" : "8px 16px"};
          font-size: ${isMobile ? "12px" : "14px"};
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
        }

        .sign-in {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }

        .get-started {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border: none;
          color: white;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .sign-in:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .get-started:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
