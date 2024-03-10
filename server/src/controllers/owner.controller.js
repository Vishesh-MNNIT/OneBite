import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {Owner} from "../models/owner.model.js"


const registerOwner = asyncHandler( async(req,res) =>{
     
    
      const {email,password,confirmPassword} = req.body;


      if(!(email)){
        throw new ApiError(400," Email is required");
      }
      
      if( password !== confirmPassword){
        throw new ApiError(400," Password and confirm password are not same ");
      }
     

      
      const existedUser = await Owner.findOne({
        email
    })
     
    if (existedUser) {
        throw new ApiError(409, "User with email  already exists")
    }

    const owner =  await Owner.create({       
        email: email,
        password: password
    })
   
    const createdUser = await Owner.findById(owner._id).select(
        "-password -refreshToken"
     )

     if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
     }

     return res.status(201).json(
        new ApiResponse(200,createdUser,"Owner Registered Successfully")
     )

   })



const loginOwner = asyncHandler(async(req,res)=>{

    const {email,password} = req.body;

    if(!(email)){
      throw new ApiError(400,"Username or email is required");
    }

    const owner =  await Owner.findOne({
          $or: [{username},{email}]
      })

      if(!owner){
          throw new ApiError(404,"owner doesn't found")
      }

    const isPasswordValid =  await owner.isPasswordCorrect(password)

    if(!isPasswordValid){
      throw new ApiError(401,"Invalid owner credentials")
  }
   
 

  return res.status(200)
  .json(
      new ApiResponse(
          200,owner,
          "user loggedIn successfully"
      ),    
  )
})


const logoutOwner = asyncHandler(async(req,res) =>{  
    return res.status(201).json(
       new ApiResponse(200,{},"User Logout Successfully")
     )
})


export {
    registerOwner, loginOwner,logoutOwner
}