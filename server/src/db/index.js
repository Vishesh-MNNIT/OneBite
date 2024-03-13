import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { OwnerInfo } from "../models/ownerInfo.model.js";
import { Item } from "../models/item.model.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    // console.log(connectionInstance);
    // console.log(\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host});
    const item = await Item.find();
    global.Item = item;
    const shop = await OwnerInfo.find();
    // console.log(shop);
    global.shopKeeperInfo = shop;
    const ojhaItems = await Item.find({
      shopkeeperId: "65ef36a355e57b08e15d4742",
    });
    global.ojhaItems = ojhaItems;

    const pilaiItems = await Item.find({
      shopkeeperId: "65ef354955e57b08e15d4740",
    });
    global.pilaiItems = pilaiItems;
    const rajItems = await Item.find({
      shopkeeperId: "65ef376f55e57b08e15d4743",
    });
    global.rajItems = rajItems;
    const yamunaItems = await Item.find({
      shopkeeperId: "65ef37c555e57b08e15d4744",
    });
    global.yamunaItems = yamunaItems;
    const chaiWalaItems = await Item.find({
      shopkeeperId: "65ef384955e57b08e15d4745",
    });
    global.chaiWalaItems = chaiWalaItems;
    const dewsisItems = await Item.find({
      shopkeeperId: "65ef38eb55e57b08e15d4746",
    });
    global.dewsisItems = dewsisItems;
    //console.log(dewsisItems);
    // console.log(shop);
    // shop_data.find({}).toArray(function(err,data){
    //     console.log("Hi")
    //     if(err) console.log(err);
    //     else{
    //         console.log(data);
    //         global.ownerinfo = data
    //     }
    //  })
    //          shop_data.find(function(err,workings)
    //     {
    //          if(err)
    //           console.log(err);
    //         else
    //         { console.log( workings);
    //           res.send(workings);}
    //     });
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
