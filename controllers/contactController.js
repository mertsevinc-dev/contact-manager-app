const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user._id });
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      message: "All fields are required",
    });
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id,
  });
  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const { id: contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const { id: contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to update this contact");
  }

  const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(updateContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id: contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to update this contact");
  }

  const deleteContact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(deleteContact);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
