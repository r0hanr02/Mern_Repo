// 1️⃣ Load environment variables first
import dotenv from "dotenv";
dotenv.config({
  override: true,
}); // must be at top
import express from "express";
import connectDb from "./utils/db.js";
import router from "./router/auth-router.js";

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());

// // Routes
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("This is the Home Page");
});

app.get("/register", (req, res) => {
  res.status(200).send("This is the Register Page");
});

// Connect to MongoDB then start server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});
