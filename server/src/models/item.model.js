import mongoose, { Schema } from "mongoose";
const itemSchema = new Schema({
  shopkeeperId: {
    type: String,
    //  ref:"OwnerInfo"
  },
  productName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

export const Item = mongoose.model("Item", itemSchema);