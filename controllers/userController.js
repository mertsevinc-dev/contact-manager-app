const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bycrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const availableUser = await User.findOne({ email });
  if (availableUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("newUser", newUser);
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "Register to user" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login route" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user route" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
