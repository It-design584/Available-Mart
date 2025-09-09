import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import FeaturedProduct from "./component/FeaturedProduct";
import PromoSalesPage from "./component/PromoSalesPage";
import PromoSales from "./component/PromoSales";
import ScrollToTop from "./component/ScrollToTop";
import ProductCard from "./component/ProductCard";
import Cart from "./component/cart";
import Footer from "./component/Footer";
import "./App.css"; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [message, setMessage] = useState(""); // ✅ success message state

  // Load from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // ✅ Show success message
    setMessage(`${product.name} added to cart! Check your cart for items selected.`);
    setTimeout(() => setMessage(""), 3000); // Auto-hide after 3s
  };

  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Products list with categories
  const products = [
    { name: "Rice (50kg Bag)", price: "55,000", image: "Rice.jpeg", category: "Grains", benefits: "Rich in carbohydrates, provides long-lasting energy, and a staple food in many homes." },
    { name: "Beans (50kg Bag)", price: "48,000", image: "Beans.jpeg", category: "Grains", benefits: "High in protein, supports muscle growth, aids digestion, and very filling." },
    { name: "Yam Tuber", price: "3,500", image: "yam.jpeg", category: "Grains", benefits: "Excellent source of fiber, vitamins, and minerals; keeps you full and energized." },
    { name: "Garri (50kg Bag)", price: "30,000", image: "garri.jpeg", category: "Grains", benefits: "Affordable, versatile, and quick to prepare; rich in carbohydrates for energy." },

    { name: "Palm Oil (5 Litres)", price: "7,500", image: "palm oil.jpeg", category: "Oils", benefits: "Contains vitamin E and antioxidants, supports heart health, and adds flavor to meals." },
    { name: "Groundnut Oil (5 Litres)", price: "8,000", image: "groundnut oil.jpeg", category: "Oils", benefits: "Good source of healthy fats, lowers cholesterol, and enhances meal taste." },

    { name: "Indomie Carton (40 packs)", price: "5,200", image: "indomie.jpeg", category: "Packaged Foods", benefits: "Quick to prepare, tasty, affordable, and convenient for busy days." },
    { name: "Peak Milk Tin", price: "750", image: "peak.jpeg", category: "Dairy", benefits: "Rich in calcium and protein, strengthens bones, and adds nutrition to meals and drinks." },
    { name: "Milo Refill (500g)", price: "3,200", image: "milo.jpeg", category: "Beverages", benefits: "Packed with vitamins and minerals, boosts energy, and perfect for breakfast." },
    { name: "Sugar (1kg)", price: "1,200", image: "sugar.jpeg", category: "Essentials", benefits: "Provides quick energy, enhances the taste of food and drinks, and easy to use." },
    { name: "Salt (1kg)", price: "500", image: "salt.jpeg", category: "Essentials", benefits: "Essential mineral for health, adds flavor to meals, and preserves food." },

    { name: "Detergent (Omo 1kg)", price: "2,000", image: "detergent.jpeg", category: "Household", benefits: "Removes tough stains, keeps clothes fresh and bright, and gentle on fabrics." },
    { name: "Toilet Roll (Pack of 10)", price: "2,500", image: "toilet.jpeg", category: "Household", benefits: "Soft, hygienic, strong, and ensures personal cleanliness daily." },

    { name: "Bread (Family Loaf)", price: "1,200", image: "bread.jpeg", category: "Bakery", benefits: "Rich in carbohydrates, easy to eat, and perfect with tea or as a snack." },
    { name: "Eggs (Crate of 30)", price: "3,000", image: "egg.jpeg", category: "Dairy", benefits: "High in protein, supports body growth, and versatile for many meals." },
    { name: "Soft Drink (Coca-Cola 50cl)", price: "300", image: "coke.jpeg", category: "Drinks", benefits: "Refreshing, energizing, and perfect for relaxation or parties." },
  { name: "Barley (50kg Bag)", price: "45,000", image: "barley.jpeg", category: "Grains", benefits: "Rich in beta-glucan, lowers cholesterol; ideal for soups or stews." },
  { name: " Buckwheat(50kg Bag)", price: "52,000", image: "buckwheat.jpeg", category: "Grains", benefits: "Gluten-free, packed with protein; perfect for pancakes or noodles." },
 

  // Oils (original: Palm Oil, Groundnut Oil)
  { name: "Coconut Oil (5 Litres)", price: "9,000", image: "https://images.unsplash.com/photo-1588413333412-82148535db53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D", category: "Oils", benefits: "Rich in MCTs, nourishes skin/hair; ideal for cooking." },
  { name: "Sesame Oil (1 Litre)", price: "3,500", image: "https://media.istockphoto.com/id/1565066747/photo/extra-virgin-olive-oil-in-green-glass-bottle-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=ibapBTWLaCAuhj553XAi7-UUY-a3sEpdevrsRe52Rrs=", category: "Oils", benefits: "Antioxidant-packed, nutty flavor; elevates stir-fries." },
  { name: "Sunflower Oil (5 Litres)", price: "6,500", image: "https://media.istockphoto.com/id/2202878495/photo/large-plastic-unbranded-5-liter-1-gal-bottles-full-of-cooking-oil-on-supermarket-shelf.webp?a=1&b=1&s=612x612&w=0&k=20&c=CbSsx7wOs_loAqAfPyfvjS9kMInYIWmzYTQ5aGNFpDc=", category: "Oils", benefits: "Vitamin E-rich, low in sat fats; great for frying." },
  { name: "Soybean Oil (5 Litres)", price: "6,200", image: "https://media.istockphoto.com/id/1490062930/photo/soy-oil-bottle-and-dried-soybeans.webp?a=1&b=1&s=612x612&w=0&k=20&c=vQQV8h9dUrJQJWpaniCHMDfFj8VBkknejZpPSpn6IfY=", category: "Oils", benefits: "Polyunsaturated fats support heart health; versatile for dressings." },
  { name: "Olive Oil (1 Litre)", price: "8,000", image: "https://media.istockphoto.com/id/644083378/photo/olive-oil-bottle-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TFjOmonF9_dvOb6N-j_tR4ONW1X1y-ZZ9a77lqPL8zA=", category: "Oils", benefits: "Monounsaturated fats reduce inflammation; perfect for salads." },
  { name: "Avocado Oil (1 Litre)", price: "10,000", image: "https://media.istockphoto.com/id/938702526/photo/avocado-oil-on-white-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=FZSv5z3Mbpvf8_B6FXXbidXqZg0135wWHCd3EWthvsM=", category: "Oils", benefits: "High smoke point, vitamin E-rich; suits sautéing." },
  { name: "Walnut Oil (500ml)", price: "4,500", image: "https://images.unsplash.com/photo-1711374489633-1f3659ebe757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdhbG51dCUyME9pbCUyMCg1MDBtbCl8ZW58MHx8MHx8fDA%3D", category: "Oils", benefits: "Omega-3s boost brain health; drizzle over salads." },
  { name: "Flaxseed Oil (500ml)", price: "3,800", image: "https://images.unsplash.com/photo-1672330413099-4e57b686760d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmxheHNlZWQlMjBPaWwlMjAoNTAwbWwpfGVufDB8fDB8fHww", category: "Oils", benefits: "ALA omega-3s aid heart health; blend into smoothies." },
  

  // Packaged Foods (original: Indomie)
  { name: "Golden Penny Noodles (Carton of 40 packs)", price: "5,500", image: "goldenPenny.jpeg", category: "Packaged Foods", benefits: "Similar to Indomie; quick, tasty, and budget-friendly for families." },
  { name: "Spagetti", price: "5,400", image: "https://images.unsplash.com/photo-1718043934012-380f4e72a1cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhdyUyMGFuZCUyMHBhY2thZ2VkJTIwc3BhZ2hldHRpfGVufDB8fDB8fHww", category: "Packaged Foods", benefits: "Affordable, quick-cooking; staple for busy weeknights." },
  { name: "Indomie Special Chicken (Carton of 40 packs)", price: "5,600", image: "indomieSpecial.jpeg", category: "Packaged Foods", benefits: "Enhanced flavor with seasoning; instant comfort food." },
  { name: "Indomie Fried Chicken (Carton of 40 packs)", price: "5,700", image: "indomieFried.jpeg", category: "Packaged Foods", benefits: "Fried chicken flavor; crispy, satisfying, and ready fast." },
  

  // Dairy (original: Peak Milk, Eggs)
  { name: "Cowbell Milk (1 Litre)", price: "550", image: "cowbell.jpeg", category: "Dairy", benefits: "Rich in calcium and protein; affordable, widely available, perfect for tea/coffee." },
  { name: "LanceWood", price: "600", image: "https://images.unsplash.com/photo-1709620050386-ed31904f8ff7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWluJTIweW9naHVydHxlbnwwfHwwfHx8MA%3D%3D", category: "Dairy", benefits: "Fresh, natural, locally sourced; supports small-scale farmers, rich in nutrients." },
  { name: "Hollandia Yoghurt (1 Litre)", price: "1,400", image: "hollandiaYoghurt.jpeg", category: "Dairy", benefits: "Probiotic-rich, aids digestion; comes in various flavors like strawberry or vanilla." },
 
  // Beverages (original: Milo)
  { name: "Bournvita (500g Refill)", price: "3,300", image: "bournvita.jpeg", category: "Beverages", benefits: "Fortified with vitamins A/B/C; supports growth, ideal for children." },
  { name: "Ovaltine (500g Refill)", price: "3,400", image: "ovaltine.jpeg", category: "Beverages", benefits: "Malt-based, rich in vitamins; adds flavor to milk, nostalgic for many." },
  
  // Essentials (original: Sugar, Salt)
  { name: "Brown Sugar (1kg Pack)", price: "1,300", image: "brownSugar.jpeg", category: "Essentials", benefits: "Contains molasses, adds caramel flavor; perfect for baking or sweetening drinks." },
  
  { name: "Honey (500g Jar)", price: "2,500", image: "honey.jpeg", category: "Essentials", benefits: "Natural sweetener, rich in antioxidants; soothes sore throats, great for tea." },

  { name: "Xylitol (500g Pack)", price: "2,200", image: "xylitol.jpeg", category: "Essentials", benefits: "Sugar alcohol, low calorie; prevents tooth decay, suitable for baking." },
  

  // Household (original: Detergent, Toilet Roll)
  { name: "Ariel Detergent (1kg)", price: "2,200", image: "ariel.jpeg", category: "Household", benefits: "Removes tough stains, keeps clothes bright; gentle on colors." },
  
  { name: "Toilet Paper (Pack of 20 Rolls)", price: "3,000", image: "toilet.jpeg", category: "Household", benefits: "Ultra-soft, strong, double-ply; ensures maximum hygiene." },
  
  { name: "Hand Sanitizer (500ml Bottle)", price: "1,500", image: "handSanitizer.jpeg", category: "Household", benefits: "Kills germs instantly, portable; great for on-the-go hygiene." },
 
  { name: "Dishwashing Liquid (500ml Bottle)", price: "700", image: "dishwash.jpeg", category: "Household", benefits: "Cuts through grease, leaves dishes sparkling; gentle on hands." },
 

  // Bakery (original: Bread)
  { name: "Whole Wheat Bread (Family Loaf)", price: "1,400", image: "wholeWheatBread.jpeg", category: "Bakery", benefits: "Rich in fiber, vitamins; keeps you full, ideal for sandwiches." },
 
  { name: "Butter bread", price: "1,200", image: "butter.jpeg", category: "Bakery", benefits: "Crusty exterior, soft interior; great for sandwiches or dipping." },
  { name: "Croissant (Pack of 6)", price: "1,800", image: "croissant.jpeg", category: "Bakery", benefits: "Buttery, flaky; perfect for breakfast with coffee or jam." },
  { name: "Chocolate Chip Cookies (Pack of 12)", price: "2,000", image: "cookies.jpeg", category: "Bakery", benefits: "Chewy, chocolatey; sweet treat, great for snacks or gifts." },

  { name: "Banana Bread (500g)", price: "1,600", image: "bananaBread.jpeg", category: "Bakery", benefits: "Moist, sweet; banana flavor, great for breakfast or tea time." },



  ];

  // Get all unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
    
      <Navbar />

      {/* ✅ Success message */}
      {message && (
        <div
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px",
            textAlign: "center",
            position: "fixed",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {message}
        </div>
      )}

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
         <div>
      <Hero />
      <FeaturedProduct products={products} />
      <PromoSales products={products} />
    </div>} />
     {/* Promo Sales Page */}
  <Route
    path="/promo-sales"
    element={<PromoSalesPage products={products} onAddToCart={addToCart} />}
  />

        {/* Shop Page */}
        <Route
          path="/shop"
          element={
            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                Our Products
                <span
                  style={{
                    display: "block",
                    height: "3px",
                    width: "60%",
                   background: "orange",
                    color: "white",
                    margin: "8px auto 0",
                    borderRadius: "2px",
                  }}
                ></span>
              </h2>

              {/* Category Filter */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "8px 15px",
                      borderRadius: "5px",
                      border: "1px solid orange",
                      backgroundColor:
                        selectedCategory === cat ? "orange" : "white",
                      color: selectedCategory === cat ? "white" : "orange",
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {filteredProducts.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    {...product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              onRemoveItem={removeItem}
              onClearCart={clearCart}
            />
          }
        />
         <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      
       <Footer />
    </div>
    

  );
}

export default App;
