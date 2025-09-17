"use client"

import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  // const [successMessage, setSuccessMessage] = useState("")
  const [buttonText, setButtonText] = useState("Send Message") // ✅ new state
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

       // ✅ Button feedback instead of popup
    setButtonText("Message Sent Successfully")
    setTimeout(() => setButtonText("Send Message"), 2500)
   
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Success message */}
      {/* {successMessage && (
        <div
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "15px 25px",
            textAlign: "center",
               position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "10px",
            zIndex: 1000,
            boxShadow: "0 4px 15px rgba(40, 167, 69, 0.3)",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {successMessage}
        </div>
      )} */}

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1
            style={{
              fontWeight: "700",
              color: "orange",
              marginBottom: "15px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
          "Your experience is important to us. Leave a comment or reach out to Available Mart-we look forward to hearing from you."
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#2c3e50",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
  <input
    type="text" // or email, textarea
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    style={{
      width: "100%",
      boxSizing:"border-box",
      padding: "15px 20px",
      border: errors.name ? "2px solid #e74c3c" : "2px solid #ecf0f1", // red border if error
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s ease",
    }}
    onFocus={(e) => (e.target.style.borderColor = "#3498db")}
    onBlur={(e) =>
      (e.target.style.borderColor = errors.name ? "#e74c3c" : "#ecf0f1")
    }
  />
  {errors.name && (
    <p style={{ color: "#e74c3c", fontSize: "14px", marginTop: "5px" }}>
      {errors.name} {/* Error message under field */}
    </p>
  )}
</div>


              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "15px 20px",
                    border: errors.email ? "2px solid #e74c3c" : "2px solid #ecf0f1",
                    borderRadius: "10px",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3498db")}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#e74c3c" : "#ecf0f1")}
                />
                {errors.email && <p style={{ color: "#e74c3c", fontSize: "14px", marginTop: "5px" }}>{errors.email}</p>}
              </div>
            </div>

            
            <div style={{ marginBottom: "30px" }}>
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    rows="6"
    style={{
      width: "100%",
      boxSizing:"border-box",
      padding: "15px 20px",
      border: errors.message ? "2px solid #e74c3c" : "2px solid #ecf0f1", 
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s ease",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: "120px",
    }}
    onFocus={(e) => (e.target.style.borderColor = "#3498db")}
    onBlur={(e) => (e.target.style.borderColor = errors.message ? "#e74c3c" : "#ecf0f1")}
  />
  {errors.message && (
    <p style={{ color: "#e74c3c", fontSize: "14px", marginTop: "5px" }}>
      {errors.message} {/* Error message under field */}
    </p>
  )}
</div>


            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px 30px",
               backgroundColor: buttonText === "Message Sent Successfully" ? "green" : "orange", // ✅ change color
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(255, 165, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 6px 20px rgba(255, 165, 0, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 15px rgba(255, 165, 0, 0.3)"
              }}
            >
             {buttonText} {/* ✅ Dynamic text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
