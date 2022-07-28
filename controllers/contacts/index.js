const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const favorite = require("./favorite");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  favorite,
};
