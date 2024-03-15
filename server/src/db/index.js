import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { OwnerInfo } from "../models/ownerInfo.model.js";
import { Item } from "../models/item.model.js";
import { OwnerOrder } from "../models/ownerOrder.model.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    // console.log(connectionInstance);
    //console.log(\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host});
    const order = await OwnerOrder.find();
    global.Order = order;
    const item = await Item.find();
    global.Item = item;
    // console.log(item);
    const shop = await OwnerInfo.find();
    // console.log(shop);
    global.shopKeeperInfo = shop;

    const shopKeepers = await OwnerInfo.find();
    const shopKeeperIds = shopKeepers.map((shopkeeper) => shopkeeper._id);
    // console.log(shopKeeperIds)
    const itemsByShopkeeper = {};
    let index = 0;
    for (const shopKeeperId of shopKeeperIds) {
      //console.log(shopKeeperId)
      const items = await Item.find({ shopkeeperId: shopKeeperId });
      //console.log(items);
      itemsByShopkeeper[index] = items;
      index++;
    }
    global.items = itemsByShopkeeper;
    //onsole.log(global.items);
   //console.log(global.Order);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
