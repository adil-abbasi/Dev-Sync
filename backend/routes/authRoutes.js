// backend/routes/authRoutes.js

import express from "express";
import passport from "passport";

const router = express.Router();

// ✅ Start Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// ✅ Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    session: true,
  }),
  (req, res) => {
    // ✅ Redirect with token as query param to frontend
    const token = req.user.token;
    res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
  }
);

// ❌ Optional: Authentication failure route
router.get("/failure", (req, res) => {
  res.status(401).send("Authentication Failed");
});

export default router;
