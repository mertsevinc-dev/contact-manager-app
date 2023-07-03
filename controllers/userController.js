const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register route" });
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
