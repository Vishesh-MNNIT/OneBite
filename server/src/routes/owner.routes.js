import {Router} from "express";
import { registerOwner,loginOwner,logoutOwner} from "../controllers/owner.controller.js";
const router = Router();

router.route("/register").post( registerOwner);
router.route("/login").post(loginOwner);
router.route("/logout").post(logoutOwner);

export default router