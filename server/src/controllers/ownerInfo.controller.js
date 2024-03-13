import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { OwnerInfo } from "../models/ownerInfo.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const generateAccessandRefereshTokens = async(userId) =>{
    try {      

      const ownerinfo = await OwnerInfo.findById(userId)

      
      const accessToken =  ownerinfo.generateAccessToken()

      const refreshToken =  ownerinfo.generateRefreshToken()
       ownerinfo.refreshToken = refreshToken;
      
      await ownerinfo.save( { validateBeforeSave: false })
      return {accessToken , refreshToken}


    } catch (error) {
        return res.status(402).json({
            success:false,
            message:"Tokens not generated"
        })
    }
}



const ownerInfoDetails = asyncHandler(async(req,res)=>{
     
    const {name} = req.body;

    const shopImageLocalPath =  req.files?.image[0]?.path;

    const shopImage = await uploadOnCloudinary(shopImageLocalPath)

    const shopdetails =  await OwnerInfo.create({
        name: name,
        image:shopImage.url
    })
     
    const options ={
        httpOnly:true,
        secure:true
    }
     console.log("Vishehs");
    const {accessToken,refreshToken} = await generateAccessandRefereshTokens(shopdetails._id)
    
    console.log(accessToken);
    console.log(refreshToken);

    return res.status(201)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(200,shopdetails,"Shop details updated Successfully")
     )
})


const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        return res.status(401).json({
            success:false,
            message:"Unauthorized access"
        })
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const ownerinfo = await OwnerInfo.findById(decodedToken?._id)
    
        if (!ownerinfo) {
            return res.status(401).json({
                success:false,
                message:"Invalid refresh token"
            })
        }
    
        if (incomingRefreshToken !== ownerinfo?.refreshToken) {
            return res.status(401).json({
                success:false,
                message:"Refresh token is expired"
            })
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(ownerinfo._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Invalid Refresh token"
        })
    }

})

export {ownerInfoDetails , refreshAccessToken}