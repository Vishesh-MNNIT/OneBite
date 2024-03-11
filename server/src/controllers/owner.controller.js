import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Owner } from "../models/owner.model.js";

const registerOwner = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body;

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

  const existedUser = await Owner.findOne({
    email,
  });

  if (existedUser) {
    return res.status(409).json({
      success: false,
      message: "Owner with email already exist",
    });
  }

  const owner = await Owner.create({
    email: email,
    password: password,
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

  const owner = await Owner.findOne({
    $or: [{ username }, { email }],
  });

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

export { registerOwner, loginOwner, logoutOwner };
