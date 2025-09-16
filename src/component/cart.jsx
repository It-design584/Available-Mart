import { useEffect, useState } from "react";

function Cart({ items, onRemoveItem, onClearCart, onUpdateQuantity }) {
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formatPrice = (price) => Number(price.replace(/,/g, ""));
  const total = items.reduce(
    (sum, item) => sum + formatPrice(item.price) * item.quantity,
    0
  );

  // ✅ Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // ✅ Geolocation button
  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setAddress(
          `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`
        );
      },
      (error) => alert("Unable to get location: " + error.message)
    );
  };

  // ✅ Manual submit button
  const handleManualSubmit = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }
    setSuccessMessage(`Order placed successfully! Delivery info: ${address}`);
    setAddress("");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div
      style={{
        minHeight: "100vh", // make full screen height
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ Main cart content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h2>🛒 Shopping Cart</h2>

        {/* ✅ Empty Cart Message */}
        {items.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Fill the cart 🛒
          </p>
        )}

        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <div style={{ flex: 1 }}>
              <h4>{item.name}</h4>
              <p>₦{item.price}</p>

              {/* ✅ Quantity Controls */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  onClick={() =>
                    onUpdateQuantity(item.name, Math.max(1, item.quantity - 1))
                  }
                  style={{
                    padding: "4px 8px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                >
                  ➖
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                  style={{
                    padding: "4px 8px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                >
                  ➕
                </button>
              </div>
            </div>

            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => onRemoveItem(item.name)}
            >
              ❌ Remove
            </button>
          </div>
        ))}

        {/* ✅ Summary */}
        {items.length > 0 && (
          <>
            <h4>
              Total Items: {items.reduce((sum, i) => sum + i.quantity, 0)}
            </h4>
            <h3>Total: ₦{total.toLocaleString()}</h3>

            <button
              onClick={onClearCart}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🗑️ Clear Cart
            </button>

            <button
              onClick={() => alert("Redirecting to checkout...")}
              style={{
                padding: "8px 12px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              💳 Checkout
            </button>
          </>
        )}

        {/* ✅ Delivery Section */}
        {items.length > 0 && (
          <div style={{ marginTop: "30px" }}>
            <h3>Delivery Information</h3>
            <textarea
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            />

            <button
              onClick={handleLocation}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Use My Current Location
            </button>

            <button
              onClick={handleManualSubmit}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                borderRadius: "5px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Address
            </button>
          </div>
        )}

        {/* ✅ Success Message */}
        {successMessage && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
