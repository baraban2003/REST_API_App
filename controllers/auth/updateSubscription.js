const { basedir } = global;
const { createError } = require("../../helpers");
const { User } = require(`${basedir}/models/user`);
const { updateSubscriptionSchema } = require("../../schemas/users");

const updateSubscription = async (req, res) => {
  const { error } = updateSubscriptionSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateSubscription;
