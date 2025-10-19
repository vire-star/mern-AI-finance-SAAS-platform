import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";

const authRoutes = Router();

// ✅ ADD CONSOLE LOG
console.log("🔥 Auth routes loaded");

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);

// ✅ ADD TEST ROUTE
authRoutes.get("/test", (req, res) => {
  res.json({ message: "Auth routes working!" });
});

export default authRoutes;
