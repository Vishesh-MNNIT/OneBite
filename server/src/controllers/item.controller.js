import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";;
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Item } from "../models/item.model.js";

const itemInfoDetails = asyncHandler(async(req,res)=>{
     
    const {productName,price} = req.body;

    const productImageLocalPath =  req.files?.productImage[0]?.path;

    const productImage = await uploadOnCloudinary(productImageLocalPath)
     
    const id = req.ownerinfo._conditions._id;
    console.log(id);

    const itemdetails =  await Item.create({
        shopkeeperId:id,
        productName: productName,
        price:price,
        productImage:productImage.url
    })
     
    return res.status(201)
    .json(
        new ApiResponse(200,itemdetails,"Item details updated Successfully")
     )
})

export {itemInfoDetails}