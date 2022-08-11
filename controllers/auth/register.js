const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { registerSchema } = require("../../schemas/users");
const { createError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, `${email} in use`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const result = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Registration confirmation",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}"> Press on link to confirm the registration</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
