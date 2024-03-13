import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

// as key and secret are confidential we keep in env files
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // uplaod fie
       // this operation takes time so we will use await
       const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
       })
         
    //    fs.unlinkSync(localFilePath)
    //    console.log("file is uploaded successfully ",response.url);
       return response
       
       
    } catch (error) {
        fs.unlinkSync(localFilePath)
    }
     
}

export { uploadOnCloudinary }