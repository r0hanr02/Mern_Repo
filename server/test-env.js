import { config } from "dotenv";

config(); // must be at top

console.log("ALl ENV VARIABLES");
console.log("MONGODB_URI:",);
console.log("PORT:", process.env.PORT);
