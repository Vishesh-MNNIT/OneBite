import { displayData } from "../controllers/shop.controller.js";
import { Router } from "express";
const router = Router();

router.route("/displayData").get(displayData);// buyer

export default router;
