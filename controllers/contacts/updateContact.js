const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { contactAddSchema } = require("../../schemas/contacts");

const updateContact = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContact;
