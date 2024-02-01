const Joi = require("joi");

const schema = Joi.object({
  nom: Joi.string().max(50).required(),
  prenom: Joi.string().max(50).required(),
  email: Joi.string().max(50).required(),
  password: Joi.string().min(8).max(50).required(),
  adresse: Joi.string().max(150).required(),
  code_postal: Joi.string().max(6).required(),
  localite: Joi.string().max(50).required(),
});

const validateclient = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateclient;
