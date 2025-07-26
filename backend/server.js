// ✅ Load environment first
import "./LoadEnv.js";

// ✅ Then import everything else
import express from "express";
import cors from "cors"; // ✅ Add this
import session from "express-session";
import passport from "passport";
import "./config/db.js";
import "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ✅ Allow CORS from frontend
app.use(cors({
  origin: "http://localhost:5173", // Your React frontend
  credentials: true, // Allows cookies/session
}));

app.use(express.json());

// ✅ Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// ✅ Passport setup
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ DevSync backend is running");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
