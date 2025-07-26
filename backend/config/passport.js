import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

// ✅ Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
        }

        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );

        user.token = token;
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// ✅ Serialize user to session
passport.serializeUser((user, done) => {
  done(null, user._id); // Only storing ID in session
});

// ✅ Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
