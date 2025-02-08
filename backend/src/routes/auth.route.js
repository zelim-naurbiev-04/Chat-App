// import express from "express";
// import { login, logout, signup } from "../controllers/auth.controller.js";
 import { protectRoute } from "../middleware/auth.middleware.js";
// import { updateProfile } from "../controllers/auth.controller.js";
import {
    signup,
    login,
    logout,
    updateProfile,
    checkAuth,
} from '../controllers/auth.controller.js';
import express from "express"

const router = express.Router();


router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth)

export default router;