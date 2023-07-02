const getAllContacts = async (req, res) => {
  res.send("All Contacts");
};

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      message: "All fields are required",
    });
  }
  res.status(201).json({
    message: "Contact created successfully",
  });
};

const getContact = async (req, res) => {
  res.send("Get Contact");
};

const updateContact = async (req, res) => {
  res.send("Update Contact");
};

const deleteContact = async (req, res) => {
  res.send("Delete Contact");
};

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
