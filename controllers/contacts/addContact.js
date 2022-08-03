const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { contactAddSchema } = require("../../schemas/contacts");

const addContact = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addContact;
