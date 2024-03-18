import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"


const registerUser = asyncHandler(async (req, res) => {
  //get user Details from frontend
  // userValidation - not empty
  // check if user already exists : username , email
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { email, fullName, username, password } = req.body;

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }


  
  const isMNNITEmail = (email) => {
    const mnnitRegex = /^[a-zA-Z]+\.[0-9]{8}@mnnit\.ac\.in$/; // Regex to check if the email matches the custom pattern

    return mnnitRegex.test(email);
};
     
     if(!isMNNITEmail(email)){
        return res.status(411).json({
          sucess:false,
          message:"Enter valid gsuite address",
          statusCode:411
        })
     }


     const isStrongPassword = (password) => {
      // Define regex pattern for a strong password
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!\s).{8,}$/;
  
      // Check if the password matches the pattern
      return strongPasswordRegex.test(password);
     };

  if (!isStrongPassword(password)) {
      return res.status(412).json({
          success: false,
          message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, one special character, and no whitespace.",
          statusCode: 412
      });
  }




  //    // validate email address
  //    const emailDomain = email.split('@')[1];
  //    if (emailDomain !== 'mnnit.ac.in') {
  //        throw new ApiError(403, "Registration is allowed only for college domain");
  //    }

  const existedUser = await User.findOne({
    email
  });

  if (existedUser) {
    return res.status(403).json({
      success: false,
      message: "User Already exist",
    });
  }

  // creating user in database
  const user = await User.create({
    fullName,
    email: email,
    password: password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while registering the user",
    });
  }

  // returning response

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});


const generateAccessandRefereshTokens = async(userId) =>{
  try {
      

    const user = await User.findById(userId)

    
    const accessToken =  user.generateAccessToken()
  //   console.log("yha p hi h error");

    const refreshToken =  user.generateRefreshToken()
  // console.log("yha pahuch gya ma");
    user.refreshToken = refreshToken;
    
    await user.save( { validateBeforeSave: false })
    return {accessToken , refreshToken}


  } catch (error) {
      return status(500).json({
        success:false,
        message:"Tokens are not generated something went wrong"
      })
  }
}


const loginUser = asyncHandler(async (req, res) => {
  // req -> body
  // username or email
  //find the user
  // password check

  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: "Enter Valid Credentials",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      statusCode: 404,
      success: false,
      message: "User Doesn't exist",
    });
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: "Invalid User Credentials",
    });
  }
    
  const {accessToken,refreshToken} = await generateAccessandRefereshTokens(user._id)
    
  // console.log(accessToken);
  // const loggedInuser =  await User.findById(user._id).select(" -password -refreshToken")

  // for stopping cookies change from frontend

  const options ={
      httpOnly:true,
      secure:true
  }
 
  return res.status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(
      new ApiResponse(
          200,
          {
            accessToken,user
          },
          "user loggedIn successfully"
      ),
     
  )
});
const logoutUser = asyncHandler(async(req,res)=>{
  //  console.log("Logout is there");
  //  console.log(req.user._conditions._id);
  // console.log(Vishesh);
   await User.findByIdAndUpdate(req.user._conditions._id, 
    {
      $unset: {
          refreshToken: 1
      }
  },
  {
      new: true
  }
    );

 const options ={
     httpOnly:true,
     secure:true
 }

  return res.status(200)
 .clearCookie("accessToken",options)
 .clearCookie("refreshToken",options)
 .json( new ApiResponse(200,{},"User logged out"))
})



const forgotPassword = asyncHandler(async(req,res)=>{
  const {email} = req.body;
  // console.log(email);
  const user = await User.findOne({
     email:email
  })
//  console.log(user);
  if( !user){
     return res.status(400).json({
      success:false,
      message:"User doesn't exist"
     })
  }

  const token = jwt.sign(
    {
        _id: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
  //  console.log(token);
   const transporter = nodemailer.createTransport({
    service:"gmail",
    port: 587,
    auth: {
        user: 'visheshagrawal602@gmail.com',
        pass: 'ykxl zirr ysmt xjtq'
    }
});
    
    const mailOptions = {
      from: 'visheshagrawal602@gmail.com',
      to: email,
      subject: 'Reset your password',
      text: `http://localhost:5173/reset-password/${user._id}/${token}`
    };
    // `http://localhost:5173/reset-password/${user._id}/${token}`

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error + " error aya yhape");
      } else {
          return res.status(200).json({
            sucess:true,
            message:"Reset mail sent successfully"
          })
      }
    });


})

const resetPassword = asyncHandler(async(req,res)=>{
const {id, token} = req.params
  const {password} = req.body
  // console.log(id);
  // console.log(`${id}  and  ${password}`);
  // console.log(req.params);
  // console.log(req.body);

  try {
    const decodedToken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
    
    if (!decodedToken) {
        return res.status(403).json({ success: false, message: "Invalid token" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    
    const user = await User.findByIdAndUpdate(
        { _id: id },
        { password: hashPassword },
        { new: true } // Ensure you get the updated document
    );

    if (!user) {
        return res.status(403).json({
            success: false,
            message: "Error while updating"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Password updated successfully"
    });
} catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
}

})

export { registerUser, loginUser, logoutUser,forgotPassword, resetPassword };

