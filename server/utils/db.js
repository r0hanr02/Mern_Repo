import mongoose from "mongoose";
const URI = "mongodb://localhost:27017";
const connectDb = async () => {
  if (!URI) {
    console.error("❌ MONGODB_URI is not defined in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(URI);
    console.log("✅ Connected successfully to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // stop the server if DB connection fails
  }
};

export default connectDb;
