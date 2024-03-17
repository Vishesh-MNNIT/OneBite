import { displayData,getItems,getRatedItems } from "../controllers/shopKeeper.controller.js";
import { Router } from "express";

const router = Router();

router.route("/displayData").get(displayData);
router.route("/mostSoldItems").get(getItems);
router.route("/highestRatedItems").get(getRatedItems);

export default router;
