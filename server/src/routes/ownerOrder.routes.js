import {Router} from "express"
import { userOrder,allOrders,userPayment,addPoints,displayPoints} from "../controllers/onwerOrder.controller.js"
import { itemRating } from "../controllers/rating.controller.js";

const router = Router();

router.route("/myOrder").post( userOrder);
router.route("/payment").post( userPayment);
router.route("/allOrders").post(allOrders);
router.route("/addPoints").post(addPoints);
router.route("/ratings").post(itemRating);
router.route("/displayPoints").post(displayPoints)

export default router
