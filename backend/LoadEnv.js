// backend/loadEnv.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load the correct .env file from backend folder
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("✅ .env loaded: GOOGLE_CLIENT_ID =", process.env.GOOGLE_CLIENT_ID);
