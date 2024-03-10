import {Router} from "express"
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";


const router = Router();

router.route("/register").post( registerUser)

    router.route("/login").post(loginUser)
    
   // routes created
    // secured routes

    router.route("/logout").post( logoutUser)

export default router