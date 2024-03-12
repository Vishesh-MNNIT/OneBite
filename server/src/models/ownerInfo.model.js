import mongoose, { Schema } from "mongoose";
const ownerInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const OwnerInfo = mongoose.model("OwnerInfo", ownerInfoSchema);
