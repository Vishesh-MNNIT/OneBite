import {Router} from "express"
import { userOrder,allOrders,userPayment} from "../controllers/onwerOrder.controller.js"

const router = Router();

router.route("/myOrder").post( userOrder);
router.route("/payment").post( userPayment);
router.route("/allOrders").post(allOrders);

export default router
