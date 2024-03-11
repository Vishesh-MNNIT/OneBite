import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
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
    throw new ApiError(400, "All fields are required");
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
    return res.status(400).json({
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
    throw new ApiError(500, "Something went wrong while registering the user");
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

  const { username, email, password } = req.body;

  if (!(email || username)) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "user doesn't found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
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
