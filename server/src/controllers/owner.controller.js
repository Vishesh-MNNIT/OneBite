import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Owner } from "../models/owner.model.js";
import { Item } from "../models/item.model.js";

const registerOwner = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  console.log(req.body);
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password and Confirm Password are not same",
    });
  }

  const existedUser = await Owner.findOne({ email });

  if (existedUser) {
    return res.status(409).json({
      success: false,
      message: "Owner with email already exist",
    });
  }

  const owner = await Owner.create({
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  const createdUser = await Owner.findById(owner._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong while registering the owner",
    });
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "Owner Registered Successfully"));
});

const loginOwner = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Username or Email is required",
    });
  }

  const owner = await Owner.findOne({ email });

  if (!owner) {
    return res.status(404).json({
      success: false,
      message: "Owner doesn't found",
    });
  }

  const isPasswordValid = await owner.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid Owner Credentials",
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, owner, "user loggedIn successfully"));
});

const logoutOwner = asyncHandler(async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(200, {}, "User Logout Successfully"));
});

const orderItems = asyncHandler(async(req,res)=>{
  let data = req.body.order_data;
  console.log(data);
})

const submitForm = asyncHandler(async(req,res)=>{
  try {
  console.log(req.body);
  const email = req.body.email;

  // Find the owner with the given email
  const owner = await Owner.findOne({ email });

  // If owner is not found, return an error response
  if (!owner) {
    return res.json({
      success: false,
      message: "Signup first"
    });
  }

  // Update owner's isSubmitted field and save the changes
  if (owner.isSubmitted === false) { // Ensure that isSubmitted needs to be updated
    owner.isSubmitted = true;
    await owner.save();

    // Respond with success message
    return res.json({
      success: true,
      message: "Owner information updated successfully"
    });
  } else {
    // If isSubmitted is already false, respond with a message indicating no changes were made
    return res.json({
      success: true,
      message: "Owner information already up to date"
    });
  }
} catch (error) {
  // Handle any errors that occur during the process
  console.error("Error updating owner information:", error);
  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}
})
const setId= asyncHandler(async(req,res)=>{
  try {
  console.log(req.body);
  const email = req.body.email;
  const id = req.body.id;
  // Find the owner with the given email
  const owner = await Owner.findOne({ email });

  // If owner is not found, return an error response
  if (!owner) {
    return res.json({
      success: false,
      message: "Signup first"
    });
  }

  // Update owner's isSubmitted field and save the changes
  
    owner.id = id;
    await owner.save();

    // Respond with success message
    return res.json({
      success: true,
      message: "Owner information updated successfully"
    });
} catch (error) {
  // Handle any errors that occur during the process
  console.error("Error updating owner information:", error);
  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}
})

const orderDetails= asyncHandler(async(req,res)=>{
  try {
  console.log(req.body);
  // const email = req.body.email;
  const id = req.body.id;
  console.log(id);
  // Find the owner with the given email
  const items = await Item.find({ shopkeeperId: id });
  console.log(items)
  // If owner is not found, return an error response
  if (!items) {
    return res.json({
      success: false,
      message: "Signup first"
    });
  }

  // Update owner's isSubmitted field and save the changes
  

    // Respond with success message
    return res.json({
      items,
      success: true,
      message: "Items sent successfully"
    });
} catch (error) {
  // Handle any errors that occur during the process
  console.error("Error updating owner information:", error);
  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}
})



export { registerOwner, loginOwner, logoutOwner ,orderItems,submitForm,setId,orderDetails};
