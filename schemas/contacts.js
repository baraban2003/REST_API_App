const Joi = require("joi");
const myCustomJoi = Joi.extend(require("joi-phone-number"));

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().min(3).required().email(),
  //installed the npm i joi-phone-number
  phone: myCustomJoi.string().phoneNumber().required(),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactAddSchema,
  favoriteSchema,
};
