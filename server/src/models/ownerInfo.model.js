import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
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
  refreshToken: {
    type: String
}
});


ownerInfoSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          name:this.name,
          image:this.image
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
      
  )
  
}

ownerInfoSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
      
  )
  
}



export const OwnerInfo = mongoose.model("OwnerInfo", ownerInfoSchema);
