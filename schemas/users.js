const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema,
};
