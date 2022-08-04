const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { favoriteSchema } = require("../../schemas/contacts");

const favorite = async (req, res) => {
  const { error } = favoriteSchema.validate(req.body);
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
module.exports = favorite;
