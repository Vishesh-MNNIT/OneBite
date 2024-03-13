import { shopKeeperItemsData } from "../controllers/shopKeeperItems.controller.js";
import { Router } from "express";

const router = Router();
router.route("/shopKeeperItems").get(shopKeeperItemsData);

export default router;
