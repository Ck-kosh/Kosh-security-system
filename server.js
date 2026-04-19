const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake database
let products = [
  { id: 1, name: "Dahua SMART ANPR Camera", price: 50000 },
  { id: 2, name: "Uniview 4MP Bullet", price: 5500 },
  { id: 3, name: "4G Solar CCTV Camera V380", price: 9000 },
  { id: 4, name: "4G Solar Floodlight PTZ Camera", price: 24000 },
  { id: 5, name: "Tiandy PTZ Camera", price: 27000 },
  { id: 6, name: "Indoor Wireless Camera", price: 5600 },
  { id: 7, name: "Dahua 8 Channel DVR", price: 6000 },
  { id: 8, name: "Hikvision 16 Channel DVR", price: 13500 }
];

let cart = [];

// 📦 GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// 🛒 ADD to cart
app.post("/api/cart", (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  cart.push({ ...product, quantity });

  res.json({ message: "Added to cart", cart });
});

// 🧾 GET cart
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// 📩 Submit request form
app.post("/api/request", (req, res) => {
  const { type, quantity, message } = req.body;

  console.log("New request:", { type, quantity, message });

  res.json({ message: "Request submitted successfully" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});