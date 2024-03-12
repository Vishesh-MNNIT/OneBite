import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

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

  //    // validate email address
  //    const emailDomain = email.split('@')[1];
  //    if (emailDomain !== 'mnnit.ac.in') {
  //        throw new ApiError(403, "Registration is allowed only for college domain");
  //    }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
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
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});

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

  return res
    .status(200)
    .json(new ApiResponse(200, user, "user loggedIn successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(200, {}, "User Logout Successfully"));
});

export { registerUser, loginUser, logoutUser };
