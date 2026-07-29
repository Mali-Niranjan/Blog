// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import blogRoutes from "./routes/blogRoutes.js";

// dotenv.config();

// const app = express();

// // Connect MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Test Route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Blog Management API Running Successfully",
//   });
// });

// // Blog Routes
// app.use("/api/blogs", blogRoutes);

// // 404 Route
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//   });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

// Fix for __dirname when using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (Uploaded Thumbnail Images) from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blog Management API Running Successfully",
  });
});

// Blog Routes
app.use("/api/blogs", blogRoutes);

// 404 Route
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});