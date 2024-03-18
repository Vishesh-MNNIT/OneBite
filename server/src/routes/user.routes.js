import {Router} from "express"
import { loginUser, logoutUser, registerUser , forgotPassword,resetPassword} from "../controllers/user.controller.js";
import { verifyJWTUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post( registerUser)

    router.route("/login").post(loginUser)
    router.route("/forgotPassword").post(forgotPassword)
    router.route("/reset-password/:id/:token").post(resetPassword)
   // routes created
    // secured routes

    router.route("/logout").post(verifyJWTUser,logoutUser)

export default router