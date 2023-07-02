const getAllContacts = async (req, res) => {
  res.send("All Contacts");
};

const createContact = async (req, res) => {
  res.send("Create Contact");
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
