const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
  res.send("All Contacts");
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      message: "All fields are required",
    });
  }
  res.status(201).json({
    message: "Contact created successfully",
  });
});

const getContact = asyncHandler(async (req, res) => {
  res.send("Get Contact");
});

const updateContact = asyncHandler(async (req, res) => {
  res.send("Update Contact");
});

const deleteContact = asyncHandler(async (req, res) => {
  res.send("Delete Contact");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
