import {Router} from "express";
import { registerOwner,loginOwner,logoutOwner,orderItems,submitForm,setId,orderDetails} from "../controllers/owner.controller.js";
import { ownerInfoDetails } from "../controllers/ownerInfo.controller.js";
import { itemInfoDetails } from "../controllers/item.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
const router = Router();

router.route("/register").post( registerOwner);
router.route("/login").post(loginOwner);
router.route("/logout").post(logoutOwner);
router.route("/dashboard").post(orderItems);
router.route("/isSubmitted").post(submitForm);
router.route("/setId").post(setId);
router.route("/orderDetails").post(orderDetails);
router.route("/shopdetails").post(
    upload.fields([
        {
            name:"image",
            maxCount:1
        }
    ]),
    ownerInfoDetails);
router.route("/itemsUpload").post(
    upload.fields([
        {
            name:"image",
            maxCount:1
        }
    ]),
    itemInfoDetails)

export default router