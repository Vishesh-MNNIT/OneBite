import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { OwnerInfo } from "../models/ownerInfo.model.js";
import { User } from "../models/user.model.js";


 const verifyJWTOwner = asyncHandler(async(req,res,next) =>{
       
   try {
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
     console.log(token);
     if( !token){
         return res.status(401).json({
            sucess:false,
            message:"Unauthorized access"
         })
     }
 
     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
 
     const ownerinfo = OwnerInfo.findById(decodedToken?._id).select(" -password -refreshToken")
 
     if (!ownerinfo) {     
        return res.status(401).json({
            sucess:false,
            message:"Invalid token"
         })
     }
 
     req.ownerinfo = ownerinfo;
     next()
   } catch (error) {
    return res.status(401).json({
        sucess:false,
        message:"Invalid token"
     })
   }
})


 const verifyJWTUser = asyncHandler(async(req,res,next) =>{
       
   try {
   //   const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
   //    console.log(token);
  
   const token = req.body.token;
   
     if( !token){
         return res.status(401).json({
            sucess:false,
            message:"Unauthorized access"
         })
     }
 
     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
     
   //   console.log(decodedToken._id);

     const user = User.findById(decodedToken?._id).select(" -password -refreshToken")
 
     if (!user) {     
        return res.status(401).json({
            sucess:false,
            message:"Invalid token"
         })
     }
    
     req.user = user;

     next()
   } catch (error) {
    return res.status(401).json({
        sucess:false,
        message:"Invalid token"
     })
   }
})

export {verifyJWTOwner,verifyJWTUser}