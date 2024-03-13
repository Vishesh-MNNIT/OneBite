import { displayData } from "../controllers/shopKeeper.controller.js";
import { Router } from "express";

const router = Router();

router.route("/displayData").get(displayData);

export default router;