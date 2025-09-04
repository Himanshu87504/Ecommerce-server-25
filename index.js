import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cloudinary from "cloudinary";
import cors from "cors";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();

app.use(express.json());

// ✅ CORS setup (your frontend + localhost for dev)
app.use(
  cors({
    origin: [
      "http://localhost:5173",             // for development
      "https://ecommerce-frontend-25.vercel.app", // your deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // needed if you use cookies / JWT with credentials
  })
);

const port = process.env.PORT;

// importing routes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from "./routes/address.js";
import orderRoutes from "./routes/order.js";

// root route
app.get("/", (req, res) => {
  res.send("Hi i am Himanshu 🚀 Backend is running fine!");
});

// using routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
  connectDb();
});
