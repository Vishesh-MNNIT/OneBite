import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";;
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Item } from "../models/item.model.js";

const itemInfoDetails = asyncHandler(async(req,res)=>{
    //console.log(req.body);
    const {userId,name,price} = req.body;

    const productImageLocalPath =  req.files?.image[0]?.path;

    const productImage = await uploadOnCloudinary(productImageLocalPath)
     
    //const id = req.ownerinfo._conditions._id;
    // console.log({userId});

    const itemdetails =  await Item.create({
        shopkeeperId:userId,
        productName: name,
        price:price,
        productImage:productImage.url
    })
     
    return res.status(201)
    .json(
        new ApiResponse(200,itemdetails,"Item details updated Successfully")
     )
})

export {itemInfoDetails}