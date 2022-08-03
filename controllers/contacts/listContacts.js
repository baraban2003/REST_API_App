const { boolean } = require("joi");
const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, favorite },
    "email phone favorite",
    {
      skip,
      limit: Number(limit),
      favorite: true,
    }
  ).populate("owner", "email");
  res.json(result);
};

module.exports = listContacts;
