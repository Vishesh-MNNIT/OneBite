import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { OwnerInfo } from "../models/ownerInfo.model.js";
import { Item } from "../models/item.model.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    const item = await Item.find();
    global.Item = item;
    const shop = await OwnerInfo.find();
    global.shopKeeperInfo = shop;

    const shopkeepers = await OwnerInfo.find();
    const shopkeeperIds = shopkeepers.map((shopkeeper) => shopkeeper._id);

    const itemsByShopkeeper = {};
    let index = 0;
    for (const shopkeeperId of shopkeeperIds) {
      const items = await Item.find({ shopkeeperId });
      itemsByShopkeeper[index] = items;
      index++;
    }

    global.items = itemsByShopkeeper;
    console.log(global.items[0]);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
