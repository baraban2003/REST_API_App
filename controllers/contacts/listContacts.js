const Contact = require("../../models/contacts");

const listContacts = async (req, res) => {
  const result = await Contact.find({}, "name email phone favorite");
  res.json(result);
};

module.exports = listContacts;
