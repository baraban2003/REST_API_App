const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "/contacts.json");

//to use this code in remove, add, update functionality
async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
  {
    const allContacts = await fs.readFile(contactsPath);
    return JSON.parse(allContacts);
  }
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const oneContact = allContacts.find((e) => e.id === `${contactId}`);

  if (!oneContact) {
    return null;
  }

  return oneContact;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();

  const idx = allContacts.findIndex((e) => e.id === `${contactId}`);
  if (idx === -1) {
    return null;
  }
  const [removeOneContact] = allContacts.splice(idx, 1);
  updateContacts(allContacts);
  return removeOneContact;
};

const addContact = async ({ name, email, phone }) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.push(newContact);
  await updateContacts(allContacts);
  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((e) => e.id === `${contactId}`);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id: contactId, name, email, phone };
  updateContacts(contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
