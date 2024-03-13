import {Router} from "express";
import { registerOwner,loginOwner,logoutOwner} from "../controllers/owner.controller.js";
import { ownerInfoDetails } from "../controllers/ownerInfo.controller.js";
import { itemInfoDetails } from "../controllers/item.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWTOwner } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post( registerOwner);
router.route("/login").post(loginOwner);
router.route("/logout").post(logoutOwner);
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
            name:"productImage",
            maxCount:1
        }
    ]),
    verifyJWTOwner,itemInfoDetails)

export default router